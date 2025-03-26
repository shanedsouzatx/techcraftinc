"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
const industries = [
  {
    icon: "🎬",
    title: "Realistic CGI Environments",
    description: "Create stunning, lifelike 3D worlds with detailed textures, lighting, and depth for immersive storytelling.",
  },
  {
    icon: "🤖",
    title: "Character Animation",
    description: "Develop expressive, high-quality CGI characters with smooth motion and emotional depth for films, games, and ads.",
  },
  {
    icon: "🌌",
    title: "VFX & Motion Graphics",
    description: "Enhance your videos with mind-blowing CGI effects, from explosions to futuristic sci-fi elements.",
  },
  {
    icon: "🎭",
    title: "Facial & Motion Capture",
    description: "Bring digital characters to life using advanced motion capture technology for realistic expressions and movements.",
  },
  {
    icon: "🚗",
    title: "Product Visualization",
    description: "Showcase your products in photorealistic CGI renders with interactive 360° views and dynamic animations.",
  },
  {
    icon: "⚡",
    title: "Cinematic CGI Trailers",
    description: "Deliver high-impact promotional trailers with Hollywood-level CGI and storytelling to engage your audience.",
  },
  {
    icon: "📺",
    title: "Animated CGI Advertisements",
    description: "Craft visually compelling ads with engaging CGI elements to make your brand stand out.",
  },
  {
    icon: "🔬",
    title: "Medical & Scientific CGI",
    description: "Visualize complex medical and scientific concepts with accurate, high-resolution CGI animation.",
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
       High-Impact CGI Animation for Stunning Visual Storytelling
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
     Bring your ideas to life with breathtaking CGI animation, crafted with realistic visuals, fluid motion, and cinematic detail to captivate your audience.
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