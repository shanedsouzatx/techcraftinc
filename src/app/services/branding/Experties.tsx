"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎨",
      title: "Brand-Driven Content Strategy",
      description: "Crafting compelling narratives that align with your brand identity, values, and audience expectations.",
    },
    {
      icon: "📊",
      title: "Data-Backed Brand Messaging",
      description: "Using market research and analytics to create content that strengthens brand positioning and engagement.",
    },
    {
      icon: "🏗️",
      title: "Brand Storytelling & Identity",
      description: "Developing a unique and memorable brand voice that resonates across all content and marketing channels.",
    },
    {
      icon: "🖋️",
      title: "Authority-Building Thought Leadership",
      description: "Creating insightful, value-driven content that establishes your brand as an industry leader.",
    },
    {
      icon: "📢",
      title: "Brand-Focused Copywriting",
      description: "Writing persuasive, on-brand messaging that connects with your audience and drives conversions.",
    },
    {
      icon: "🔗",
      title: "Brand Cohesion Across Platforms",
      description: "Ensuring consistent messaging and visual identity across blogs, websites, and social media.",
    },
    {
      icon: "⚡",
      title: "Brand Refresh & Repositioning",
      description: "Revitalizing your brand’s content strategy to stay relevant, engaging, and competitive in the market.",
    },
    {
      icon: "📌",
      title: "Branded Content Frameworks",
      description: "Structuring content around core brand themes to enhance recognition and customer loyalty.",
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
      Build a Powerful Brand with Impactful Storytelling
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
   Your brand is more than just a logo—it’s a story that connects, inspires, and influences. Through strategic storytelling and compelling content, we help you craft a unique brand voice that resonates with your audience, builds trust, and leaves a lasting impression


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