"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { useEffect, useState } from "react"
import PhoneInput from "react-phone-input-2"
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the form data type
type FormData = {
  name: string
  email: string
  phone: string
  service: string
}

// Create validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .test("phone", "Valid phone number is required", (value) => {
      if (!value) return false
      return value.length >= 8 // Basic validation for phone numbers
    })
    .required("Phone number is required"),
  service: yup.string().required("Please select a service"),
})

const LeadForm = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Initialize form with react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  })

  // Set service based on pathname
  useEffect(() => {
    const _pathname = pathname.replace(/\//g, "")
    if (_pathname) {
      setValue("service", _pathname)
    }
  }, [pathname, setValue])

  // Watch service value for the select element
  const serviceValue = watch("service")

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      const response = await fetch("/discounted-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      })

      const result = await response.json()

      if (response.ok) {
        console.log("Form submitted successfully")
        reset() // Clear the form

        // Redirect to thank you page
        setTimeout(() => {
          router.push("/thank-you")
        }, 1500)
      } else {
        console.error("Error submitting form:", result.message || response.statusText)
        // You could add toast notifications here
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[400px] bg-[#33174E] text-white rounded-md p-6 shadow-lg"
    >
      {/* Form Top */}
      <div className="flex items-center justify-between mb-6">
        <Image
          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720646140/50percent_vxwwis.png"
          alt="50% discount"
          width={80}
          height={80}
          className="object-contain"
        />
        <div className="flex flex-col items-end">
          <span className="text-xl text-gray-200">Avail Upto</span>
          <h2 className="text-white font-bold text-[1.7rem]">60% Discount</h2>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              className={cn(
                "outline-none bg-transparent border border-white w-full p-3 rounded-md placeholder:text-gray-300 transition-colors",
                errors.name && "border-red-500",
              )}
              placeholder="Enter Name"
            />
          </div>
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              {...register("email")}
              className={cn(
                "outline-none bg-transparent border border-white w-full p-3 rounded-md placeholder:text-gray-300 transition-colors",
                errors.email && "border-red-500",
              )}
              placeholder="Enter Your Email"
            />
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <PhoneInput
            country={"us"}
            value={watch("phone")}
            onChange={(phone) => setValue("phone", phone)}
            inputProps={{
              ...register("phone"),
              className: cn(errors.phone && "border-red-500"),
            }}
            inputStyle={{
              width: "100%",
              backgroundColor: "transparent",
              borderColor: errors.phone ? "#ef4444" : "#ffffff",
              color: "#ffffff",
              paddingLeft: "45px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            buttonStyle={{
              background: "transparent",
              borderColor: errors.phone ? "#ef4444" : "#ffffff",
            }}
            dropdownStyle={{
              backgroundColor: "#1F2937",
              color: "#ffffff",
            }}
            containerClass="w-full"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <select
            {...register("service")}
            className={cn(
              "bg-transparent border border-white w-full p-3 rounded-md text-white outline-none appearance-none",
              errors.service && "border-red-500",
            )}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M7 10l5 5 5-5z"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
            }}
            value={serviceValue}
          >
            <option value="" className="bg-[#33174E]">
              Select a Service
            </option>
            <option value="Content Writing" className="bg-[#33174E]">
              Content Writing
            </option>
            <option value="Web Development" className="bg-[#33174E]">
              Web Development
            </option>
            <option value="Digital Marketing" className="bg-[#33174E]">
              Digital Marketing
            </option>
            <option value="Logo Design" className="bg-[#33174E]">
              Logo Design
            </option>
            <option value="E-Commerce" className="bg-[#33174E]">
              E-Commerce Web Solution
            </option>
            <option value="Motion Graphics" className="bg-[#33174E]">
              Motion Graphics
            </option>
            <option value="Illustration Design" className="bg-[#33174E]">
              Illustration Design
            </option>
            <option value="Marketing Collateral" className="bg-[#33174E]">
              Marketing Collateral
            </option>
            <option value="App Design" className="bg-[#33174E]">
              App Design
            </option>
            <option value="SEO Services" className="bg-[#33174E]">
              SEO Services
            </option>
          </select>
          {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 text-sm font-medium cursor-pointer py-4 w-full bg-[#5114AE] hover:bg-[#4010A0] text-white rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          `Let's Get Started`
        )}
      </button>

      <p className="text-xs text-center mt-4 text-gray-300">
        By submitting this form, you agree to our terms and privacy policy.
      </p>
    </form>
  )
}

export default LeadForm

