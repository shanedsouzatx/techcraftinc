"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🔍",
      title: "Keyword Research & Strategy",
      description: "Identifying high-value keywords and search trends to develop an effective SEO strategy tailored to your business.",
    },
    {
      icon: "⚙️",
      title: "On-Page Optimization",
      description: "Enhancing meta tags, headers, and content structure to improve search engine rankings and user experience.",
    },
    {
      icon: "📈",
      title: "Technical SEO",
      description: "Optimizing site speed, mobile-friendliness, and indexing to ensure search engines can easily crawl and rank your website.",
    },
    {
      icon: "🔗",
      title: "Link Building & Authority",
      description: "Developing a strong backlink profile through ethical link-building strategies to boost domain authority.",
    },
    {
      icon: "✍️",
      title: "SEO Content Marketing",
      description: "Creating high-quality, search-optimized content to attract organic traffic and establish brand credibility.",
    },
    {
      icon: "📊",
      title: "SEO Performance Tracking",
      description: "Using analytics tools to monitor keyword rankings, traffic growth, and user engagement for ongoing improvements.",
    },
    {
      icon: "📢",
      title: "Local SEO & Google My Business",
      description: "Optimizing local listings and citations to improve visibility in location-based searches and Google Maps.",
    },
    {
      icon: "⚡",
      title: "E-Commerce SEO",
      description: "Optimizing product pages, category structures, and site navigation to increase online store visibility and conversions.",
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
  Maximize Visibility with Expert SEO Strategies
</motion.h1>

<motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-lg !w-full mb-12"
>
  Our comprehensive SEO services help businesses dominate search rankings by optimizing content, enhancing technical performance, and driving organic traffic for long-term success.
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