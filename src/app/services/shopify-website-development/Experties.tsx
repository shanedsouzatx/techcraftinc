"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🛒",
      title: "Custom Shopify & WordPress Website Development",
      description: "Building high-performance Shopify and WordPress websites tailored to your business needs with a focus on functionality and design.",
    },
    {
      icon: "🎨",
      title: "Theme Customization & UI/UX Design",
      description: "Personalizing Shopify and WordPress themes to reflect your brand identity and enhance the customer journey.",
    },
    {
      icon: "🔌",
      title: "App & Plugin Development",
      description: "Extending website functionality with custom Shopify apps and WordPress plugins to optimize your business processes.",
    },
    {
      icon: "🚀",
      title: "Speed & Performance Optimization",
      description: "Improving website loading times, ensuring smooth navigation, and enhancing overall user experience for better engagement.",
    },
    {
      icon: "🔒",
      title: "Security & Maintenance",
      description: "Implementing security best practices, regular updates, and ongoing maintenance to keep your Shopify and WordPress sites safe and up to date.",
    },
    {
      icon: "📈",
      title: "SEO & Conversion Rate Optimization",
      description: "Enhancing your site’s search rankings and optimizing user journeys to increase conversions and sales.",
    },
    {
      icon: "📦",
      title: "eCommerce Store Setup & Management",
      description: "Launching and managing Shopify and WooCommerce stores with seamless integrations, payment gateways, and order processing systems.",
    },
    {
      icon: "🔄",
      title: "Shopify & WordPress Migration",
      description: "Seamlessly migrating your store or website to Shopify or WordPress without data loss or downtime.",
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
       Shopify Development for Scalable & High-Performing Online Stores
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
      We build customized Shopify stores that are fast, secure, and optimized for conversions. Whether you're launching a new e-commerce business or upgrading an existing store, our expert development ensures a seamless user experience, mobile responsiveness, and powerful integrations to help you grow your brand effortlessly. 
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