/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import {
  logoDesign,
  webDesign,
  eCommerce,
  branding,
  mobileApps,
  motionGraphics,
  illustration,
} from "@/data/porfolios";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import { tabs } from "@/constants/TabsArray";
import { openModal } from "@/app/utils/HelperFunction";
import { useScroll, useTransform} from "framer-motion";

export default function Portfolio1(){
   
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Analysis");
  const [description, setDescription] = useState(
    "In order to create a strategic strategy that produces results quickly, we start by examining the clients' needs and understanding the demands of the project at hand."
  );
  const [hoveredIcon, setHoveredIcon] = useState("laptop");
  const [activeTab, setActiveTab] = useState("Logo Design");

  // Add these scroll-based animations
  const { scrollYProgress } = useScroll();
  
  const gradientY1 = useTransform(scrollYProgress, [0, 3], [0, 200]);
  const gradientY2 = useTransform(scrollYProgress, [0, 6], [0, -200]);
  const gradientScale = useTransform(scrollYProgress, [0, 5], [1, 1.5]);

    return(
        <>
        
         {/* Portfolio Section*/}
      <div className="py-12 md:py-16 py-12 md:py-9 -z-50 bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto px-4 md:px-8" data-aos="zoom-in">
          <h2 className="text-center text-xl md:text-5xl bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text font-bold">
            SHOWCASE OF SUCCESS 
          </h2>
          <p className="text-center text-sm md:text-base text-[#687087] mb-6 md:mb-8 mt-4 md:mt-6">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br className="hidden md:block" />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>
        {/* Portfolio Filter tabs */}
        <div
          className="flex flex-wrap rounded-full justify-center gap-3 max-w-[1080px] mx-auto mb-6 md:mb-8 px-4 md:px-0"
          data-aos="zoom-in"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm font-semibold rounded-md cursor-pointer py-2 md:py-3 w-full md:w-36 border border-[#33174E] rounded-full  transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white  border-none !rounded-full hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#BCBEC0]/70 hover:text-black "
                  : "text-black bg-transparent hover:bg-gradient-to-r hover:from-[#5114AE] hover:to-[#802FCE] !rounded-full  hover:bg-gradient-to-r hover:from-[#48128A] hover:to-[#8B3791] hover:text-white hover:border-none" 
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {activeTab === "Logo Design" &&
            logoDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Website Design" &&
            webDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "E-Commerce" &&
            eCommerce.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "Branding" &&
            branding.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Mobile Apps" &&
            mobileApps.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Motion Graphics" &&
            motionGraphics.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Illustration" &&
            illustration.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0">
          <GradientButton
            text="Let's Get Started"
            onClick={() => openModal(setIsModalOpen)}
          />
          <OutlineButton text="Chat With Us" />
        </div>
      </div>

        </>
    )
}