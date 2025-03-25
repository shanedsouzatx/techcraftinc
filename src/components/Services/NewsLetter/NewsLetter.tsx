"use client"
import { useState } from "react"
import Modal from "../../Modal/Modal"
import { closeModal } from "@/app/utils/HelperFunction"
import { ArrowRight } from "lucide-react"

export default function NewsLetter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className=" bg-gradient-to-b from-white via-white to-[#BCBEC0] max-w-[1440px] mx-auto py-16 my-8 rounded-3xl  ">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold birder-2 border-[#BCBEC0]  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  leading-tight uppercase text-center md:text-left">
          Ready to work with us?
        </h2>
        <button
          onClick={openModal}
          className=" text-black text-base border-radius-50%  font-semibold  border-2 border-radius-50% rounded-full cursor-pointer py-3 w-full md:w-44 md:py-4 border-2 border-[#48128A] hover:border-none bg-transparent hover:bg-gradient-to-b from-[#48128A] to-[#8B3791]  hover:text-white transition-colors duration-300 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
    </div>
  )
}

