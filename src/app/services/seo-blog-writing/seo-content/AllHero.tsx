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
        title="SEO Blog Writing That Ranks & Engages "
        subtitle="High-quality, search-optimized content designed to improve rankings, attract organic traffic, and keep readers engaged."
        image="https://res.cloudinary.com/dhggagqst/image/upload/v1742849852/Vector-02_lbbsdr.png"
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
