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

import Testimonials1 from "@/components/Anees/Testimonials1";
import BannerSlider1 from "@/components/Anees/BannerSlider1";
import { tabs } from "@/constants/TabsArray";
import { portfoilioBgImgSrc } from "@/constants/CloudinaryImgUrl";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import Modal from "@/components/Modal/Modal";
import { closeModal, openModal } from "../utils/HelperFunction";
import CountSection from "@/components/CountSection";
import HeroSection from "@/components/HeroSection";
import Navbar2 from "@/components/Anees/Navbar2";
import Portfolio1 from "@/components/Anees/Portfolio1";
import ContactForm from "@/components/Anees/ContactForm";
import Footer1 from "@/components/Services/Footer/Footer1";
import Location from "@/components/Location/Location";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Logo Design");

  return (
    <>
    <Navbar2/>
    <section className="w-full">
      {/* Hero Section */}
      <HeroSection
        subHeading="Our Outstanding Portfolio"
        heading=""
        para=" We have delivered exceptional digital service to our clients. At
          TechCraft our success lies in client’s satisfaction and
          delivering par excellence digital solutions"
        bgImgSrc={portfoilioBgImgSrc}
        backDropShadow="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))"
      />
      {/* Slider */}
      <BannerSlider1 />
      
      <Portfolio1/>
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
        <Testimonials1 />
      </div>
      {/* Projects Count */}
      <CountSection />

      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
      <div className="!py-9 -mt-5 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50   ">
        <ContactForm />
      </div>

      <Location />
      <Footer1 />
    </section>
    </>
  );
}

export default Portfolio;
