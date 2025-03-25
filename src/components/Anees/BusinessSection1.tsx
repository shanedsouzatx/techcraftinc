"use client"
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import { ctaImgSrc } from "@/constants/CloudinaryImgUrl";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";



const BusinessSection1 = ({
  heading,
  subHeading,
  para,
  isPhoneIcon,
  btnText,
}: {
  heading?: string;
  subHeading: string;
  para: string;
  isPhoneIcon?: boolean;
  btnText: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div
      className="py-8 md:py-[40px] mb-0 pb-0 mt-0 z-50 bg-no-repeat bg-gradient-to-b from-[#48128A] to-[#8B3791] overflow-hidden"
      style={{
        // backgroundImage: `url(${ctaImgSrc})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center">
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white font-semibold text-xl md:text-[1.35rem]">
            {subHeading}
          </h2>
          {heading && (
            <h1 className="text-white font-semibold text-2xl md:text-5xl mt-4 md:mt-6">
              {heading}
            </h1>
          )}
          <p className="text-white text-sm md:text-base my-4 md:my-6 max-w-lg">
            {para}
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2  b rounded-full px-6 py-3  bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 text-black transition-all duration-300 ease-in-out"
            >
              {isPhoneIcon && <FiPhone size={20} color="#000000" />}
              {btnText === "Let's Get Started" ? (
                <a onClick={() => openModal(setIsModalOpen)}>{btnText}</a>
              ) : (
                <a href="tel:+18583650790">{btnText}</a>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto border-2 border-white hover:border-0 rounded-full px-8 py-3 hover:text-black text-white hover:bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 transition-all duration-300 ease-in-out"
              onClick={handleChat}
            >
              Chat With Us
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 hidden md:block"
          data-aos="flip-right"
          data-aos-duration="1000"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724876925/pngwing.com-12-1_pvtrlh.png"
            alt="cta-img"
            className="w-full object-contain"
          />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
    </div>
  );
};

export default BusinessSection1;
