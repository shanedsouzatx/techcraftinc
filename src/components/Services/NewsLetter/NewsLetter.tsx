"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import { closeModal } from "@/app/utils/HelperFunction"

import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton"
export default function CTANewsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl border border-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Heading, paragraph and buttons */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-t from-[#48128A] to-[#8B3791] uppercase text-transparent bg-clip-text">
              Join Our Community Newsletter
            </h2>
            <p className="text-gray-900">
              Get weekly insights, tips, and exclusive content delivered straight to your inbox. Our newsletter is
              trusted by over 10,000 industry professionals to stay informed.
            </p>

            <div className="pt-2">
              <p className="text-sm text-gray-900 ">
                ✓ Weekly updates &nbsp; ✓ No spam &nbsp; ✓ Unsubscribe anytime
              </p>
            </div>

            {/* Buttons moved to left column */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
                <GradientButton
                  text="Let's Get Started"
                  onClick={openModal}
                />
                <OutlineButton text="Chat With Us" />
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div>
            {/* Image with enhanced hover effect */}
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 group shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png"
                alt="Newsletter preview"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#48128A]/60 via-[#8B3791]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-xl mb-2">Stay Ahead of the Curve</h3>
                <p className="text-white/90 text-sm">Get the latest industry insights and trends delivered to your inbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal integration */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => closeModal(setIsModalOpen)}
      />
    </div>
  )
}

