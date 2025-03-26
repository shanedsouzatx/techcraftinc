"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎬",
      title: "Professional Video Editing",
      description: "Crafting seamless, high-quality video edits that enhance storytelling, engagement, and visual appeal.",
    },
    {
      icon: "📊",
      title: "Data-Driven Video Optimization",
      description: "Editing videos based on audience analytics and trends to maximize reach, watch time, and engagement.",
    },
    {
      icon: "🎨",
      title: "Visual Effects & Enhancements",
      description: "Adding smooth transitions, animations, and effects to create eye-catching, professional-grade videos.",
    },
    {
      icon: "🎙️",
      title: "Audio Enhancement & Sound Design",
      description: "Optimizing audio quality, removing noise, and adding background music or voiceovers for a polished final product.",
    },
    {
      icon: "📢",
      title: "Social Media Video Editing",
      description: "Editing short-form and long-form videos tailored for platforms like YouTube, Instagram, and TikTok.",
    },
    {
      icon: "🔗",
      title: "Multi-Platform Formatting",
      description: "Resizing, cropping, and optimizing videos for different social media platforms while maintaining quality.",
    },
    {
      icon: "⚡",
      title: "Content Repurposing",
      description: "Transforming long videos into bite-sized clips, reels, and highlights for wider audience engagement.",
    },
    {
      icon: "📌",
      title: "Color Grading & Cinematic Looks",
      description: "Enhancing visuals with professional color grading, ensuring a cohesive and stunning aesthetic.",
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
       Professional Video Editing for Engaging & Impactful Content
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
      Transform your raw footage into stunning, high-quality videos with expert editing. From seamless transitions and dynamic effects to audio enhancements and color grading, we craft engaging content tailored for social media, marketing, and storytelling. Whether you are optimizing for YouTube, Instagram, or other platforms, our data-driven approach ensures maximum reach, retention, and audience engagement
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