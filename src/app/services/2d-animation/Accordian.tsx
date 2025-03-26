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
  CAPTIVATE YOUR AUDIENCE WITH ENGAGING 2D ANIMATION
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visual-driven world, 2D animation offers a powerful way to communicate ideas, tell stories, and engage audiences.  
  Simply having static visuals isn't enough—your content needs to be dynamic, memorable, and tailored to your specific goals.  
  At Tech Craft, we specialize in creating custom 2D animations that simplify complex concepts, enhance brand identity, and drive audience engagement.  
  Through creative storytelling, professional illustration, and strategic implementation, we ensure your animations not only look stunning but also deliver measurable results.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S 2D ANIMATION SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of 2D animation services do you offer?",
    content: `We provide a comprehensive range of 2D animation services including explainer videos, character animation, motion graphics, whiteboard animation, infographics, logo animation, and social media content. Our team tailors each animation style to match your brand identity and communication objectives.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your 2D animation process work?",
    content: `Our process begins with concept development and scriptwriting to establish the creative direction. We then create storyboards and style frames for your approval. After finalizing the visual style, we move to illustration, animation, and sound design. Each step includes client feedback to ensure the final product meets your expectations.`,
  },
  {
    id: "accordion-panel-3",
    title: "How long does it take to create a 2D animation?",
    content: `Project timelines vary based on complexity, length, and style. A typical 60-90 second explainer video takes 4-6 weeks from concept to completion. Simpler animations like logo animations or social media content can be completed in 1-2 weeks. We'll provide a detailed timeline during our initial consultation based on your specific project requirements.`,
  },
  {
    id: "accordion-panel-4",
    title: "How can 2D animation benefit my business?",
    content: `2D animation helps businesses explain complex products or services in a simple, engaging way, increases website engagement and conversion rates, boosts social media performance, enhances email marketing campaigns, and creates memorable brand experiences. It's particularly effective for simplifying technical concepts and capturing attention in crowded digital spaces.`,
  },
  {
    id: "accordion-panel-5",
    title: "What makes your 2D animation services stand out?",
    content: `Our team combines artistic talent with strategic thinking to create animations that not only look great but also achieve business objectives. We focus on understanding your audience, crafting compelling narratives, and maintaining consistent quality. Additionally, we offer flexible revisions, custom illustration styles, and comprehensive project management to ensure a smooth experience.`,
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

