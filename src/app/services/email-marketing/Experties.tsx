"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "📝",
      title: "Keyword-Optimized Blog Writing",
      description: "Creating engaging, SEO-friendly blog content with strategic keyword placement to improve search engine rankings.",
    },
    {
      icon: "📊",
      title: "Data-Driven SEO Blogging",
      description: "Writing content backed by analytics, keyword research, and search intent to drive organic traffic and user engagement.",
    },
    {
      icon: "🔍",
      title: "Content Audits & Optimization",
      description: "Enhancing existing blog content with updated keywords, internal linking, and readability improvements for better rankings.",
    },
    {
      icon: "🖊️",
      title: "Long-Form SEO Articles",
      description: "Developing in-depth, research-backed articles designed to improve dwell time, authority, and search visibility.",
    },
    {
      icon: "📢",
      title: "SEO Copywriting for Blogs",
      description: "Writing compelling blog copy that balances search engine optimization with reader engagement and conversions.",
    },
    {
      icon: "🔗",
      title: "Internal Linking Strategies",
      description: "Structuring content with SEO-friendly internal links to improve site navigation, authority, and indexing.",
    },
    {
      icon: "⚡",
      title: "Content Refresh & Repurposing",
      description: "Updating old blog posts with fresh insights, keywords, and formatting to maintain search rankings and relevance.",
    },
    {
      icon: "📌",
      title: "Topic Clusters & Pillar Content",
      description: "Building interconnected blog topics to enhance authority and improve rankings through structured SEO content.",
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