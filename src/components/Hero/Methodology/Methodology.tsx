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
import { openModal, closeModal } from "@/app/utils/HelperFunction";

export default function Methodology() {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Analysis");
  const [description, setDescription] = useState(
    "In order to create a strategic strategy that produces results quickly, we start by examining the clients' needs and understanding the demands of the project at hand."
  );
  const [hoveredIcon, setHoveredIcon] = useState("laptop");

  // Add these scroll-based animations
  

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
        <>
         {/* METHODOLOGY SECTION */}
      <section className="mx-auto my-12 md:my-16 max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
       
        
       {/* Text and Button Section */}
       <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in-right">
         <h1 className="text-2xl font-bold md:text-4xl md:font-semibold dark:text-white md:space-y-1 md:flex md:flex-col">
           <span>Power your business </span>
           <span>Growth With An </span>
           <span>Optimized Website</span>
         </h1>

         <p className="text-sm md:text-base my-6 text-neutral-600 dark:text-neutral-200">
           Tech Craft features a dedicated team of web development and digital
           marketing experts focused on delivering client satisfaction through
           innovative design and development. We guarantee results that
           showcase our technical expertise and creativity in website design.
         </p>
         <button
           className="text-sm font-medium cursor-pointer py-3 w-full md:w-52 md:py-4 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-md relative overflow-visible"
           onClick={() => openModal(setIsModalOpen)}
         >
           DISCUSS YOUR IDEA
         </button>
       </div>

       {/* Image and Icons Section */}
       <div className="w-full md:w-1/2 flex justify-center">
         <div className="relative flex justify-center items-center border-4 border-dotted border-[#33174E] rounded-full h-[315px] md:h-[500px] w-[310px] md:w-[500px]">
           {/* Methodologies Texts Section */}
           <div>
             <h5 className="text-center text-lg text-[#5114AE] font-extrabold">
               Our Methodology
             </h5>
             <div>
               <h3 className="text-[#333] text-lg md:text-xl my-3 font-bold text-center">
                 {title}
               </h3>
               <p
                 className={`text-center text-sm max-w-52 md:max-w-xs text-[#687087] overflow-auto`}
                 style={{
                   // Apply max-height only for mobile screens
                   maxHeight: "80px", // Adjust as needed
                   overflowY: "scroll", // Enable vertical scrolling
                   scrollbarWidth: "none",
                 }}
               >
                 {description}
               </p>
             </div>
           </div>

           {/* Relative methodologies icons */}
           <div
             className={`group flex justify-center items-center ${
               hoveredIcon === "laptop"
                 ? "bg-white border-2 border-[#33174E]"
                 : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
             } cursor-pointer p-3 md:p-5 absolute right-[10px] md:right-[50px] top-[20px] md:top-[-5px] rounded-full shadow-2xl transition duration-300`}
             onMouseEnter={() => handleMouseEnter("laptop")}
           >
             <FaLaptop
               className={`transition duration-300 ${
                 hoveredIcon === "laptop" ? "text-[#33174E]" : "text-white"
               } text-[30px] md:text-[50px]`} // Adjusted for desktop
             />
           </div>
           <div
             className={`group flex justify-center items-center ${
               hoveredIcon === "bullhorn"
                 ? "bg-white border-2 border-[#33174E]"
                 : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
             } cursor-pointer p-3 md:p-5 absolute right-[-25px] md:right-[-30px] top-[90px] md:top-[105px] rounded-full shadow-2xl transition duration-300`}
             onMouseEnter={() => handleMouseEnter("bullhorn")}
           >
             <FaBullhorn
               className={`transition duration-300 ${
                 hoveredIcon === "bullhorn" ? "text-[#33174E]" : "text-white"
               } text-[30px] md:text-[50px]`}
             />
           </div>
           <div
             className={`group flex justify-center items-center ${
               hoveredIcon === "rocket"
                 ? "bg-white border-2 border-[#33174E]"
                 : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
             } cursor-pointer p-3 md:p-5 absolute right-[-20px] md:right-[-40px] top-[170px] md:top-[245px] rounded-full shadow-2xl transition duration-300`}
             onMouseEnter={() => handleMouseEnter("rocket")}
           >
             <FaRocket
               className={`transition duration-300 ${
                 hoveredIcon === "rocket" ? "text-[#33174E]" : "text-white"
               } text-[30px] md:text-[50px]`}
             />
           </div>
           <div
             className={`group flex justify-center items-center ${
               hoveredIcon === "paintbrush"
                 ? "bg-white border-2 border-[#33174E]"
                 : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
             } cursor-pointer p-3 md:p-5 absolute right-[15px] md:right-[30px] top-[240px] md:top-[370px] rounded-full shadow-2xl transition duration-300`}
             onMouseEnter={() => handleMouseEnter("paintbrush")}
           >
             <FaPaintBrush
               className={`transition duration-300 ${
                 hoveredIcon === "paintbrush" ? "text-[#33174E]" : "text-white"
               } text-[30px] md:text-[50px]`}
             />
           </div>
         </div>
       </div>
     </section>

        </>
    )
}