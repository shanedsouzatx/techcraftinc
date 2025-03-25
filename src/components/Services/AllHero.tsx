'use client'
import { Hero } from "@/components/Services/Hero"
import { closeModal } from "@/app/utils/HelperFunction"
import React, { useState } from "react"
import Modal from "../Modal/Modal"
import Aurora from "../Hero/Aurora"

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
        title="Website Content Writing That Works for You."
        subtitle="Engaging, SEO-driven content tailored to your brand's voice. Boost visibility, credibility, and conversions effortlessly."
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
