"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🎨",
      title: "Event Branding & Visual Identity",
      description: "Crafting unique and cohesive branding for events, including logos, color schemes, and promotional materials that make a lasting impact.",
    },
    {
      icon: "📱",
      title: "Social Media Graphics",
      description: "Designing eye-catching social media visuals, including posts, stories, banners, and ads, to boost engagement and brand awareness.",
    },
    {
      icon: "🎟️",
      title: "Event Posters & Flyers",
      description: "Creating attention-grabbing posters and flyers tailored to your event’s theme, ensuring maximum reach and audience interest.",
    },
    {
      icon: "📢",
      title: "Promotional Banners & Ads",
      description: "Developing high-quality banners and digital ads for social media, websites, and email campaigns to drive event participation.",
    },
    {
      icon: "🎥",
      title: "Motion Graphics & Video Teasers",
      description: "Producing engaging motion graphics and teaser videos to create excitement and anticipation for upcoming events.",
    },
    {
      icon: "🖥️",
      title: "Live Event Screen Designs",
      description: "Designing captivating visuals for event screens, presentations, and digital displays to enhance the audience experience.",
    },
    {
      icon: "🗓️",
      title: "Event Invitations & RSVP Designs",
      description: "Designing custom event invitations and RSVP cards that set the right tone and increase attendance.",
    },
    {
      icon: "⚡",
      title: "Branded Merchandise & Swag",
      description: "Creating high-quality designs for event merchandise, such as t-shirts, badges, and giveaways, to strengthen brand recognition.",
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
  Elevate Your Brand with Stunning Event & Social Media Designs
</motion.h1>

<motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-lg !w-full mb-12"
>
  We create eye-catching event graphics and social media designs that captivate audiences, enhance engagement, and amplify your brand's online presence.
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