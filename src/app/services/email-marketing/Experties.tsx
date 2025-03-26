"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "📧",
      title: "Targeted Email Campaigns",
      description: "Crafting personalized email campaigns designed to engage your audience, nurture leads, and drive conversions effectively.",
    },
    {
      icon: "📊",
      title: "Data-Driven Email Strategy",
      description: "Leveraging analytics and A/B testing to optimize subject lines, email copy, and send times for maximum performance.",
    },
    {
      icon: "🔍",
      title: "Email List Management",
      description: "Building and maintaining high-quality subscriber lists through segmentation, automation, and list hygiene best practices.",
    },
    {
      icon: "🖊️",
      title: "Compelling Email Copywriting",
      description: "Writing persuasive and engaging email content that boosts open rates, click-throughs, and conversions.",
    },
    {
      icon: "📢",
      title: "Automated Email Sequences",
      description: "Setting up drip campaigns, welcome series, and transactional emails to ensure consistent engagement and customer retention.",
    },
    {
      icon: "🔗",
      title: "Lead Nurturing & Retention",
      description: "Developing email sequences that guide prospects through the customer journey and encourage long-term brand loyalty.",
    },
    {
      icon: "⚡",
      title: "Email Deliverability Optimization",
      description: "Ensuring your emails land in inboxes, not spam folders, by following best practices for sender reputation and authentication.",
    },
    {
      icon: "📌",
      title: "Ecommerce & Promotional Emails",
      description: "Designing high-converting emails for product launches, discounts, and sales promotions that drive revenue growth.",
    },
  ];

  
  

  const handleNext = () => {
    if (currentIndex + 4 < industries.length) {
      setCurrentIndex(prev => prev + 2)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 2)
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#48128A]  to-[#8B3791] text-white py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
         Strategic Email Marketing for Maximum Engagement
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
     Crafting high-converting email campaigns that nurture leads, boost engagement, and drive sales through targeted messaging and automation.

        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute right-0 -top-16 space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`w-6 h-6 ${currentIndex === 0 ? 'opacity-50' : ''}`} />
            </button>
            <button
              onClick={handleNext}
              className="p-2  bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  hover: bg-gradient-to-b from-[#BCBEC0]/70  via-white to-white  rounded-full transition-colors"
              disabled={currentIndex + 4 >= industries.length}
            >
              <ChevronRight className={`w-6 h-6 ${currentIndex + 4 >= industries.length ? 'opacity-50' : ''}`} />
            </button>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            animate={{ x: `${-currentIndex * 25}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className=" bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  hover: bg-gradient-to-b hover:from-[#BCBEC0]/70  hover:via-white hover:to-white p-6 rounded-lg    transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl text-black font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-700">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}