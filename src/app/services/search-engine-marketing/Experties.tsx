"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "📢",
      title: "PPC Campaign Management",
      description: "Creating and optimizing pay-per-click campaigns on Google Ads and Bing to maximize ROI and drive targeted traffic.",
    },
    {
      icon: "🔍",
      title: "Keyword Research & Bidding Strategy",
      description: "Identifying high-converting keywords and implementing competitive bidding strategies to enhance ad performance.",
    },
    {
      icon: "📊",
      title: "Ad Copywriting & A/B Testing",
      description: "Crafting compelling ad copies and continuously testing variations to improve click-through rates and conversions.",
    },
    {
      icon: "🎯",
      title: "Retargeting & Audience Targeting",
      description: "Reaching potential customers through strategic remarketing and advanced audience segmentation for better engagement.",
    },
    {
      icon: "💰",
      title: "Budget Management & Optimization",
      description: "Allocating and optimizing ad spend efficiently to ensure maximum return on investment without overspending.",
    },
    {
      icon: "📈",
      title: "Landing Page Optimization",
      description: "Designing and optimizing landing pages to enhance user experience and increase conversion rates.",
    },
    {
      icon: "⚡",
      title: "Google Shopping & Display Ads",
      description: "Running highly targeted shopping and display ads to boost eCommerce sales and brand visibility.",
    },
    {
      icon: "📌",
      title: "Performance Tracking & Analytics",
      description: "Monitoring key SEM metrics and analyzing data to make data-driven adjustments for continuous improvement.",
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
        Maximize Visibility & Conversions with Expert Search Engine Marketing (SEM)
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
      Drive targeted traffic, increase brand awareness, and boost conversions with data-driven paid search strategies. From PPC campaign management to audience targeting, we help you achieve measurable success.










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