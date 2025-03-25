'use client'
import { useFormContext } from '@/context/FormContext'
import { motion } from 'framer-motion'

const ProgressBar = () => {
  const { step, serviceType } = useFormContext()

  // Define steps based on service type
  const steps = serviceType === 'logoDesign' 
    ? [
        { number: 1, title: 'Basic Information' },
        { number: 2, title: 'Logo Preferences' },
        { number: 3, title: 'Design Details' }
      ]
    : [
        { number: 1, title: 'Basic Information' },
        { number: 2, title: 'Project Details' },
        { number: 3, title: 'Content Details' },
      ]

  // For step 1, only show the first step title if no service is selected yet
  const displaySteps = serviceType === '' && step === 1
    ? [{ number: 1, title: 'Basic Information' }]
    : steps

  return (
    <div className="w-full py-6 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[30%] left-0 mt-px mx-11 w-[90%] pr-4 h-0.5 bg-gray-200" />
          <motion.div
            className="absolute top-[30%] left-0 -mt-px mx-11 h-0.5 bg-purple-500"
            style={{
              width: `${((step - 1) / (displaySteps.length - 1)) * 100}%`,
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${((step - 1) / (displaySteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* Steps */}
          <div className="relative flex justify-between -mx-9">
            {displaySteps.map((stepItem) => (
              <div key={stepItem.number} className="flex flex-col items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepItem.number
                      ? 'bg-purple-500 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-500'
                  }`}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: step === stepItem.number ? 1.2 : 1,
                    backgroundColor:
                      step >= stepItem.number ? '#8B5CF6' : '#FFFFFF',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stepItem.number}
                </motion.div>
                <div className="mt-2 text-sm font-medium text-gray-700">
                  {stepItem.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
