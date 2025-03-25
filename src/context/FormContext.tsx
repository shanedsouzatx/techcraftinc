"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type FormDataType = {
  name: string
  email: string
  phone: string
  company: string
  companyWebsite?: string
  briefDescription?: string
  companyBrief?: string
  service?: string // Add service type
  [key: string]: any // Add index signature to allow any string key
}

type FormContextType = {
  step: number
  nextStep: () => void
  prevStep: () => void
  formData: FormDataType
  setFormData: (data: Partial<FormDataType>) => void
  serviceType: string
  setServiceType: (type: string) => void
  maxSteps: number // Add maxSteps to handle different form lengths
}

const defaultFormData: FormDataType = {
  name: "",
  email: "",
  phone: "",
  company: "",
  companyWebsite: "",
  briefDescription: "",
  companyBrief: "",
  service: "",
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1)
  const [formData, setFormDataState] = useState<FormDataType>(defaultFormData)
  const [serviceType, setServiceTypeState] = useState("")
  const [maxSteps, setMaxSteps] = useState(3) // Default to 3 steps

  // Load form data from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("briefFormData")
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setFormDataState(parsedData)
        
        // Set service type if it exists in stored data
        if (parsedData.service) {
          setServiceTypeState(parsedData.service)
          
          // Set max steps based on service type
          if (parsedData.service === "logoDesign") {
            setMaxSteps(3) // Logo design has 3 steps (removed review step)
          } else {
            setMaxSteps(3) // Web development has 3 steps
          }
        }
      }
    }
  }, [])

  // Save form data to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("briefFormData", JSON.stringify(formData))
    }
  }, [formData])

  // Update max steps when service type changes
  useEffect(() => {
    if (serviceType === "logoDesign") {
      setMaxSteps(3) // Logo design has 3 steps (removed review step)
    } else {
      setMaxSteps(3) // Web development has 3 steps
    }
  }, [serviceType])

  const nextStep = () => {
    console.log("Current step:", step, "Moving to:", Math.min(step + 1, maxSteps))
    setStep((prev) => {
      const newStep = Math.min(prev + 1, maxSteps)
      console.log("Step updated from", prev, "to", newStep)
      // Scroll to top when moving to next step
      window.scrollTo(0, 0)
      return newStep
    })
  }

  const prevStep = () => {
    console.log("Current step:", step, "Moving to:", Math.max(step - 1, 1))
    setStep((prev) => {
      const newStep = Math.max(prev - 1, 1)
      // Scroll to top when moving to previous step
      window.scrollTo(0, 0)
      return newStep
    })
  }

  // Function to update form data
  const setFormData = (data: Partial<FormDataType>) => {
    console.log("Updating form data with:", data)
    setFormDataState((prev) => {
      const newData = {
        ...prev,
        ...data,
      }
      return newData
    })
  }

  // Function to update service type
  const setServiceType = (type: string) => {
    console.log("Setting service type to:", type)
    setServiceTypeState(type)
    setFormData({ service: type })
  }

  return (
    <FormContext.Provider 
      value={{ 
        step, 
        nextStep, 
        prevStep, 
        formData, 
        setFormData, 
        serviceType, 
        setServiceType,
        maxSteps
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}
