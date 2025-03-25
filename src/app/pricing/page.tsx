/* eslint-disable react/no-unescaped-entities */
"use client";

import  Testimonials4  from "@/components/Testimonials/Testimonials4";
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import CountSection from "@/components/CountSection";
import HeroSection from "@/components/HeroSection";
import Pricing1 from "@/components/Anees/Pricing1";
import Navbar2 from "@/components/Anees/Navbar2";
import Footer1 from "@/components/Services/Footer/Footer1";
import React, { useState } from "react";

import ContactForm from "@/components/Anees/ContactForm";
import Location from "@/components/Location/Location";
import BannerSlider1 from "@/components/Anees/BannerSlider1"; 
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import { closeModal, openModal } from "../utils/HelperFunction";
import OutlineButton from "@/components/OulineButton";
function Prices() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Navbar2/>
    <section className="w-full">
      {/* Hero Section */}
      <HeroSection
        heading="Pricing"
        para="TechCraft is a digital agency striving to deliver
            exceptional designsolutions to meet your branding needs. Moving in
            this fast-paced businessworld, we deliver customer experience with
            smart services to meet the needs of the customers."
        bgImgSrc={pricesHeroImgSrc}
        backDropShadow="linear-gradient(rgba(49, 49, 49, 0.5), rgba(102, 100, 100, 0.5))"
        textColor="text-white"
      />
      <BannerSlider1/>
      {/* Pricing Section */}
      <Pricing1 />
   {/* TEXT IMAGE SECTION 1*/}
   <div className="w-full px-4 my-16 md:px-6 ">
        <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl text-xl md:text-4xl bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text font-bold">
              A Dedicated Team Eager To Help You Lead
            </h2>
            <p className="text-sm text-gray-500 my-4 md:text-base">
              Our strength lies in our people—a diverse group of creative
              thinkers, problem solvers, and technology enthusiasts dedicated to
              pushing the boundaries of what’s possible. United by a shared
              passion for digital excellence, our team thrives on collaboration,
              continuous learning, and the challenge of turning complex problems
              into simple, elegant solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-6 space-y-4 md:space-y-0">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Chat With Us" />
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724885383/employees-meeting-office-kitchen-drinking-coffee_74855-5237_i3f8xf.webp"
              alt="about1"
              width={530}
              height={530}
              objectFit="contain"
              className="ml-auto"
            
            />
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="my-10 md:my-16">
        {/* Testimonials Heading */}
        {/* <div className="mb-6" data-aos="zoom-in">
          <h5 className="text-center text-2xl font-bold md:text-3xl text-[#5114AE] md:font-medium ">
            Go through Client Feedbacks
          </h5>
          <h4 className="text-center text-2xl font-bold md:text-4xl md:font-medium mt-2 text-slate-600">
            Testimonials
          </h4>
        </div> */}
        <Testimonials4 />
      </div>
      {/* Projects Count */}
      <CountSection />
      <div className="!pb-11 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50  ">

<ContactForm/>
<Location/>
      </div>
      <Footer1/>
    </section>
    </>
  );
}

export default Prices;
