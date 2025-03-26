"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    { icon: "🎬", title: "3D Character Animation", description: "Bringing characters to life with realistic movements, expressions, and detailed animations for films, games, and commercials." },
    { icon: "🏗️", title: "3D Architectural Visualization", description: "Creating immersive, photorealistic 3D renders and walkthroughs to showcase architectural designs before construction." },
    { icon: "🎥", title: "Product Animation & Visualization", description: "Animating products with stunning 3D visuals to highlight features, functionality, and aesthetics for marketing and presentations." },
    { icon: "🚀", title: "Motion Graphics & VFX", description: "Enhancing visuals with high-quality motion graphics, visual effects, and dynamic animations for ads, films, and branding." },
    { icon: "🎮", title: "3D Game Asset Creation", description: "Designing and animating high-quality 3D models, characters, and environments optimized for game development." },
    { icon: "📽️", title: "3D Animated Explainer Videos", description: "Telling compelling stories through animated explainer videos, perfect for branding, education, and marketing." },
    { icon: "⚙️", title: "Industrial & Mechanical Animation", description: "Demonstrating complex industrial and mechanical processes with precision-engineered 3D animations." },
    { icon: "🌎", title: "Virtual Reality (VR) & Augmented Reality (AR) Animation", description: "Developing immersive 3D experiences for VR and AR applications to engage users like never before." },
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
    Immersive 3D Animation Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg !w-full mb-12 "
        >
      Experience the power of high-quality 3D animation. From realistic character animations to stunning product visualizations, our expert team creates engaging and immersive 3D content for films, games, marketing, and more.

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