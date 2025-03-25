"use client"
import Brief1 from "./brief1"
import Brief2 from "./brief2"
import Brief3 from "./brief3"
import { Step2Form } from "./step2-form"
import { Step3Form } from "./step3-form"
import { FormSummary } from "./FormSummary"
import { FormProvider, useFormContext } from "@/context/FormContext"

const FormSteps = () => {
  const { step, serviceType } = useFormContext()

  console.log("Current step in FormSteps:", step, "Service Type:", serviceType)

  // If service type is logo design, use the logo design steps
  if (serviceType === "logoDesign") {
    switch (step) {
      case 1:
        return <Brief1 />
      case 2:
        return <Step2Form />
      case 3:
        return <Step3Form />
      case 4:
        return <FormSummary />
      default:
        return <Brief1 />
    }
  }

  // Default to web development flow
  switch (step) {
    case 1:
      return <Brief1 />
    case 2:
      return <Brief2 />
    case 3:
      return <Brief3 />
    default:
      return <Brief1 />
  }
}

const BriefForm = () => {
  return (
    <FormProvider>
      <FormSteps />
    </FormProvider>
  )
}

export default BriefForm

