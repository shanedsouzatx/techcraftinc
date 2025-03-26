'use client'
import { Hero } from "./Hero"
import { closeModal } from "@/app/utils/HelperFunction"
import React, { useState } from "react"
import Modal from "@/components/Modal/Modal"
import Aurora from "@/components/Hero/Aurora"

export default function AllHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleChatWithUs = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }  // Replace with your WhatsApp number
  }

  return (
    <div>
      <Hero
      title = "Stunning 3D Graphic Design That Brings Ideas to Life"
      subtitle = "Eye-catching, high-quality 3D visuals crafted to enhance branding, captivate audiences, and elevate your creative projects."
        image="/services/hero1.png"
        actions={[
          {
            label: "Let's Get Started",
            href: "#",
            onClick: handleOpenModal,
            variant: "outline"
          },
          {
            label: "Chat With Us",
            href: "#",
            onClick: handleChatWithUs,
            variant: "default"
          }
        ]}
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actionsClassName="mt-8"
      />

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => closeModal(setIsModalOpen)} 
      />
    </div>
  )
}
