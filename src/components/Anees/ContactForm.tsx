"use client"

import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import ReCAPTCHA from "react-google-recaptcha"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .test("phone", "Invalid phone number", (value) => {
      if (!value) return false
      const numberOnly = value.replace(/[^\d]/g, "")
      return numberOnly.length >= 10
    })
    .required("Phone number is required"),
  service: yup.string().required("Please select a service"),
  message: yup.string().required("Message is required"),
  captcha: yup.string().required("Please complete the CAPTCHA"),
})

const ContactForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const onSubmit = async (data: any) => {
    setLoading(true)
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      })

      if (response.ok) {
        // Form submitted successfully
        setResult("Thank you for your message. We will be in touch soon.")
        // Reset the form
        reset()

        // Redirect to thank-you page after a short delay
        setTimeout(() => {
          router.push("/thank-you")
        }, 1500) // 1.5 second delay to show the success message
      } else {
        // Error submitting form
        const errorData = await response.json()
        setResult(errorData.message || "An error occurred. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setResult("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" py-20 ">

    <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#48128A]  to-[#8B3791] py-9 px-8 footer-form-shadow rounded-2xl">
      <div className="flex flex-col ">
        <h3 className="text-3xl text-center md:text-left font-semibold uppercase bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 text-transparent bg-clip-text ">
          Ready to Experience Business Growth Beyond Limits?
        </h3>
        <p className="text-gray-100 text-center md:text-left text-sm mt-5 max-w-2xl">
          Contact us now for top-notch web design and digital marketing solutions.
        </p>
      </div>
      <form className="w-full flex flex-col gap-4 my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:flex md:gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4 mt-4"
            />
            {errors.email && <p className="text-red-500 rounded-full  text-sm mt-1">{errors.email.message}</p>}
            <PhoneInput
              country={"us"}
              onChange={(phone) => setValue("phone", phone)}
              inputStyle={{
                width: "100%",
                borderRadius: "9999px",
                backgroundColor: "#F9FAFB",
                borderColor: "#D1D5DB",
                paddingLeft: "56px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
              containerClass="mt-4 rounded-full "
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            <select
              {...register("service")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4 mt-4"
            >
              <option value="" hidden>
                I Am Interested In
              </option>
              <label htmlFor="service">

              <option value="Logo Design">Logo Design</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Video Animation">Video Animation</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Branding">Branding</option>
              </label>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>
          <div className="w-full mt-5 md:w-1/2 md:mt-0">
            <textarea
              rows={8}
              placeholder="Leave Your Message"
              {...register("message")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-4 resize-none hover:border-[#5114AE] focus:border-[#5114AE] transition-colors"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            <div className="flex flex-col items-center mt-6">
              <div className="transform scale-90 md:scale-100 shadow-md rounded-lg overflow-hidden">
                <ReCAPTCHA
                  sitekey="6Ldilt4qAAAAALPYM37jOcJ-BRc6jEZn08IPlfnR"
                  onChange={(token: string | null) => token && setValue("captcha", token)}
                />
              </div>
              {errors.captcha && <p className="text-red-500 text-sm text-center mt-2">{errors.captcha.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-lg font-semibold cursor-pointer py-4 mt-6 border-2 border-white hover:border-0 rounded-full px-8 py-3 hover:text-black text-white hover:bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 transition-all duration-300 ease-in-out  transition-colors duration-300 rounded-full transform transition-all duration-300 hover:shadow-[0_8px_30px_rgb(81,20,174,0.3)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Now"}
            </button>
            {result && (
              <div
                className={`mt-4 p-4 rounded-lg ${result.includes("error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
              >
                {result}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactForm ;

