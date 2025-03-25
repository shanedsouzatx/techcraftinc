/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import { products } from "@/data/product";
import {
  FaLaptop,
  FaBullhorn,
  FaRocket,
  FaPaintBrush,
  FaRegCheckCircle,
} from "react-icons/fa";
import Location from "@/components/Location/Location";
import Hero from "@/components/Hero/Hero";
import Accordian from "@/components/Accordian";
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
import  Testimonials4  from "@/components/Testimonials/Testimonials4";
import BannerSlider from "@/components/BannerSlider";
import GradientButton from "@/components/GradientButton";
import Modal from "@/components/Modal/Modal";
import OutlineButton from "@/components/OulineButton";
import { tabs } from "@/constants/TabsArray";
import { openModal, closeModal } from "@/app/utils/HelperFunction";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import PricingSection from "@/components/PricingSection";
// import HeroLottieAnimation from "@/components/HeroLottieAnimation";
import Image from "next/image";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import { useScroll, useTransform, motion, animate } from "framer-motion";
import Navbar1 from "@/components/Navbar1/Navbar1";
import Footer from "@/components/Footer";
import Methodology from "@/components/Hero/Methodology/Methodology";
import StickySection from "@/components/Hero/StickySection";

export default function TechnologiesSection() {
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

  // Add flowing gradient animation variants
  const flowingGradient = {
    animate: {
      x: [0, -100, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
          ease: "linear"
        }
      }
    }
  };

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
    switch (icon) {
      case "laptop":
        setTitle("Monitoring and Analysis");
        setDescription(
          "We track the performance and results of the website and marketing campaigns live. We use innovative analytics to monitor key metrics to evaluate what's working and where adjustments are needed."
        );
        break;
      case "bullhorn":
        setTitle("Strategy Development");
        setDescription(
          "We begin by immersing ourselves in your business to understand your objectives, market position, and intended audience. Then, we gather insights through research to develop a strategy that suits your business goals."
        );
        break;
      case "rocket":
        setTitle("Optimization and Growth");
        setDescription(
          "Insights gained from ongoing analysis inform our optimization efforts. We fine-tune strategies and tactics to enhance performance and ensure your digital marketing efforts yield the best results and drive growth for your business."
        );
        break;
      case "paintbrush":
        setTitle("Implementation");
        setDescription(
          "Armed with a solid strategy, we move to implement the strategized digital marketing tactics. This includes website development, SEO, content creation, and PPC campaigns, among others, tailored to your business niche."
        );
        break;
      default:
        break;
    }
  };

return(
    <div className="" >
     {/* TECHNOLOGIES SECTION */}
     <div className="py-16 -z-50 bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat ">
        <div className="max-w-6xl mx-auto px-4" data-aos="zoom-in">
          <h5 className="text-center text-2xl text-[#5114AE] font-semibold  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text uppercase">
            TECHNOLOGIES
          </h5>
          <h4 className="font-bold text-center text-2xl md:text-4xl md:font-semibold mt-2">
            Leveraging Innovative Technologies to Scale Your Growth
          </h4>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-8">
          {/* Image Section */}
          <div className="w-full md:w-[55%] relative" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724877614/4_kiwu6j.webp"
              alt="cta-img"
              className="w-full object-contain z-50"
            />  
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724879111/spiral-img_ib1sr2.png"
              alt="cta-img"
              className="w-[75%] object-contain absolute top-0 left-24 z-50"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-[40%] mt-8 md:mt-0" data-aos="fade-left">
            <h2 className="font-bold md:font-semibold text-2xl md:text-4xl uppercase   bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text ">
              The Creative Web Designs At Tech Craft
            </h2>
            <p className="text-sm md:text-base my-6 max-w-md text-slate-600">
              Let Tech Craft revamp your brand identity to dominate the digital
              world by reinforcing the brand's online presence, streamlining
              your operations, and engaging your target audience more
              effectively. As for now we are leveraging:
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Magento</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Shopify</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Wordpress</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>HTML CSS</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Talk To Us" width="w-full md:w-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
)
}