"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordioninner = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel((prevId) => (prevId === panelId ? null : panelId));
  };

  return (
    <div className="py-9 top-0 -z-50 bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">

    <div className="max-w-6xl mx-auto py-9 px-4 md:px-0  ">
      {/* Text Section */}
      <div data-aos="zoom-in" className="text-center md:text-left">
      <h2 className="text-2xl md:text-5xl text-center font-bold bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text mb-4">
  CREATE A MEMORABLE LOGO THAT CAPTURES YOUR BRAND ESSENCE
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visually-driven marketplace, a distinctive logo is essential for making a powerful first impression and building brand recognition.  
  Simply having a business isn't enough—your logo needs to communicate your values, resonate with your audience, and stand out from competitors.  
  At Tech Craft, we specialize in designing custom logos that capture your brand's unique personality, create instant recognition, and establish a strong visual foundation.  
  Through strategic design thinking, creative craftsmanship, and meticulous attention to detail, we ensure your logo not only looks professional but also tells your brand story at a glance.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL LOGO DESIGN SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is a professional logo important for my business?",
    content: `A professional logo establishes credibility, creates brand recognition, and makes a memorable first impression. It helps your business stand out in a crowded marketplace, builds trust with customers, and provides a visual foundation for all your marketing materials. A well-designed logo can communicate your brand values and personality instantly.`,
  },
  {
    id: "accordion-panel-2",
    title: "What's included in your logo design process?",
    content: `Our comprehensive logo design process includes discovery and research, concept development, design exploration, refinement, and finalization. We begin by understanding your brand, audience, and industry, then create multiple concept directions, refine based on your feedback, and deliver a complete logo package with all necessary file formats for various applications.`,
  },
  {
    id: "accordion-panel-3",
    title: "How many logo concepts will I receive?",
    content: `Our standard packages include 3-5 initial logo concepts, each with a unique approach to your brand. After you select your preferred direction, we'll refine that concept with up to 2-3 rounds of revisions to perfect the design. This process ensures you receive a logo that truly represents your brand while exploring different creative possibilities.`,
  },
  {
    id: "accordion-panel-4",
    title: "What file formats will I receive with my final logo?",
    content: `You'll receive a complete logo package with files optimized for every use case: vector formats (AI, EPS, SVG) for scalability, raster formats (JPG, PNG) for digital use, versions with transparent backgrounds, color variations (full color, black, white, reversed), and both horizontal and vertical arrangements when applicable.`,
  },
  {
    id: "accordion-panel-5",
    title: "How long does the logo design process take?",
    content: `A typical logo design project takes 2-3 weeks from start to finish. This includes the discovery phase (3-5 days), concept development (5-7 days), refinement (3-5 days), and finalization (2-3 days). We can accommodate rush projects when needed, but allowing adequate time ensures the best creative results for your brand.`,
  },
].map((panel) => (
          <motion.div
            key={panel.id}
            className="mb-4 overflow-hidden rounded-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.4, ease: "easeInOut" }, 
            }}
          >
            <h2>
              <motion.button
                type="button"
                onClick={() => togglePanel(panel.id)}
                className="flex items-center w-full p-5 font-medium text-white bg-gradient-to-b from-[#48128A] to-[#8B3791]   border-b-0 rounded-full focus:ring-4 focus:ring-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 hover:shadow-lg transform hover:scale-80 transition duration-300 ease-in-out"
                aria-expanded={expandedPanel === panel.id}
                aria-controls={`accordion-content-${panel.id}`}
                whileHover={{ scale: 0.99 }} // Smooth scale on hover
              >
                {panel.title}
                <svg
                  className={`w-3 h-3 shrink-0 ml-auto transition-transform duration-300 ${
                    expandedPanel === panel.id ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </motion.button>
            </h2>
            <AnimatePresence>
              {expandedPanel === panel.id && (
                <motion.div
                  id={`accordion-content-${panel.id}`}
                  className="shadow-lg bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  p-4"
                  aria-labelledby={`accordion-button-${panel.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.4, ease: "easeInOut" }, 
                  }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
                >
                  <p
                    className="text-sm md:text-base text-[#687087] my-4"
                    dangerouslySetInnerHTML={{ __html: panel.content }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Accordioninner;

