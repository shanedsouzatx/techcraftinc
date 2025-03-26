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
  ELEVATE YOUR BRAND WITH STUNNING 3D GRAPHIC DESIGN
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visually-driven world, captivating 3D graphics are essential for standing out and making a lasting impression.  
  Basic 2D visuals are no longer enough—your brand needs depth, dimension, and immersive experiences to engage modern audiences.  
  At Tech Craft, we specialize in creating photorealistic 3D models, animations, and visualizations that transform your ideas into stunning visual assets.  
  Through cutting-edge technology, artistic expertise, and attention to detail, we ensure your 3D graphics not only look impressive but also effectively communicate your brand message.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S 3D GRAPHIC DESIGN SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "How can 3D graphic design benefit my business?",
    content: `3D graphic design creates more engaging and memorable visual experiences that capture attention in crowded marketplaces. It allows for photorealistic product visualization before manufacturing, enhances marketing materials with dynamic visuals, and creates immersive experiences that increase user engagement and conversion rates.`,
  },
  {
    id: "accordion-panel-2",
    title: "What types of 3D design services do you offer?",
    content: `We provide comprehensive 3D design services including product modeling and visualization, architectural rendering, character design and animation, 3D logo design, virtual reality and augmented reality content creation, medical and scientific visualization, and custom 3D animations for marketing and explainer videos.`,
  },
  {
    id: "accordion-panel-3",
    title: "What is the process for creating 3D graphics?",
    content: `Our 3D design process includes concept development and planning, 3D modeling of objects or environments, texturing and material application, lighting setup, rendering for photorealistic results, and post-production enhancements. For animations, we add rigging, animation, and special effects to bring designs to life.`,
  },
  {
    id: "accordion-panel-4",
    title: "Which industries benefit most from 3D graphic design?",
    content: `While 3D design benefits nearly all industries, it's particularly valuable for e-commerce (product visualization), architecture (building renderings), entertainment (characters and environments), healthcare (medical visualization), manufacturing (product prototyping), advertising (eye-catching campaigns), and education (interactive learning materials).`,
  },
  {
    id: "accordion-panel-5",
    title: "How can 3D visualization improve my marketing strategy?",
    content: `3D visualization dramatically improves marketing by creating more engaging content that increases audience attention by up to 40%. It allows customers to interact with products virtually, reduces returns in e-commerce, builds stronger emotional connections with your brand, and differentiates your marketing materials from competitors using standard photography or 2D graphics.`,
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

