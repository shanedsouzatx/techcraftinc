"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🌐",
      title: "Custom WordPress Website Development",
      description: "We create fully customized WordPress websites tailored to your business needs, ensuring a unique and professional online presence.",
    },
    {
      icon: "🎨",
      title: "WordPress Theme Customization",
      description: "Enhancing and personalizing WordPress themes to align with your brand identity and deliver a seamless user experience.",
    },
    {
      icon: "🔌",
      title: "Plugin Development & Integration",
      description: "Developing custom plugins and integrating essential tools to extend your website’s functionality and improve performance.",
    },
    {
      icon: "🚀",
      title: "Speed Optimization & Performance",
      description: "Optimizing your WordPress website for lightning-fast speed, improved user experience, and better search engine rankings.",
    },
    {
      icon: "🔒",
      title: "WordPress Security & Maintenance",
      description: "Implementing security best practices, regular updates, and monitoring to keep your website safe and up to date.",
    },
    {
      icon: "🛒",
      title: "WooCommerce Development",
      description: "Building and optimizing WooCommerce stores with secure payment gateways, custom functionalities, and seamless shopping experiences.",
    },
    {
      icon: "📈",
      title: "SEO Optimization for WordPress",
      description: "Implementing on-page SEO strategies, optimizing site structure, and improving rankings for better search visibility.",
    },
    {
      icon: "📤",
      title: "WordPress Migration & Hosting Setup",
      description: "Seamless migration to WordPress from any platform and setting up reliable hosting for optimal performance and security.",
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
          Professional WordPress Website Development
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
     Custom, scalable, and high-performance WordPress solutions designed to enhance your online presence and drive business growth
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