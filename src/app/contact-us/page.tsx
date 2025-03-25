/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

import BannerSlider1 from "@/components/Anees/BannerSlider1"; 

import { contactHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import HeroSection from "@/components/HeroSection";
import Navbar2 from "@/components/Anees/Navbar2";
import ContactForm from "@/components/Anees/ContactForm";
import Location from "@/components/Location/Location";
import Footer1 from "@/components/Services/Footer/Footer1";
function Contact() {
  return (
    <>
    <Navbar2/>
    <section>
      {/* Hero Section */}
      <HeroSection
        heading={``}
        subHeading="Contact Us"
        para="We provide complete web development solutions for your business. Our
            websites showcase dexterity, agility, exclusivity and quality."
        bgImgSrc={contactHeroImgSrc}
        backDropShadow="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        textColor="text-white"
      />
      {/* Slider */}
      <div className="mb-20">
        <BannerSlider1 />
      </div>
    </section>
    <div className="!pb-11 -mt-8 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50  ">

<ContactForm/>
<Location/>
      </div>
    <Footer1/>
    </>
  );
}

export default Contact;
