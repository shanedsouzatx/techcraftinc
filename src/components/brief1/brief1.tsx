"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useFormContext } from "@/context/FormContext"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion, AnimatePresence } from "framer-motion"

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required").min(2, "Name must be at least 2 characters"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-() ]+$/, "Invalid phone number"),
  company: Yup.string().required("Company name is required"),
})

// Service Selection Modal Component
const ServiceSelectionModal = ({ onSelect }: { onSelect: (service: string) => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
      >
        <h2 className="text-3xl font-bold text-[#332D67] mb-6 text-center">Select a Service</h2>
        <p className="text-[#9A4770] mb-8 text-center text-md">Please select the service you are interested in to continue</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onSelect("logoDesign")}
            className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span className="font-medium text-[#332D67]">Logo Design</span>
          </button>

          <button
            onClick={() => onSelect("webDevelopment")}
            className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span className="font-medium text-[#332D67]">Web Development</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const Brief1 = () => {
  const { nextStep, formData, setFormData, step, setServiceType } = useFormContext()
  const [showServiceModal, setShowServiceModal] = useState(true)
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    console.log("Brief1 rendered, current step:", step)

    // Check if service is already selected in localStorage
    const savedService = localStorage.getItem("service")
    if (savedService) {
      setSelectedService(savedService)
      setServiceType(savedService)
      // Removed the line that hides the modal
    }
  }, [step, setServiceType])

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
    setServiceType(service)
    localStorage.setItem("service", service)
    setShowServiceModal(false)
  }

  const handleSubmit = (values: any) => {
    console.log("Brief1 submitting with values:", values)

    // Add the selected service to the form values
    const updatedValues = {
      ...values,
      service: selectedService,
    }

    // Save to localStorage individually
    Object.keys(updatedValues).forEach((key) => {
      localStorage.setItem(key, updatedValues[key]?.toString() || "")
    })

    setFormData(updatedValues) // Save form data in context
    console.log("Moving to next step from Brief1")
    nextStep() // Move to next step
  }

  return (
    <>
      {/* Service Selection Modal - Now outside the blurred container */}
      <AnimatePresence>{showServiceModal && <ServiceSelectionModal onSelect={handleServiceSelect} />}</AnimatePresence>

      <div
        className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${showServiceModal ? "blur-sm" : ""}`}
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
            <h1 className="text-5xl font-bold text-center text-[#332D67] mb-4 tracking-tight">Welcome Back!</h1>
            <p className="text-xl text-[#9A4770] text-center mb-12 max-w-2xl mx-auto">
              We are excited to start working with you. Please provide your details to get started.
            </p>

            <Formik
              initialValues={{
                name: formData.name || "",
                email: formData.email || "",
                phone: formData.phone || "",
                company: formData.company || "",
                companyWebsite: formData.companyWebsite || "",
                briefDescription: formData.briefDescription || "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ errors, touched }) => (
                <Form className="space-y-8 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Full Name *</label>
                      <Field
                        name="name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name && touched.name ? "border-red-500 bg-red-50" : "border-purple-500"
                        } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="John Doe"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1 ml-1" />
                    </div>

                    {/* Company Field */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Company Name *</label>
                      <Field
                        name="company"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.company && touched.company ? "border-red-500 bg-red-50" : "border-purple-500"
                        } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="techcraftinc"
                      />
                      <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1 ml-1" />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Email Address*</label>
                      <Field
                        type="email"
                        name="email"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email && touched.email ? "border-red-500 bg-red-50" : "border-purple-500"
                        } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="johndoe@gmail.com"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 ml-1" />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Phone Number *</label>
                      <Field
                        type="tel"
                        name="phone"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone && touched.phone ? "border-red-500 bg-red-50" : "border-purple-500"
                        } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="+1 (555) 000-0000"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1 ml-1" />
                    </div>

                    {/* Company Website Field */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Company Website (if any)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
                        <Field
                          name="companyWebsite"
                          className={`w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                          placeholder="https://www.techcraftinc.com"
                        />
                      </div>
                    </div>

                    {/* Selected Service Display (read-only) */}
                    <div className="space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">Selected Service</label>
                      <div className="w-full px-4 py-3 rounded-lg border border-purple-500 bg-purple-50 text-[#332D67]">
                        {selectedService === "logoDesign" ? "Logo Design" : "Web Development"}
                      </div>
                    </div>

                    {/*Briefly describe your company, its mission, and services/products */}
                    <div className="md:col-span-2 text-start space-y-2">
                      <label className="block text-base font-semibold text-[#332D67]">
                        Briefly describe your Company
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
                        <Field
                          as="textarea"
                          name="briefDescription"
                          rows={4}
                          className="w-full p-2 h-[200px] rounded-lg border border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm text-left"
                          placeholder="TechCraft Inc is a leading provider innovative software solutions that help businesses streamline operations and drive growth. Our mission is to empower organizations with cutting-edge technology that simplifies complex processes and boost productivity."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <motion.div
                    className="flex justify-end pt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button
                      type="submit"
                      className="group px-6 py-3 bg-purple-600 text-white rounded-lg 
                        hover:bg-purple-700 focus:outline-none focus:ring-2 
                        focus:ring-purple-500 focus:ring-offset-2 transition-all 
                        duration-200 flex items-center gap-2"
                    >
                      Next Step
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Brief1

