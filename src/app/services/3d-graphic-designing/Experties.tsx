"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎨",
      title: "3D Concept Development",
      description: "Bringing ideas to life with conceptual 3D sketches and designs that form the foundation of stunning visuals.",
    },
    {
      icon: "🖥️",
      title: "3D Modeling & Sculpting",
      description: "Creating highly detailed 3D models for gaming, animation, branding, and product visualization with precision and realism.",
    },
    {
      icon: "🔍",
      title: "Texturing & Material Design",
      description: "Adding lifelike textures, shading, and materials to 3D models to enhance realism and depth in designs.",
    },
    {
      icon: "💡",
      title: "Lighting & Rendering",
      description: "Applying advanced lighting techniques and high-resolution rendering to create photorealistic 3D visuals.",
    },
    {
      icon: "📢",
      title: "3D Motion Graphics & Animation",
      description: "Designing dynamic motion graphics and animations for marketing, branding, and interactive media.",
    },
    {
      icon: "🏗️",
      title: "Architectural & Product Visualization",
      description: "Bringing architecture, interior designs, and product prototypes to life with stunning 3D renders.",
    },
    {
      icon: "⚡",
      title: "Virtual & Augmented Reality Assets",
      description: "Developing optimized 3D assets for immersive VR and AR experiences, enhancing digital interaction.",
    },
    {
      icon: "🎮",
      title: "Game & Cinematic Asset Creation",
      description: "Designing detailed 3D characters, environments, and props for video games, films, and animation projects.",
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
         Transform Your Vision with Stunning 3D Graphic Design
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
       Our 3D graphic design services combine artistic creativity, technical expertise, and innovative visualization to create immersive visuals that captivate, engage, and elevate your brand
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