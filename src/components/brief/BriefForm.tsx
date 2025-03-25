'use client'
import React from 'react'
import Brief1 from './brief1'
import Brief2 from './brief2'
import Brief3 from './brief3'
import { FormProvider, useFormContext } from '@/context/FormContext'

const FormSteps = () => {
  const { step } = useFormContext()
  
  console.log('Current step in FormSteps:', step) // Add this for debugging

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