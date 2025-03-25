"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Step1Form } from "./step1-form"
import { Step2Form } from "./step2-form"
import { Step3Form } from "./step3-form"
import { FormSummary } from "./FormSummary"
import Brief1 from "./brief1"

// Define the form data structure
export type LogoFormData = {
  // Step 1 - Basic Info
  name: string
  email: string
  phone: string

  // Step 2 - Company & Branding + Logo Preferences
  companyName: string
  companyMeaning: string
  slogan: string
  description: string
  competitors: string
  competitorWebsites: string
  objectsToInclude: string
  objectImages: File[]
  logosLike: File[]
  logosLikeReason: string
  logosDislike: File[]
  logosDislikeReason: string
  designStyle: string
  fontStyles: string[]
  iconStyles: string[]

  // Step 3 - Colors & Fonts + Final Preferences
  colors: string[]
  customColors: string[]
  fontPreferences: string[]
  logoFeel: string
  additionalComments: string
}

// Initial form data
const initialFormData: LogoFormData = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  companyMeaning: "",
  slogan: "",
  description: "",
  competitors: "",
  competitorWebsites: "",
  objectsToInclude: "",
  objectImages: [],
  logosLike: [],
  logosLikeReason: "",
  logosDislike: [],
  logosDislikeReason: "",
  designStyle: "",
  fontStyles: [],
  iconStyles: [],
  colors: [],
  customColors: [],
  fontPreferences: [],
  logoFeel: "",
  additionalComments: "",
}

export default function LogoDesignForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<LogoFormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (data: Partial<LogoFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Brief1 />
      case 2:
        return <Step2Form />
      case 3:
        return <Step3Form />
      case 4:
        return <FormSummary />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Logo Design Questionnaire</CardTitle>
          <CardDescription className="text-center">
            {isSubmitted
              ? "Thank you for your submission!"
              : `Step ${currentStep} of 4: ${
                  currentStep === 1
                    ? "Basic Information"
                    : currentStep === 2
                      ? "Company & Branding"
                      : currentStep === 3
                        ? "Design Preferences"
                        : "Review & Submit"
                }`}
          </CardDescription>
          <div className="w-full bg-muted h-2 mt-4 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium mb-2">Submission Successful!</h3>
              <p className="text-muted-foreground">
                We have received your logo design requirements and will be in touch soon.
              </p>
              <Button
                className="mt-6"
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep(1)
                  setFormData(initialFormData)
                }}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            renderStep()
          )}
        </CardContent>

        {!isSubmitted && (
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={handleSubmit}>Submit</Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}