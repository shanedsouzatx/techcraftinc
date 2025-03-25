"use client"

import { useFormContext } from "@/context/FormContext"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function FormSummary() {
  const { formData, prevStep } = useFormContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Collect all form data
      const allFormData = {
        // Personal details from step 1
        name: formData.name || "",
        email: formData.email || "",
        phone: formData.phone || "",
        company: formData.company || "",
        companyWebsite: formData.companyWebsite || "",
        briefDescription: formData.briefDescription || "",
        service: formData.service || "",

        // Logo design data
        logoData: formData.logoData || {},
      }

      console.log("Sending form data to server:", allFormData)

      // Create a FormData object to send to the server
      const submitData = new FormData()

      // Add the form data as JSON
      submitData.append("formData", JSON.stringify(allFormData))

      // Add any files if they exist
      if (formData.logoData?.objectImages && formData.logoData.objectImages.length) {
        for (let i = 0; i < formData.logoData.objectImages.length; i++) {
          submitData.append("objectImages[]", formData.logoData.objectImages[i])
        }
      }

      if (formData.logoData?.logosLike && formData.logoData.logosLike.length) {
        for (let i = 0; i < formData.logoData.logosLike.length; i++) {
          submitData.append("logosLike[]", formData.logoData.logosLike[i])
        }
      }

      if (formData.logoData?.logosDislike && formData.logoData.logosDislike.length) {
        for (let i = 0; i < formData.logoData.logosDislike.length; i++) {
          submitData.append("logosDislike[]", formData.logoData.logosDislike[i])
        }
      }

      // Send the data to the server
      const response = await fetch("/logo-design-brief.php", {
        method: "POST",
        body: submitData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const result = await response.json()

      if (result.error) {
        throw new Error(result.error)
      }

      // Clear localStorage after successful submission
      localStorage.clear()

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      console.error("Error submitting form:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom right, #FAFAFA, #F5F5F5)" }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#AE96D0] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#AE96D0] to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-[#332D67] mb-4">Thank You!</h1>
              <p className="text-xl text-[#9A4770] mb-6">Your logo design brief has been submitted successfully.</p>
              <p className="text-gray-600 mb-8">
                We have received your requirements and will be in touch soon to discuss your project in more detail.
              </p>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg 
                  hover:bg-purple-700 focus:outline-none focus:ring-2 
                  focus:ring-purple-500 focus:ring-offset-2 transition-all 
                  duration-200"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FAFAFA, #F5F5F5)" }}
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#AE96D0] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#AE96D0] to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-bold text-center text-[#332D67] mb-4 tracking-tight">Review Your Information</h1>
          <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">
            Please review your information before submitting
          </p>

          <div className="space-y-8 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#332D67]">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-[#332D67]">Name</p>
                  <p className="text-sm">{formData.name || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#332D67]">Email</p>
                  <p className="text-sm">{formData.email || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#332D67]">Phone</p>
                  <p className="text-sm">{formData.phone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#332D67]">Company</p>
                  <p className="text-sm">{formData.company || "Not provided"}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-[#332D67]">Company Website</p>
                  <p className="text-sm">{formData.companyWebsite || "Not provided"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#332D67]">Logo Design Requirements</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-[#332D67]">Company Description</p>
                  <p className="text-sm">{formData.briefDescription || "Not provided"}</p>
                </div>

                {formData.logoData && (
                  <>
                    <div>
                      <p className="text-sm font-medium text-[#332D67]">Design Style</p>
                      <p className="text-sm capitalize">{formData.logoData.designStyle || "Not selected"}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#332D67]">Font Styles</p>
                      <p className="text-sm">
                        {formData.logoData.fontStyles && formData.logoData.fontStyles.length > 0
                          ? formData.logoData.fontStyles
                              .map((style: string) =>
                                style === "justFont"
                                  ? "Just Font"
                                  : style === "fontInShape"
                                    ? "Font in Shape"
                                    : style.charAt(0).toUpperCase() + style.slice(1),
                              )
                              .join(", ")
                          : "Not selected"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#332D67]">Colors</p>
                      <p className="text-sm">
                        {formData.logoData.colors && formData.logoData.colors.length > 0
                          ? formData.logoData.colors
                              .map((color: string) => color.charAt(0).toUpperCase() + color.slice(1))
                              .join(", ")
                          : "Not selected"}
                      </p>
                    </div>
                  </>
                )}

                <div>
                  <p className="text-sm font-medium text-[#332D67]">Uploaded Files</p>
                  <p className="text-sm">
                    {(formData.logoData?.objectImages && formData.logoData.objectImages.length > 0) ||
                    (formData.logoData?.logosLike && formData.logoData.logosLike.length > 0) ||
                    (formData.logoData?.logosDislike && formData.logoData.logosDislike.length > 0)
                      ? "Files uploaded successfully"
                      : "No files uploaded"}
                  </p>
                </div>
              </div>
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

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
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group px-6 py-3 bg-purple-600 text-white rounded-lg 
                  hover:bg-purple-700 focus:outline-none focus:ring-2 
                  focus:ring-purple-500 focus:ring-offset-2 transition-all 
                  duration-200 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isSubmitting ? "Submitting..." : "Submit Brief"}
                {!isSubmitting && (
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

