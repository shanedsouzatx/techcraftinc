"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useFormContext } from "@/context/FormContext"

import { useRouter } from "next/navigation"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle, X } from "lucide-react"

interface FormValues {
  additionalComments: string
  //   logoFeel: string
  [key: string]: string | string[] | undefined
}

const validationSchema = Yup.object({
  additionalComments: Yup.string(),
})

export function Step3Form() {
    const router = useRouter()
  const { nextStep, prevStep, formData, setFormData } = useFormContext()

  const [customColor, setCustomColor] = useState("")
  const [savedData, setSavedData] = useState({
    colors: [] as string[],
    customColors: [] as string[],
    fontPreferences: [] as string[],
    // logoFeel: "",
    additionalComments: "",
  })

  // Load saved data from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedColorsStr = localStorage.getItem("logoColors")
        const savedColors = savedColorsStr ? JSON.parse(savedColorsStr) : []

        const savedCustomColorsStr = localStorage.getItem("logoCustomColors")
        const savedCustomColors = savedCustomColorsStr ? JSON.parse(savedCustomColorsStr) : []

        const savedFontPreferencesStr = localStorage.getItem("logoFontPreferences")
        const savedFontPreferences = savedFontPreferencesStr ? JSON.parse(savedFontPreferencesStr) : []

        // const savedLogoFeel = localStorage.getItem("logoFeel") || ""
        const savedAdditionalComments = localStorage.getItem("additionalComments") || ""

        setSavedData({
          colors: savedColors,
          customColors: savedCustomColors,
          fontPreferences: savedFontPreferences,
          //   logoFeel: savedLogoFeel,
          additionalComments: savedAdditionalComments,
        })
      } catch (error) {
        console.error("Error loading logo design data from localStorage:", error)
      }
    }
  }, [])

  const addCustomColor = (values: any, setFieldValue: any) => {
    if (customColor && !values.customColors.includes(customColor)) {
      const newCustomColors = [...values.customColors, customColor]
      setFieldValue("customColors", newCustomColors)
      setCustomColor("")
      localStorage.setItem("logoCustomColors", JSON.stringify(newCustomColors))
    }
  }

  const removeCustomColor = (colorToRemove: string, values: any, setFieldValue: any) => {
    const newCustomColors = values.customColors.filter((color: string) => color !== colorToRemove)
    setFieldValue("customColors", newCustomColors)
    localStorage.setItem("logoCustomColors", JSON.stringify(newCustomColors))
  }

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    console.log("Step3Form submitting with values:", values)

    // Save form values to localStorage
    localStorage.setItem("additionalComments", values.additionalComments)
    localStorage.setItem("logoColors", JSON.stringify(values.colors))
    localStorage.setItem("logoCustomColors", JSON.stringify(values.customColors))
    localStorage.setItem("logoFontPreferences", JSON.stringify(values.fontPreferences))

    try {
      // Collect all form data from localStorage
      const allFormData = {
        // Personal details from step 1
        name: localStorage.getItem("name") || "",
        email: localStorage.getItem("email") || "",
        phone: localStorage.getItem("phone") || "",
        company: localStorage.getItem("company") || "",
        companyWebsite: localStorage.getItem("companyWebsite") || "",
        briefDescription: localStorage.getItem("briefDescription") || "",
        service: localStorage.getItem("service") || "",

        // Logo data from step 2 and 3
        logoData: {
          // Step 2 data
          companyName: localStorage.getItem("companyName") || "",
          companyMeaning: localStorage.getItem("companyMeaning") || "",
          slogan: localStorage.getItem("slogan") || "",
          description: localStorage.getItem("description") || "",
          competitors: localStorage.getItem("competitors") || "",
          logousage: localStorage.getItem("logousage") || "",
          objectsToInclude: localStorage.getItem("objectsToInclude") || "",
          logosLikeReason: localStorage.getItem("logosLikeReason") || "",
          logosDislikeReason: localStorage.getItem("logosDislikeReason") || "",
          designStyle: localStorage.getItem("logoDesignStyle") || "",
          fontStyles: JSON.parse(localStorage.getItem("logoFontStyles") || "[]"),
          iconStyles: JSON.parse(localStorage.getItem("logoIconStyles") || "[]"),

          // Step 3 data
          colors: values.colors,
          customColors: values.customColors,
          fontPreferences: values.fontPreferences,
          additionalComments: values.additionalComments,
        },
      }

      console.log("Sending form data to server:", allFormData)

      // Send data to PHP endpoint
      const response = await fetch("/logo-design-brief.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          formData: JSON.stringify(allFormData),
        }).toString(),
      })

      if (response.ok) {
        console.log("Form submitted successfully")
        // Clear localStorage after successful submission
        localStorage.clear()
        // Move to next step or thank you page
        router.push("/brief/thank-you")
        nextStep()
      } else {
        console.error("Error submitting form:", await response.text())
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  // Function to scroll to first error
  const scrollToError = () => {
    const errorElement = document.querySelector(".text-red-500")
    if (errorElement) {
      errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  // Color options
  const colorOptions = [
    { value: "blue", label: "Blue", color: "#3B82F6" },
    { value: "green", label: "Green", color: "#10B981" },
    { value: "red", label: "Red", color: "#EF4444" },
    { value: "orange", label: "Orange", color: "#F97316" },
    { value: "purple", label: "Purple", color: "#8B5CF6" },
    { value: "yellow", label: "Yellow", color: "#FBBF24" },
    { value: "pink", label: "Pink", color: "#EC4899" },
    { value: "teal", label: "Teal", color: "#14B8A6" },
    { value: "black", label: "Black", color: "#000000" },
    { value: "white", label: "White", color: "#FFFFFF" },
    { value: "gray", label: "Gray", color: "#6B7280" },
  ]

  // Font style options
  const fontOptions = [
    {
      value: "slim",
      label: "Slim",
      image: "/Avatar/Fonts-01.webp",
      className: "font-slim",
    },
    {
      value: "rounded",
      label: "Rounded",
      image: "/Avatar/Fonts-02.webp",
      className: "font-rounded",
    },
    {
      value: "bolder",
      label: "Bolder",
      image: "/Avatar/Fonts-03.webp",
      className: "bolder",
    },
    {
      value: "serif",
      label: "Serif",
      image: "/Avatar/Fonts-04.webp",
      className: "serif",
    },
    {
      value: "san-serif",
      label: "San Serif",
      image: "/Avatar/Fonts-05.webp",
      className: "font-san-serif",
    },
    {
      value: "calligraphy",
      label: "calligraphy",
      image: "/Avatar/Fonts-06.webp",
    },
    {
      value: "script",
      label: "Script",
      image: "/Avatar/Fonts-07.webp",
      className: "script",
    },
    {
      value: "techno",
      label: "Techno",
      image: "/Avatar/Fonts-08.webp",
      className: "font-techno",
    },
    {
      value: "graffiti",
      label: "Graffiti",
      image: "/Avatar/Fonts-12.webp",
      className: "font-graffiti",
    },
    {
      value: "Ccomic",
      label: "Comic",
      image: "/Avatar/Fonts-10.webp",
      className: "font-comic",
    },
  ]

  // Logo feel options
  //   const logoFeelOptions = [
  //     { value: "minimal", label: "Minimal", image: "/placeholder.svg?height=100&width=100" },
  //     { value: "retro", label: "Retro", image: "/placeholder.svg?height=100&width=100" },
  //     { value: "corporate", label: "Corporate", image: "/placeholder.svg?height=100&width=100" },
  //     { value: "traditional", label: "Traditional", image: "/placeholder.svg?height=100&width=100" },
  //     { value: "fun", label: "Fun", image: "/placeholder.svg?height=100&width=100" },
  //     { value: "modern", label: "Modern", image: "/placeholder.svg?height=100&width=100" },
  //   ]

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FAFAFA, #F5F5F5)" }}
    >
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#AE96D0] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#AE96D0] to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/images/tech-craft-logo.png"
            alt="Company Logo"
            width={400}
            height={350}
            className="h-15"
          />
        </motion.div>

        <ProgressBar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-center text-[#332D67] mb-4 tracking-tight">Logo Design Preferences</h1>
          <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">
            Tell us about your color and style preferences
          </p>

          <Formik
            initialValues={{
              colors: savedData.colors,
              customColors: savedData.customColors,
              fontPreferences: savedData.fontPreferences,
              //   logoFeel: savedData.logoFeel,
              additionalComments: savedData.additionalComments,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
              <Form className="space-y-8 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#332D67]">Colors & Fonts</h3>

                    <div className="space-y-3 pt-4">
                      <Label className="block text-base font-semibold text-[#332D67] mb-2">
                        Which colors should be explored?
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {colorOptions.map((colorOption) => (
                          <label
                            key={colorOption.value}
                            className={`border rounded-lg p-3 cursor-pointer transition-all ${
                              values.colors?.includes(colorOption.value)
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300"
                            }`}
                          >
                            <div className="flex items-center">
                              <Field type="checkbox" name="colors" value={colorOption.value} className="mr-2 h-4 w-4" />
                              <div className="flex items-center">
                                <div
                                  className="w-6 h-6 rounded-full border border-gray-300 mr-2"
                                  style={{ backgroundColor: colorOption.color }}
                                ></div>
                                <span className="text-[#332D67]">{colorOption.label}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Label className="block text-base font-semibold text-[#332D67] mb-2">
                        Add custom colors (optional)
                      </Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="color"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          className="w-12 h-10 p-1 border-purple-500"
                        />
                        <Input
                          type="text"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          placeholder="#RRGGBB"
                          className="flex-1 border-purple-500"
                        />
                        <Button
                          type="button"
                          size="icon"
                          onClick={() => addCustomColor(values, setFieldValue)}
                          variant="outline"
                          className="border-purple-500"
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>

                      {values.customColors && values.customColors.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {values.customColors.map((color: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-center space-x-1 bg-muted rounded-full pl-1 pr-2 py-1"
                            >
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                              <span className="text-xs">{color}</span>
                              <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                className="h-4 w-4"
                                onClick={() => removeCustomColor(color, values, setFieldValue)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 pt-9">
                      <Label className="block text-lg font-semibold text-[#332D67] mb-2">
                        Which font styles do you prefer?
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {fontOptions.map((style) => (
                          <label
                            key={style.value}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              values.fontPreferences?.includes(style.value)
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300"
                            }`}
                          >
                            <div className="flex flex-col items-center">
                              <Image
                                src={style.image || "/placeholder.svg"}
                                alt={style.label}
                                width={200}
                                height={200}
                                className="mb-1  h-[70%] rounded"
                              />
                              <div className="flex items-center mt-2">
                                <Field
                                  type="checkbox"
                                  name="fontPreferences"
                                  value={style.value}
                                  className="mr-2 h-4 w-4"
                                />
                                <span className={`text-[#332D67] font-medium ${style.className || ""}`}>
                                  {style.label}
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* <h3 className="text-lg font-medium text-[#332D67]">Final Preferences</h3> */}

                    {/* <div className="space-y-3">
                      <Label className="text-[#332D67]">How should the logo feel?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {logoFeelOptions.map((style) => (
                          <label
                            key={style.value}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              values.logoFeel === style.value
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300"
                            }`}
                          >
                            <div className="flex flex-col items-center">
                              <Image
                                src={style.image || "/placeholder.svg"}
                                alt={style.label}
                                width={100}
                                height={100}
                                className="mb-2 rounded"
                              />
                              <div className="flex items-center mt-2">
                                <Field type="radio" name="logoFeel" value={style.value} className="mr-2 h-4 w-4" />
                                <span className="text-[#332D67] font-medium">{style.label}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div> */}

                    <div className="space-y-2">
                      <Label htmlFor="additionalComments" className="block text-base font-semibold text-[#332D67] mb-2">
                        Any additional comments or specific requests?
                      </Label>
                      <Field
                        as={Textarea}
                        id="additionalComments"
                        name="additionalComments"
                        placeholder="Share any other details that might help us create your perfect logo"
                        className="min-h-[120px] border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                      <ErrorMessage name="additionalComments" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg 
                      hover:bg-gray-300 focus:outline-none focus:ring-2 
                      focus:ring-gray-300 focus:ring-offset-2 transition-all 
                      duration-200 flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
                    Previous
                  </motion.button>

                  <motion.button
                    type="submit"
                    onClick={() => setTimeout(scrollToError, 100)}
                    className="group px-6 py-3 bg-purple-600 text-white rounded-lg 
                      hover:bg-purple-700 focus:outline-none focus:ring-2 
                      focus:ring-purple-500 focus:ring-offset-2 transition-all 
                      duration-200 flex items-center gap-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit"}
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </div>
  )
}

