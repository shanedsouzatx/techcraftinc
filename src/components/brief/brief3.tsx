"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFormContext } from "@/context/FormContext"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FormValues {
  contentProvider: string
  seoKeywords: string
  needsAnalytics: string
  analyticsDetails: string
  imageSource: string
  additionalNotes: string
  [key: string]: string | undefined // Add this index signature
}

const validationSchema = Yup.object({
  contentProvider: Yup.string().required("Please select content provision option"),
  needsAnalytics: Yup.string().required("Do you need SEO tools?."),
  analyticsDetails: Yup.string().when("needsAnalytics", {
   
    is: "true",
    then: (schema) => schema.required("Please provide primary keywords for SEO"),
    otherwise: (schema) => schema,
  }),
  imageSource: Yup.string().required("Please select image source option"),
  additionalNotes: Yup.string(),
})

const Brief3 = () => {
  const { prevStep, step } = useFormContext()
  const router = useRouter()

  const [savedData, setSavedData] = useState({
    contentProvider: "",
    seoKeywords: "",
    needsAnalytics: "",
    needsDomain: "",
    analyticsDetails: "",
    imageSource: "",
    additionalNotes: "",
  })

  useEffect(() => {
    console.log("Brief3 rendered, current step:", step)

    if (typeof window !== "undefined") {
      try {
        setSavedData({
          contentProvider: localStorage.getItem("contentProvider") || "",
          seoKeywords: localStorage.getItem("seoKeywords") || "",
          needsAnalytics: localStorage.getItem("needsAnalytics") || "",
          analyticsDetails: localStorage.getItem("analyticsDetails") || "",
          needsDomain: localStorage.getItem("needsDomain") || "",
          imageSource: localStorage.getItem("imageSource") || "",
          additionalNotes: localStorage.getItem("additionalNotes") || "",
        })
        console.log("Loaded data from localStorage in Brief3")
      } catch (error) {
        console.error("Error loading data from localStorage in Brief3:", error)
      }
    }

    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [step])

  const initialValues: FormValues = {
    ...savedData,
  }

  // Update the handleSubmit function to handle form submission and redirect to thank-you page
  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    console.log("Brief3 submitting with values:", values)

    // Save form data to localStorage first
    try {
      Object.keys(values).forEach((key) => {
        localStorage.setItem(key, values[key]?.toString() || "")
      })
      console.log("Saved Brief3 data to localStorage")
    } catch (error) {
      console.error("Error saving Brief3 data to localStorage:", error)
    }

    try {
      // Collect all form data from localStorage
      const allFormData = {
        // Personal details from step 1
        personalDetails: {
          name: localStorage.getItem("name") || "",
          email: localStorage.getItem("email") || "",
          phone: localStorage.getItem("phone") || "",
          company: localStorage.getItem("company") || "",
          companyWebsite: localStorage.getItem("companyWebsite") || "",
          briefDescription: localStorage.getItem("briefDescription") || "",
        },
        // Design and features from step 2
        designAndFeatures: {
          designStyle: localStorage.getItem("designStyle") || "",
          hasExistingBranding: localStorage.getItem("hasExistingBranding") || "",
          brandingFiles: localStorage.getItem("brandingFiles") || "",
          brandingColors: JSON.parse(localStorage.getItem("brandingColors") || "[]"),
          referenceWebsites: localStorage.getItem("referenceWebsites") || "",
          websiteValues: localStorage.getItem("websiteValues") || "",
          numberOfPages: localStorage.getItem("numberOfPages") || "",
          keyFeatures: JSON.parse(localStorage.getItem("keyFeatures") || "[]"),
          requiresIntegrations: localStorage.getItem("requiresIntegrations") || "",
          integrationDetails: localStorage.getItem("integrationDetails") || "",
          isEcommerce: localStorage.getItem("isEcommerce") || "",
          ecommerceDetails: localStorage.getItem("ecommerceDetails") || "",
          needsSSL: localStorage.getItem("needsSSL") || "",
          customDesignStyle: localStorage.getItem("customDesignStyle") || "",
          customFeature: localStorage.getItem("customFeature") || "",
        },
        // Content and SEO from step 3
        contentAndSEO: values,
      }

      console.log("Sending form data to server:", allFormData)

      // Send data to PHP endpoint
      const response = await fetch("/brief-form.php", {
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
        // Redirect to thank you page
        router.push("/brief/thank-you")
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
          <h1 className="text-5xl font-bold text-center text-[#332D67] mb-4 tracking-tight">Content & Final Details</h1>
          <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">(SEO, Creatives, Extra Notes)</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ values, errors, touched, isSubmitting }) => {
              console.log("Brief3 form values:", values)
              console.log("Brief3 form errors:", errors)
              return (
                <Form className="space-y-8 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                  {/* Content Provider */}
                  <div className="space-y-4">
                    <label className="block text-base font-semibold text-[#332D67]">
                      Will you provide content, or do you need content creation? *
                    </label>
                    <Field
                      as="select"
                      name="contentProvider"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="willProvide">I will provide</option>
                      <option value="needCreation">Need content creation</option>
                      <option value="both">Both</option>
                    </Field>
                    <ErrorMessage name="contentProvider" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Analytics Integration */}
                  <div className="space-y-4">
                    <label className="block text-base font-semibold text-[#332D67]">
                      Would you like SEO tools integrated? If so, please provide your primary keywords for SEO *
                    </label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="needsAnalytics"
                          value="true"
                          className="form-radio text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="needsAnalytics"
                          value="false"
                          className="form-radio text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>

                    {values.needsAnalytics === "true" && (
                      <Field
                        as="textarea"
                        name="analyticsDetails"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your primary SEO keywords"
                      />
                    )}

                    <ErrorMessage name="needsAnalytics" component="div" className="text-red-500 text-sm" />
                    {values.needsAnalytics === "true" && (
                      <ErrorMessage name="analyticsDetails" component="div" className="text-red-500 text-sm" />
                    )}
                  </div>
 {/* domain Integration */}
 <div className="space-y-4">
                    <label className="block text-base font-semibold text-[#332D67]">
                    Do you want us to Host and Maintain your website? *
                    </label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="needsDomain"
                          value="true"
                          className="form-radio text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="needsDomain"
                          value="false"
                          className="form-radio text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>

                    {/* {values.needsAnalytics === "true" && (
                      <Field
                        as="textarea"
                        name="analyticsDetails"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your primary SEO keywords"
                      />
                    )} */}

                    <ErrorMessage name="needsDomain" component="div" className="text-red-500 text-sm" />
                    {values.needsAnalytics === "true" && (
                      <ErrorMessage name="needsDomain" component="div" className="text-red-500 text-sm" />
                    )}
                  </div>

                  {/* Image Source */}
                  <div className="space-y-4">
                    <label className="block text-base font-semibold text-[#332D67]">
                      Do you have preferred images or should we source them? *
                    </label>
                    <Field
                      as="select"
                      name="imageSource"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="willProvide">I will provide</option>
                      <option value="sourceNeeded">You should source</option>
                      <option value="both">Both</option>
                    </Field>
                    <ErrorMessage name="imageSource" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-4">
                    <label className="block text-base font-semibold text-[#332D67]">
                      Any additional notes or requests?
                    </label>
                    <Field
                      as="textarea"
                      name="additionalNotes"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Add any additional information or special requests..."
                    />
                    <ErrorMessage name="additionalNotes" component="div" className="text-red-500 text-sm" />
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
                      className="group px-6 py-3 bg-[#211C43] text-white rounded-lg 
                        hover:bg-[#211C43] focus:outline-none focus:ring-2 
                        focus:ring-[#211C43] focus:ring-offset-2 transition-all 
                        duration-200 flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
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

export default Brief3

