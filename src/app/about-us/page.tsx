/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import BannerSlider from "@/components/BannerSlider";

import { aboutHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import { closeModal, openModal } from "../utils/HelperFunction";
import OutlineButton from "@/components/OulineButton";
import Modal from "@/components/Modal/Modal";
import CountSection from "@/components/CountSection";
import HeroSection from "@/components/HeroSection";
import { OurServiceCard } from "@/components/OurServiceCard";
import { aboutServices } from "@/data/services";
import Navbar2 from "@/components/Anees/Navbar2";
import BannerSlider1 from "@/components/Anees/BannerSlider1"; 

import Testimonials1 from "@/components/Anees/Testimonials1";
import Footer1 from "@/components/Services/Footer/Footer1";
import ContactForm from "@/components/Anees/ContactForm";
import Location from "@/components/Location/Location";
function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Navbar2/>
    <section>
      {/* Hero Section */}
      <HeroSection
        subHeading={`About Us`}
        heading=""
        para="At Tech Craft, we believe that business growth is linked with digital technology as it revamps and innovates businesses in wonderful ways. Founded on innovation, integrity, and inclusivity principles, our mission goes beyond delivering exceptional digital solutions. Let’s build the digital experiences that truly matter."
        bgImgSrc={aboutHeroImgSrc}
        backDropShadow="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        textColor="text-white"
      />

      {/* Slider */}
      <BannerSlider1 />
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

      {/* Result Oriented Section */}
      <div className="px-4 py-16 md:px-6 bg-gradient-to-b from-[#48128A]  to-[#8B3791] ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl bg-gradient-to-b from-white via-white to-[#BCBEC0]/70   text-transparent bg-clip-text text-3xl md:text-5xl font-bold uppercasefont-bold text-center">
            We are Results-Oriented Agency
          </h2>
          <p className="text-sm text-white mt-4 text-center md:text-base">
            We put strategy first so that you can see actual results. TechCraft
            is a well-known specialist that works for clients in a variety of
            industries including e-commerce, healthcare, education, and so on.
            Our experts are result-oriented. We also have vast experience in
            website design & development. We make sure that our web marketing
            initiatives support long-term success for our clients in addition to
            generating new revenue for them. The services that we provide:
          </p>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between text-black">
            {/* Card Section */}
            {aboutServices.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 2*/}
      <div className="w-full px-4 my-16 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724885435/team-leader-teamwork-concept_74855-6671_zeznss.webp"
              alt="about2"
              width={530}
              height={530}
              objectFit="contain"
              className="mr-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-xl md:text-4xl bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text font-bold">
              Our Commitment to Your Success
            </h2>
            <p className="text-sm text-gray-500 my-4 md:text-base">
              Your success is at the heart of everything we do. We’re not just
              your service providers but your digital growth partners. We take
              the time to understand your vision, challenges, and goals. This
              strategic approach ensures that we meet your expectations and
              consistently strive to exceed them. We’re committed to being
              transparent, responsive, and adaptable throughout our partnership,
              providing a journey together that is as rewarding as the results
              we achieve
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-6 space-y-4 md:space-y-0">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Chat With Us" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="my-0 md:my-16">
        {/* Testimonials Heading */}
        {/* <div className="mb-6" data-aos="zoom-in">
          <h5 className="text-center text-2xl font-bold md:text-3xl text-[#5114AE] md:font-medium ">
            Go through Client Feedbacks
          </h5>
          <h4 className="text-center text-2xl font-bold md:text-4xl md:font-medium mt-2 text-slate-600">
            Testimonials
          </h4>
        </div>
        <Testimonials /> */}
    <Testimonials1/>
      </div>
      {/* Projects Count */}
      <CountSection />
      <div className="!pb-11 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50  ">

<ContactForm/>
<Location/>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
      <Footer1/>
    </section>
    </>
  );
}

export default AboutUs;
