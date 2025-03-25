"use client"
import Image from "next/image"
import { useEffect } from "react"
import { useFormContext } from "@/context/FormContext"
import ProgressBar from "./ProgressBar"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required").min(2, "Name must be at least 2 characters"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-() ]+$/, "Invalid phone number"),
  company: Yup.string().required("Company name is required"),
})

const Brief1 = () => {
  const { nextStep, formData, setFormData, step } = useFormContext()

  useEffect(() => {
    console.log("Brief1 rendered, current step:", step)
  }, [step])

  const handleSubmit = (values: any) => {
    console.log("Brief1 submitting with values:", values)

    // Save to localStorage individually
    Object.keys(values).forEach((key) => {
      localStorage.setItem(key, values[key]?.toString() || "")
    })

    setFormData(values) // Save form data in context
    console.log("Moving to next step from Brief1")
    nextStep() // Move to next step
  }

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

                  {/* Company Field */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-base font-semibold text-[#332D67]">Company Website (if any)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none"></div>
                      <Field
                        name="companyWebsite"
                        className={`w-full  px-4 py-3 rounded-lg border  focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="https://www.techcraftinc.com"
                      />
                    </div>
                  </div>

                  {/*Briefly describe your company, its mission, and services/products */}
                  <div className="md:col-span-2 text-start space-y-2">
                    <label className="block text-base font-semibold text-[#332D67]">
                      Briefly describe your Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none"></div>
                      <Field
                        as="textarea"
                        name="briefDescription"
                        rows={4}
                        className="w-full p-2 h-[200px] rounded-lg border border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/50 backdrop-blur-sm text-left" // ✅ Ensure text starts from the left
                        placeholder="TechCraft Inc is a leading provider innovative software solutions that help businesses streamline operations and drive growth . Our mission is to empower organizations with cutting-edge technology that simplifies complex processes and boost productivity ."
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
  )
}

export default Brief1

