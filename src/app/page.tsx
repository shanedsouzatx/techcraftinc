'use client';
/* eslint-disable react/no-unescaped-entities */
import Navbar2 from "@/components/Anees/Navbar2";
import Hero2 from "@/components/Anees/Hero2";
import BannerSlider1 from "@/components/Anees/BannerSlider1";
import StickySection1 from "@/components/Anees/StickySection1";
import Accordian1 from "@/app/anees/Accordian1";
import BusinessSection1 from "@/components/Anees/BusinessSection1";
import Portfolio1 from "@/components/Anees/Portfolio1";
import Pricing1 from "@/components/Anees/Pricing1";
import TechnologiesSection from "@/components/Anees/TechnologiesSection";
import Testimonials1 from "@/components/Anees/Testimonials1";
import CountSection1 from "@/components/Anees/CountSection1";
import React, { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { openModal, closeModal } from "@/app/utils/HelperFunction";
import { useScroll, useTransform, motion, animate } from "framer-motion";
import ContactForm from "@/components/Anees/ContactForm";
import Location from "@/components/Location/Location";
import Footer1 from "@/components/Services/Footer/Footer1";


export default function Anees(){
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Add these scroll-based animations
  

 
  return(
<>

<Navbar2/>
<section
        className="pt-11 pb-16 bg-no-repeat bg-cover md:pt-16 md:pb-32"
        style={{
        }}
        // backgroundImage: `url(${heroBgImgSrc})`,
        >
        <Hero2/>

        <div className="pt-9">
        <BannerSlider1/>
        </div>
<StickySection1/>
      </section>
      <Accordian1/>
      <BusinessSection1
        subHeading="CUSTOM WEB DESIGN AND MARKETING SOLUTIONS FOR BUSINESS GROWTH"
        isPhoneIcon={true}
        para="Boost your business with a customized website and digital marketing strategy! At Tech Craft, we're home to seasoned designers, developers, and digital marketing experts who are focused on delivering results with excellence. Ready to reinforce your online presence and drive more traffic to your website? Let's discuss. We are just a text away."
        btnText="(667) 423-5532"
      />
      <Portfolio1/>
      <Pricing1/>
      <TechnologiesSection/>
      <Testimonials1/>
      <CountSection1/>
      <div className="!pb-11 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50  ">

<ContactForm/>
<Location/>
      </div>
      <Footer1/>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
</> 
    )
}

