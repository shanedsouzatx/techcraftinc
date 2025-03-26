"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎬",
      title: "Custom Animated Explainers",
      description: "Crafting unique, high-quality explainer videos tailored to your brand, message, and target audience.",
    },
    {
      icon: "📊",
      title: "Data-Driven Storytelling",
      description: "Converting complex data and ideas into engaging, easy-to-understand animated videos.",
    },
    {
      icon: "🎥",
      title: "Whiteboard Animation",
      description: "Simplifying concepts through engaging whiteboard animations that captivate viewers.",
    },
    {
      icon: "📢",
      title: "Brand & Product Videos",
      description: "Bringing your brand and products to life with compelling animated marketing videos.",
    },
    {
      icon: "💡",
      title: "Educational & Training Videos",
      description: "Creating informative videos to educate employees, students, or customers with clear visuals and storytelling.",
    },
    {
      icon: "⚡",
      title: "Motion Graphics & Infographics",
      description: "Enhancing presentations with dynamic motion graphics and visually appealing infographics.",
    },
    {
      icon: "📌",
      title: "Scriptwriting & Storyboarding",
      description: "Developing engaging scripts and storyboards to ensure a seamless production process.",
    },
    {
      icon: "🎭",
      title: "Character Animation",
      description: "Bringing animated characters to life to create emotional connections with your audience.",
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
       Engaging Explainer Videos That Simplify Complex Ideas  </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
   Transform your message into captivating explainer videos that engage, educate, and convert. Our expertly crafted animations break down complex topics into visually appealing, easy-to-understand stories that resonate with your audience.

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