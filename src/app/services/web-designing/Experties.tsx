"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎨",
      title: "Custom Website Design",
      description: "Crafting visually stunning and user-friendly websites that reflect your brand identity and engage your audience.",
    },
    {
      icon: "⚡",
      title: "Responsive Web Development",
      description: "Building fully responsive websites that provide a seamless experience across all devices and screen sizes.",
    },
    {
      icon: "🚀",
      title: "Performance-Optimized Websites",
      description: "Ensuring lightning-fast loading times and smooth functionality to enhance user experience and SEO rankings.",
    },
    {
      icon: "📱",
      title: "Mobile-First Web Design",
      description: "Designing mobile-friendly websites that prioritize usability, speed, and engagement on smaller screens.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Web Design",
      description: "Developing high-converting online stores with seamless navigation, secure payments, and an optimized shopping experience.",
    },
    {
      icon: "🔍",
      title: "SEO-Friendly Web Design",
      description: "Structuring websites with best SEO practices to improve visibility, search rankings, and organic traffic.",
    },
    {
      icon: "🖌️",
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive user interfaces and interactive prototypes for an engaging and smooth user journey.",
    },
    {
      icon: "🔗",
      title: "Website Maintenance & Support",
      description: "Providing ongoing updates, security patches, and performance improvements to keep your website running flawlessly.",
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
         Boost Your Rankings with SEO-Optimized Blog Writing
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
       Our SEO blog writing services combine data-driven research engaging storytelling, and technical optimization to create content that attracts, informs, and converts


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