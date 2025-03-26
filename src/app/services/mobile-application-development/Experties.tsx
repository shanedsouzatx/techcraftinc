"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Designing and developing user-friendly mobile applications for iOS and Android, ensuring high performance and scalability.",
    },
    {
      icon: "💻",
      title: "Web Application Development",
      description: "Building robust, responsive, and secure web applications tailored to business needs with modern frameworks and technologies.",
    },
    {
      icon: "⚙️",
      title: "Custom Software Solutions",
      description: "Creating bespoke software solutions that streamline workflows, enhance productivity, and meet specific business objectives.",
    },
    {
      icon: "☁️",
      title: "Cloud-Based Applications",
      description: "Developing cloud-native applications that ensure flexibility, scalability, and seamless data accessibility across devices.",
    },
    {
      icon: "🔗",
      title: "API Development & Integration",
      description: "Building and integrating APIs to enhance application functionality, improve connectivity, and support third-party integrations.",
    },
    {
      icon: "🛡️",
      title: "Enterprise Software Development",
      description: "Delivering large-scale enterprise solutions with advanced security, automation, and AI-driven capabilities.",
    },
    {
      icon: "🚀",
      title: "Progressive Web Apps (PWA)",
      description: "Creating lightweight yet powerful PWAs that deliver an app-like experience across all platforms without the need for downloads.",
    },
    {
      icon: "🔧",
      title: "Application Maintenance & Support",
      description: "Providing continuous monitoring, updates, and troubleshooting to keep applications optimized and secure.",
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
        Innovative Application Development for a Digital Future
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
     Building high-performance, secure, and scalable applications tailored to your business needs. From mobile and web apps to enterprise solutions and API integrations, we create seamless digital experiences that drive growth and efficiency

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