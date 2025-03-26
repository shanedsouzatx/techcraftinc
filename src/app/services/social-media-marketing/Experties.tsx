"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "📢",
      title: "Strategic Social Media Campaigns",
      description: "Developing data-driven social media strategies to boost brand visibility, engagement, and conversions across platforms.",
    },
    {
      icon: "✍️",
      title: "Engaging Content Creation",
      description: "Crafting eye-catching posts, compelling captions, and viral-worthy content that resonates with your audience.",
    },
    {
      icon: "📊",
      title: "Performance Analytics & Optimization",
      description: "Tracking key metrics, analyzing engagement trends, and refining strategies for maximum reach and ROI.",
    },
    {
      icon: "🎨",
      title: "Branded Visual Content",
      description: "Designing high-quality graphics, videos, and animations to make your social media presence visually stunning.",
    },
    {
      icon: "🤝",
      title: "Influencer & Community Engagement",
      description: "Connecting with influencers and fostering a loyal community to amplify brand awareness and trust.",
    },
    {
      icon: "🎯",
      title: "Targeted Social Media Ads",
      description: "Running highly targeted ad campaigns to reach the right audience and drive real business results.",
    },
    {
      icon: "📆",
      title: "Social Media Management",
      description: "Scheduling, monitoring, and managing posts to keep your brand active and relevant on all social platforms.",
    },
    {
      icon: "🚀",
      title: "Viral Marketing Strategies",
      description: "Leveraging trends, challenges, and innovative campaigns to maximize reach and engagement.",
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
  className="text-4xl md:text-5xl font-bold mb-6 uppercase"
>
  Elevate Your Brand with Powerful Social Media Marketing
</motion.h1>

<motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-lg !w-full mb-12"
>
  We create data-driven social media strategies, engaging content, and targeted ad campaigns to grow your brand’s online presence. From viral marketing to influencer collaborations, we help you connect with your audience and drive real results.
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