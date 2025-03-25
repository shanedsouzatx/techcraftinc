// 'use client'
// import React, { createContext, useContext, useState, ReactNode } from 'react'

// // Define the context type
// interface FormContextType {
//   step: number
//   formData: any
//   serviceType: string
//   nextStep: () => void
//   prevStep: () => void
//   setFormData: (data: any) => void
//   setServiceType: (type: string) => void
// }

// // Create the context with default values
// const FormContext = createContext<FormContextType>({
//   step: 1,
//   formData: {},
//   serviceType: '',
//   nextStep: () => {},
//   prevStep: () => {},
//   setFormData: () => {},
//   setServiceType: () => {},
// })

// // Custom hook to use the form context
// export const useFormContext = () => useContext(FormContext)

// // Provider component
// interface FormProviderProps {
//   children: ReactNode
// }

// export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState({})
//   const [serviceType, setServiceType] = useState('')

//   const nextStep = () => {
//     setStep((prevStep) => prevStep + 1)
//   }

//   const prevStep = () => {
//     setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1))
//   }

//   const updateFormData = (data: any) => {
//     setFormData((prevData) => ({ ...prevData, ...data }))
//   }

//   const updateServiceType = (type: string) => {
//     setServiceType(type)
//   }

//   return (
//     <FormContext.Provider
//       value={{
//         step,
//         formData,
//         serviceType,
//         nextStep,
//         prevStep,
//         setFormData: updateFormData,
//         setServiceType: updateServiceType,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   )
// }
