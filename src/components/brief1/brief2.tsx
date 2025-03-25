"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useFormContext } from "@/context/FormContext"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"

interface FormValues {
  projectName: string
  projectType: string
  budget: string
  timeline: string
  projectGoals: string
  designStyle: string
  hasExistingBranding: string
  brandingFiles: string
  brandingColors: string[]
  referenceWebsites: string
  websiteValues: string
  numberOfPages: string
  keyFeatures: string[]
  requiresIntegrations: string
  integrationDetails: string
  isEcommerce: string
  ecommerceDetails: string
  needsSSL: string
  customDesignStyle: string
  customFeature: string
  [key: string]: string | string[] | undefined
}

const validationSchema = Yup.object({
  designStyle: Yup.string().required("Please select a design style"),
  hasExistingBranding: Yup.string().required("Please specify if you have existing branding"),
  brandingFiles: Yup.string().when("hasExistingBranding", {
    is: "true",
    then: (schema) => schema,
    otherwise: (schema) => schema,
  }),
  brandingColors: Yup.array().when("hasExistingBranding", {
    is: "true",
    then: (schema) => schema.min(1, "Please select at least one brand color"),
    otherwise: (schema) => schema,
  }),
  referenceWebsites: Yup.string().required("Please provide reference websites"),
  websiteValues: Yup.string().required("Please describe your website values"),
  numberOfPages: Yup.string()
    .required("Please specify the number of pages")
    .test("is-number", "Please enter a valid number", (value) => !isNaN(Number(value)))
    .test("min-value", "Minimum value is 1", (value) => Number(value) >= 1)
    .test("max-value", "Maximum value is 99", (value) => Number(value) <= 99),
  keyFeatures: Yup.array().min(1, "Please select at least one feature"),
  requiresIntegrations: Yup.string().required("Please specify if you need integrations"),
  integrationDetails: Yup.string().when("requiresIntegrations", {
    is: "true",
    then: (schema) => schema.required("Please provide integration details"),
    otherwise: (schema) => schema,
  }),
  isEcommerce: Yup.string().required("Please specify if this is an eCommerce website"),
  ecommerceDetails: Yup.string().when("isEcommerce", {
    is: "true",
    then: (schema) => schema.required("Please provide eCommerce details"),
    otherwise: (schema) => schema,
  }),
})

const Brief2 = () => {
  const { nextStep, formData, setFormData, prevStep, step } = useFormContext()

  // Predefined color options
  const colorOptions = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Orange", value: "#FFA500" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Gray", value: "#808080" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Teal", value: "#008080" },
    { name: "Brown", value: "#A52A2A" },
  ]

  // State for custom color
  const [customColor, setCustomColor] = useState("#000000")

  // State to hold saved data
  const [savedData, setSavedData] = useState({
    designStyle: "",
    hasExistingBranding: "",
    brandingFiles: "",
    brandingColors: [] as string[],
    referenceWebsites: "",
    websiteValues: "",
    numberOfPages: "",
    keyFeatures: [] as string[],
    requiresIntegrations: "",
    integrationDetails: "",
    isEcommerce: "",
    ecommerceDetails: "",
    needsSSL: "",
    customDesignStyle: "",
    customFeature: "",
  })

  useEffect(() => {
    console.log("Brief2 rendered, current step:", step)

    // Load data from localStorage
    if (typeof window !== "undefined") {
      try {
        const designStyle = localStorage.getItem("designStyle") || ""
        const hasExistingBranding = localStorage.getItem("hasExistingBranding") || ""
        const brandingFiles = localStorage.getItem("brandingFiles") || ""
        const brandingColorsStr = localStorage.getItem("brandingColors")
        const brandingColors = brandingColorsStr ? JSON.parse(brandingColorsStr) : []
        const referenceWebsites = localStorage.getItem("referenceWebsites") || ""
        const websiteValues = localStorage.getItem("websiteValues") || ""
        const numberOfPages = localStorage.getItem("numberOfPages") || ""
        const keyFeaturesStr = localStorage.getItem("keyFeatures")
        const keyFeatures = keyFeaturesStr ? JSON.parse(keyFeaturesStr) : []
        const requiresIntegrations = localStorage.getItem("requiresIntegrations") || ""
        const integrationDetails = localStorage.getItem("integrationDetails") || ""
        const isEcommerce = localStorage.getItem("isEcommerce") || ""
        const ecommerceDetails = localStorage.getItem("ecommerceDetails") || ""
        const needsSSL = localStorage.getItem("needsSSL") || ""
        const customDesignStyle = localStorage.getItem("customDesignStyle") || ""
        const customFeature = localStorage.getItem("customFeature") || ""

        console.log("Loaded from localStorage:", {
          designStyle,
          hasExistingBranding,
          brandingColors,
          referenceWebsites,
          websiteValues,
          numberOfPages,
          keyFeatures,
        })

        setSavedData({
          designStyle,
          hasExistingBranding,
          brandingFiles,
          brandingColors,
          referenceWebsites,
          websiteValues,
          numberOfPages,
          keyFeatures,
          requiresIntegrations,
          integrationDetails,
          isEcommerce,
          ecommerceDetails,
          needsSSL,
          customDesignStyle,
          customFeature,
        })
      } catch (error) {
        console.error("Error loading data from localStorage:", error)
      }
    }

    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [step])

  const initialValues: FormValues = {
    ...savedData,
    projectName: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectGoals: "",
  }

  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    console.log("Brief2 submitting with values:", values)

    // Save form data to localStorage
    try {
      Object.keys(values).forEach((key) => {
        if (key === "keyFeatures" || key === "brandingColors") {
          localStorage.setItem(key, JSON.stringify(values[key]))
        } else {
          localStorage.setItem(key, values[key]?.toString() || "")
        }
      })

      console.log("Saved to localStorage")
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }

    setFormData(values) // Save form data in context
    console.log("Moving to next step from Brief2")
    nextStep() // This should move to step 3
    setSubmitting(false)
  }

  const featureOptions = [
    "Blog",
    "Services",
    "Product Pages",
    "About us",
    "Contact Form",
    "Booking System",
    "FAQ Section",
    "Newsletter Subscription",
    "Social Media Integration",
    "Search Functionality",
    "User Authentication",
    "Other",
  ]

  // Function to scroll to first error
  const scrollToError = () => {
    const errorElement = document.querySelector(".text-red-500")
    if (errorElement) {
      errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          <h1 className="text-5xl font-bold text-center text-[#332D67] mb-4 tracking-tight">Project Requirements</h1>
          <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">
            (Design, Development, Features and Maintenance)
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => {
              console.log("Form values:", values)
              console.log("Form errors:", errors)
              return (
                <Form className="space-y-12">
                  {/* Design Preferences Section */}
                  <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-[#100D22] mb-8 flex items-center gap-3">
                      Design Preferences
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Design Style */}
                      <div className="col-span-full">
                        <label className="block text-base font-semibold text-[#332D67] mb-2">
                          What is your preferred design style? *
                        </label>
                        <Field
                          as="select"
                          name="designStyle"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a style</option>
                          {["Minimalist", "Vintage", "Modern", "Classic", "Corporate", "Portfolio", "Other"].map(
                            (style) => (
                              <option key={style} value={style.toLowerCase()}>
                                {style}
                              </option>
                            ),
                          )}
                        </Field>
                        {values.designStyle === "other" && (
                          <Field
                            name="customDesignStyle"
                            className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Please specify your design style"
                          />
                        )}
                        <ErrorMessage name="designStyle" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Existing Branding */}
                      <div className="col-span-full">
                        <label className="block text-base font-semibold text-[#332D67] mb-4">
                          Do you have existing branding elements? *
                          <span className="text-sm text-[#9A4770]"> (logo, color palette, etc.)</span>
                        </label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <Field
                              type="radio"
                              name="hasExistingBranding"
                              value="true"
                              className="form-radio text-purple-600 h-5 w-5"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <Field
                              type="radio"
                              name="hasExistingBranding"
                              value="false"
                              className="form-radio text-purple-600 h-5 w-5"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                        {values.hasExistingBranding === "true" && (
                          <div className="mt-4 space-y-4">
                            <div className="mt-2">
                              <Field
                                type="file"
                                name="brandingFilesUpload"
                                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              />
                            </div>

                            {/* Color selection section */}
                            <div className="mt-4">
                              <label className="block text-base font-semibold text-[#332D67] mb-2">
                                Select your brand colors:
                              </label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {colorOptions.map((color) => (
                                  <div
                                    key={color.value}
                                    className="flex items-center p-2 border rounded hover:bg-gray-50"
                                  >
                                    <input
                                      type="checkbox"
                                      id={`color-${color.value}`}
                                      checked={values.brandingColors?.includes(color.value)}
                                      onChange={() => {
                                        const newColors = values.brandingColors?.includes(color.value)
                                          ? values.brandingColors?.filter((c) => c !== color.value)
                                          : [...(values.brandingColors || []), color.value]
                                        setFieldValue("brandingColors", newColors)
                                      }}
                                      className="mr-2 h-4 w-4"
                                    />
                                    <div className="flex items-center">
                                      <div
                                        className="w-6 h-6 rounded-full border border-gray-300 mr-2"
                                        style={{ backgroundColor: color.value }}
                                      ></div>
                                      <span>{color.name}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Custom color picker */}
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-[#332D67] mb-2">
                                  Add a custom color:
                                </label>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="color"
                                    value={customColor}
                                    onChange={(e) => setCustomColor(e.target.value)}
                                    className="h-10 w-10 rounded border"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (!values.brandingColors?.includes(customColor)) {
                                        setFieldValue("brandingColors", [...(values.brandingColors || []), customColor])
                                      }
                                    }}
                                    className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                  >
                                    Add Color
                                  </button>
                                </div>
                              </div>

                              {/* Display selected colors */}
                              {values.brandingColors && values.brandingColors.length > 0 && (
                                <div className="mt-4">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your selected colors:
                                  </label>
                                  <div className="flex flex-wrap gap-2">
                                    {values.brandingColors.map((color, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center bg-gray-100 rounded-full pl-1 pr-2 py-1"
                                      >
                                        <div
                                          className="w-5 h-5 rounded-full mr-1"
                                          style={{ backgroundColor: color }}
                                        ></div>
                                        <span className="text-xs">{color}</span>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            const newColors = values.brandingColors?.filter((_, i) => i !== index)
                                            setFieldValue("brandingColors", newColors)
                                          }}
                                          className="ml-1 text-gray-500 hover:text-red-500"
                                        >
                                          ×
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <ErrorMessage
                                name="brandingColors"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                          </div>
                        )}
                        <ErrorMessage
                          name="hasExistingBranding"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Reference Websites */}
                      <div className="col-span-full">
                        <label className="block text-base font-semibold text-[#332D67] mb-2">
                          List 2-3 reference websites you like *
                        </label>
                        <Field
                          as="textarea"
                          name="referenceWebsites"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          rows={3}
                          placeholder="Enter URLs of websites you like..."
                        />
                        <ErrorMessage name="referenceWebsites" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Website Values */}
                      <div className="col-span-full">
                        <label className="block text-base font-semibold text-[#332D67] mb-2">
                          What values/attributes should your website reflect? *
                        </label>
                        <Field
                          as="textarea"
                          name="websiteValues"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          rows={3}
                          placeholder="e.g., Professional, Modern, Trustworthy..."
                        />
                        <ErrorMessage name="websiteValues" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Development & Features Section */}
                  <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-[#100D22] mb-8 flex items-center gap-3">
                      Development & Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Number of Pages */}
                      <div>
                        <label className="block text-base font-semibold text-[#332D67] mb-2">
                          How many pages are you planning for the website? *
                        </label>
                        <Field
                          type="number"
                          name="numberOfPages"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          min="1"
                          max="99"
                        />
                        <ErrorMessage name="numberOfPages" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Key Features */}
                      <div className="col-span-full">
                        <label className="block text-base font-semibold text-[#332D67] mb-4">
                          Select the key pages you need on your website *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {featureOptions.map((feature) => (
                            <label
                              key={feature}
                              className="inline-flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Field
                                type="checkbox"
                                name="keyFeatures"
                                value={feature}
                                className="form-checkbox h-5 w-5 !text-purple-600"
                              />
                              <span className="ml-2">{feature}</span>
                            </label>
                          ))}
                        </div>
                        {values.keyFeatures?.includes("Other") && (
                          <Field
                            name="customFeature"
                            className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Please specify other features you need"
                          />
                        )}
                        <ErrorMessage name="keyFeatures" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Other features with radio buttons */}
                      {[
                        {
                          name: "requiresIntegrations",
                          label: "Do you require any 3rd party integrations?",
                          details: "integrationDetails",
                        },
                        { name: "isEcommerce", label: "Will your website be E-Commerce?", details: "ecommerceDetails" },
                      ].map((feature) => (
                        <div key={feature.name} className="col-span-full">
                          <label className="block text-base font-semibold text-[#332D67] mb-4">{feature.label} *</label>
                          <div className="flex gap-4 mb-4">
                            <label className="inline-flex items-center">
                              <Field
                                type="radio"
                                name={feature.name}
                                value="true"
                                className="form-radio text-purple-600 h-5 w-5"
                              />
                              <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                              <Field
                                type="radio"
                                name={feature.name}
                                value="false"
                                className="form-radio text-purple-600 h-5 w-5"
                              />
                              <span className="ml-2">No</span>
                            </label>
                          </div>
                          <ErrorMessage name={feature.name} component="div" className="text-red-500 text-sm mt-1" />
                          {feature.details && values[feature.name] === "true" && (
                            <>
                              <Field
                                as="textarea"
                                name={feature.details}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder={`Please provide ${feature.name.replace("requires", "").replace("is", "").toLowerCase()} details`}
                                rows={3}
                              />
                              <ErrorMessage
                                name={feature.details}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="group px-6 py-3 border border-gray-300 rounded-lg text-gray-700 
                        hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 
                        transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => {
                        // Scroll to error if form validation fails
                        setTimeout(scrollToError, 100)
                        console.log("Submit button clicked")
                      }}
                      className="group px-6 py-3 bg-purple-600 text-white rounded-lg 
                        hover:bg-purple-700 focus:outline-none focus:ring-2 
                        focus:ring-purple-500 focus:ring-offset-2 transition-all 
                        duration-200 flex items-center gap-2 disabled:opacity-50"
                    >
                      Next Step
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </motion.div>
      </div>
    </div>
  )
}

export default Brief2

