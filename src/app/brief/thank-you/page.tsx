'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#AE96D0]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#AE96D0]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/images/tech-craft-logo.png"
            alt="Company Logo"
            width={300}
            height={250}
            className="h-15"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <FiCheckCircle className="w-24 h-24 text-green-500" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#332D67] mb-6"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#9A4770] mb-12"
          >
            We&apos;ve received your submission and will get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl mb-8"
          >
            <h2 className="text-2xl font-semibold text-[#332D67] mb-4">What&apos;s Next?</h2>
            <ul className="text-left space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="mr-3">1.</span>
                Our team will review your requirements
              </li>
              <li className="flex items-start">
                <span className="mr-3">2.</span>
                We will prepare a detailed proposal
              </li>
              <li className="flex items-start">
                <span className="mr-3">3.</span>
                Schedule a follow-up meeting to discuss next steps
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#332D67] bg-[#CEC0E2] hover:bg-[#9A4770] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ThankYou
