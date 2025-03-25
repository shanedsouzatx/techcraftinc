"use client"
import Image from "next/image"
import type React from "react"

import { useEffect, useState } from "react"
import { useFormContext } from "@/context/FormContext"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface FormValues {
  companyName: string
  companyMeaning: string
  slogan: string
  description: string
  competitors: string
  logousage: string
  objectsToInclude: string
  logosLikeReason: string
  logosDislikeReason: string
  designStyle: string
  fontStyles: string[]
  iconStyles: string[]
  [key: string]: string | string[] | File[] | undefined
}

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  description: Yup.string().required("Company description is required"),
  designStyle: Yup.string().required("Please select a design style"),
})

export function Step2Form() {
  const { nextStep, prevStep, formData, setFormData } = useFormContext()
  const [objectFiles, setObjectFiles] = useState<File[]>([])
  const [likeFiles, setLikeFiles] = useState<File[]>([])
  const [dislikeFiles, setDislikeFiles] = useState<File[]>([])

  // State for saved data
  const [savedData, setSavedData] = useState({
    companyName: "",
    companyMeaning: "",
    slogan: "",
    description: "",
    competitors: "",
    logousage: "",
    objectsToInclude: "",
    logosLikeReason: "",
    logosDislikeReason: "",
    designStyle: "",
    fontStyles: [] as string[],
    iconStyles: [] as string[],
  })

  // Load saved data from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCompanyName = localStorage.getItem("companyName") || formData.company || ""
        const savedCompanyMeaning = localStorage.getItem("companyMeaning") || ""
        const savedSlogan = localStorage.getItem("slogan") || ""
        const savedDescription = localStorage.getItem("description") || formData.briefDescription || ""
        const savedCompetitors = localStorage.getItem("competitors") || ""
        const savedlogousage = localStorage.getItem("logousage") || ""
        const savedObjectsToInclude = localStorage.getItem("objectsToInclude") || ""
        const savedLogosLikeReason = localStorage.getItem("logosLikeReason") || ""
        const savedLogosDislikeReason = localStorage.getItem("logosDislikeReason") || ""
        const savedDesignStyle = localStorage.getItem("logoDesignStyle") || ""

        const savedFontStylesStr = localStorage.getItem("logoFontStyles")
        const savedFontStyles = savedFontStylesStr ? JSON.parse(savedFontStylesStr) : []

        const savedIconStylesStr = localStorage.getItem("logoIconStyles")
        const savedIconStyles = savedIconStylesStr ? JSON.parse(savedIconStylesStr) : []

        setSavedData({
          companyName: savedCompanyName,
          companyMeaning: savedCompanyMeaning,
          slogan: savedSlogan,
          description: savedDescription,
          competitors: savedCompetitors,
          logousage: savedlogousage,
          objectsToInclude: savedObjectsToInclude,
          logosLikeReason: savedLogosLikeReason,
          logosDislikeReason: savedLogosDislikeReason,
          designStyle: savedDesignStyle,
          fontStyles: savedFontStyles,
          iconStyles: savedIconStyles,
        })
      } catch (error) {
        console.error("Error loading logo design data from localStorage:", error)
      }
    }
  }, [formData])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "objects" | "like" | "dislike") => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      if (type === "objects") {
        setObjectFiles(filesArray)
      } else if (type === "like") {
        setLikeFiles(filesArray)
      } else if (type === "dislike") {
        setDislikeFiles(filesArray)
      }
    }
  }

  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    // Save all form values to localStorage
    Object.keys(values).forEach((key) => {
      if (key === "fontStyles" || key === "iconStyles") {
        localStorage.setItem(`logo${key.charAt(0).toUpperCase() + key.slice(1)}`, JSON.stringify(values[key]))
      } else if (key === "designStyle") {
        localStorage.setItem("logoDesignStyle", values[key]?.toString() || "")
      } else {
        localStorage.setItem(key, values[key]?.toString() || "")
      }
    })

    // Create logo data object
    const logoData: Record<string, any> = {
      ...values,
    }

    // Save object files
    if (objectFiles.length > 0) {
      logoData.objectImages = objectFiles
    }

    // Save logo reference files
    if (likeFiles.length > 0) {
      logoData.logosLike = likeFiles
    }

    if (dislikeFiles.length > 0) {
      logoData.logosDislike = dislikeFiles
    }

    // Update context
    setFormData({
      logoData,
    })

    setSubmitting(false)

    // Move to next step
    nextStep()
  }

  // Function to scroll to first error
  const scrollToError = () => {
    const errorElement = document.querySelector(".text-red-500")
    if (errorElement) {
      errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  // Design style options
  const designStyleOptions = [
    { value: "minimal", label: "Minimal", image: "/Avatar/m1.webp" },
    { value: "artistic", label: "Artistic", image: "/Avatar/m2.webp" },
    { value: "sophisticated", label: "Sophisticated", image: "/Avatar/m3.webp" },
    { value: "corporate", label: "Corporate", image: "/Avatar/m4.webp" },
    { value: "fun", label: "Fun", image: "/Avatar/m5.webp" },
    { value: "hitech", label: "Hi-Tech", image: "/Avatar/m6.webp" },
  ]

  // Font style options
  const fontStyleOptions = [
    { value: "justFont", label: "Just Font", image: "/Avatar/m11.webp" },
    { value: "handmade", label: "Handmade", image: "/Avatar/m22.webp" },
    { value: "initials", label: "Initials", image: "/Avatar/m33.webp" },
    { value: "fontInShape", label: "Font in Shape", image: "/Avatar/m44.webp" },
  ]

  // Icon style options
  const iconStyleOptions = [
    { value: "abstract", label: "Abstract", image: "/Avatar/lo1.webp" },
    { value: "silhouette", label: "Silhouette", image: "/Avatar/lo2.webp" },
    { value: "geometric", label: "Geometric", image: "/Avatar/lo3.webp" },
    { value: "mascot", label: "Mascot", image: "/Avatar/lo4.webp" },
    { value: "esports", label: "E-sports", image: "/Avatar/lo5.webp" },
    { value: "detailed", label: "Detailed illustration", image: "/Avatar/lo6.webp" },
    { value: "3d", label: "3D", image: "/Avatar/lo7.webp" },
    { value: "seals and crest", label: "Seals & Crest", image: "/Avatar/lo8.webp" },
  ]

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
          <h1 className="text-5xl font-bold text-center text-[#332D67] mb-4 tracking-tight">
            Logo Design Questionnaire
          </h1>
          <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">
            Tell us about your company and logo preferences
          </p>

          <Formik
            initialValues={{
              companyName: savedData.companyName,
              companyMeaning: savedData.companyMeaning,
              slogan: savedData.slogan,
              description: savedData.description,
              competitors: savedData.competitors,
              logousage: savedData.logousage,
              objectsToInclude: savedData.objectsToInclude,
              logosLikeReason: savedData.logosLikeReason,
              logosDislikeReason: savedData.logosDislikeReason,
              designStyle: savedData.designStyle,
              fontStyles: savedData.fontStyles,
              iconStyles: savedData.iconStyles,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
              <Form className="space-y-8 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#332D67]">Company & Branding</h3>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="block text-base font-semibold text-[#332D67] mb-2">
                        What is your company name? *
                      </Label>
                      <Field
                        as={Input}
                        id="companyName"
                        name="companyName"
                        placeholder="Enter your company name"
                        className={`border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${
                          errors.companyName && touched.companyName ? "border-red-500 bg-red-50" : ""
                        }`}
                      />
                      <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyMeaning" className="block text-base font-semibold text-[#332D67] mb-2">
                        Does your company name have a specific meaning?
                      </Label>
                      <Field
                        as={Textarea}
                        id="companyMeaning"
                        name="companyMeaning"
                        placeholder="Explain the meaning behind your company name"
                        className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="slogan" className="block text-base font-semibold text-[#332D67] mb-2">
                        Do you have a slogan/motto to include in the logo?
                      </Label>
                      <Field
                        as={Input}
                        id="slogan"
                        name="slogan"
                        placeholder="Enter your slogan or motto (if any)"
                        className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="block text-base font-semibold text-[#332D67] mb-2">
                        Describe your product/service/organization in a few sentences *
                      </Label>
                      <Field
                        as={Textarea}
                        id="description"
                        name="description"
                        placeholder="What does your company do? Who are your customers?"
                        className={`min-h-[100px] border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${
                          errors.description && touched.description ? "border-red-500 bg-red-50" : ""
                        }`}
                      />
                      <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="competitors" className="block text-base font-semibold text-[#332D67] mb-2">
                        Who are your main competitors or similar businesses?
                      </Label>
                      <Field
                        as={Textarea}
                        id="competitors"
                        name="competitors"
                        placeholder="List your main competitors"
                        className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logousage" className="block text-base font-semibold text-[#332D67] mb-2">
                      Where do you plan to use this logo? 
                      </Label>
                      <Field
                        as={Textarea}
                        id="logousage"
                        name="logousage"
                        placeholder="i'll use this logo ............."
                        className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#100D22] mb-8 flex items-center gap-3">Logo Preferences</h3>

                    <div className="space-y-2">
                      <Label htmlFor="objectsToInclude" className="block text-base font-semibold text-[#332D67] mb-2">
                        Do you have any objects or images you want to include in the logo?
                      </Label>
                      <Field
                        as={Textarea}
                        id="objectsToInclude"
                        name="objectsToInclude"
                        placeholder="Describe any specific objects or images you want in your logo"
                        className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                      <div className="py-3">
                        <Label htmlFor="objectImages" className="block text-base font-semibold text-[#332D67] mb-2">
                          Upload reference images (optional)
                        </Label>
                        <Input
                          id="objectImages"
                          name="objectImages"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "objects")}
                          className="pb-4 mr-2  border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        />
                        {objectFiles.length > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">{objectFiles.length} file(s) selected</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logosLike" className="block text-base font-semibold text-[#332D67] mb-2">
                        Which logos do you like and why?
                      </Label>
                      <div className="mt-2">
                        <Input
                          id="logosLike"
                          name="logosLike"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "like")}
                          className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        />
                        {likeFiles.length > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">{likeFiles.length} file(s) selected</p>
                        )}
                      </div>
                      <Field
                        as={Textarea}
                        id="logosLikeReason"
                        name="logosLikeReason"
                        placeholder="Explain what you like about this logo"
                        className="mt-2 border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logosDislike" className="block text-base font-semibold text-[#332D67] mb-2">
                        Which logos do you dislike and why?
                      </Label>
                      <div className="mt-2">
                        <Input
                          id="logosDislike"
                          name="logosDislike"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "dislike")}
                          className="border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        />
                        {dislikeFiles.length > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">{dislikeFiles.length} file(s) selected</p>
                        )}
                      </div>
                      <Field
                        as={Textarea}
                        id="logosDislikeReason"
                        name="logosDislikeReason"
                        placeholder="Explain what you dislike about this logo"
                        className="mt-2 border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>

                    <div className="space-y-3 pt-11">
                      <Label className="block text-xl font-semibold text-[#332D67] mb-2">Which general design styles do you prefer? *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {designStyleOptions.map((style) => (
                          <label
                            key={style.value}
                            className={`border rounded-lg p-1 cursor-pointer transition-all ${
                              values.designStyle === style.value
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300"
                            }`}
                          >
                            <div className="flex  flex-col items-center">
                              <Image
                                src={style.image || "/placeholder.svg"}
                                alt={style.label}
                                width={200}
                                height={200}
                                className="mb-1  h-[70%] rounded"
                              />
                              <div className="flex items-center mt-2">
                                <Field type="radio" name="designStyle" value={style.value} className="mr-2 h-4 w-4" />
                                <span className="block text-base font-semibold text-[#332D67] mb-2 font-medium">{style.label}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.designStyle && touched.designStyle && (
                        <div className="text-red-500 text-sm mt-1">{errors.designStyle}</div>
                      )}
                    </div>

                    <div className="space-y-3 pt-11">
                      <Label className="block text-xl font-semibold text-[#332D67] mb-2">Which font-based logo styles do you prefer?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {fontStyleOptions.map((style) => (
                          <label
                            key={style.value}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              values.fontStyles?.includes(style.value)
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
                                <Field type="checkbox" name="fontStyles" value={style.value} className="mr-2 h-4 w-4" />
                                <span className="block text-base font-semibold text-[#332D67] mb-2 font-medium">{style.label}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-11 ">
                      <Label className="block text-xl font-semibold text-[#332D67] mb-2">Which icon-based logo styles do you prefer?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {iconStyleOptions.map((style) => (
                          <label
                            key={style.value}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              values.iconStyles?.includes(style.value)
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
                                className="mb-1  h-[50%] rounded"
                              />
                              <div className="flex items-center mt-2">
                                <Field type="checkbox" name="iconStyles" value={style.value} className="mr-2 h-4 w-4" />
                                <span className="block text-base font-semibold text-[#332D67] mb-2 font-medium">{style.label}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
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
                    {isSubmitting ? "Processing..." : "Next Step"}
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

