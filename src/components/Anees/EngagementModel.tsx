"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Modal from "../Modal/Modal"
import { closeModal } from "@/app/utils/HelperFunction"

export default function EngagementModels() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const cards = [
    {
      id: 1,
      title: "Project-Based Development",
      description: "Assign dedicated PMs & developers for your software development project.",
      videoSrc: "/engage1.mp4",
    },
    {
      id: 2,
      title: "Team-Based Development",
      description: "Deploy a cohesive team to deliver end-to-end, custom software solutions.",
      videoSrc: "/engage2.mp4",
    },
    {
      id: 3,
      title: "Staff Augmentation",
      description: "Integrate top-tier app developers into your team for enhanced project success.",
      videoSrc: "/engage3.mp4",
    },
  ]

  return (
    <div className="w-full -z-50 bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with large watermark text */}
        <div className="relative mb-16">
          <h1 className="text-center text-xl md:text-5xl bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text font-bold font-bold  relative py-9 z-10 uppercase ">Our Engagement Models</h1>
          <span className="absolute top-0 left-0 text-[120px] md:text-[180px] font-bold text-gray-100 -z-0 opacity-50 leading-none">
            Our Models
          </span>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                hoveredCard === card.id ? "transform scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Video/Image Section */}
              <div className="h-64 bg-white p-6 flex items-center justify-center">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => console.error("Video error:", e)}
                >
                  <source src={card.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text Section */}
              <div
                className={`p-6 py-8 min-h-[150px] ${hoveredCard === card.id ? "bg-gradient-to-t from-[#48128A] to-[#8B3791]  text-white" : "bg-white text-slate-800"}`}
              >
                <h3 className="text-xl  font-bold mb-3">{card.title}</h3>
                <p className={`${hoveredCard === card.id ? "text-white" : "text-slate-600"}`}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            className=" text-black text-base border-radius-50%  font-semibold  border-2 border-radius-50% rounded-full cursor-pointer py-3 w-full md:w-44 md:py-6 px-4 border-2 border-[#48128A] hover:border-none bg-transparent hover:bg-gradient-to-b from-[#48128A] to-[#8B3791]  hover:text-white transition-colors duration-300 "
            onClick={openModal}
          >
            Get Started Today
          </Button>
        </div>

        {/* Modal component */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => closeModal(setIsModalOpen)}
        />
      </div>
    </div>
  )
}

