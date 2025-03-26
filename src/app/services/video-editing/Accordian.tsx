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
  TRANSFORM YOUR FOOTAGE INTO PROFESSIONAL VIDEO CONTENT
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital landscape, high-quality video content is essential for engaging audiences and conveying your message effectively.  
  Simply having raw footage isn't enough—your videos need professional editing, color grading, and sound design to stand out.  
  At Tech Craft, we specialize in transforming ordinary footage into compelling video content that captivates viewers and achieves your goals.  
  Through expert editing techniques, creative transitions, and professional post-production, we ensure your videos not only look polished but also tell your story effectively.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S VIDEO EDITING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of video editing services do you offer?",
    content: `We provide comprehensive video editing services including basic cuts and transitions, advanced color grading, motion graphics and text animation, sound design and audio enhancement, special effects integration, and multi-camera editing. Our team can handle projects of any scale, from social media clips to feature-length productions.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your video editing process work?",
    content: `Our process begins with understanding your goals and reviewing your footage. We then create an initial edit following your creative direction, add necessary graphics and effects, enhance audio quality, and apply color correction. After client feedback and revisions, we deliver the final video in your preferred format and resolution.`,
  },
  {
    id: "accordion-panel-3",
    title: "What makes professional video editing worth the investment?",
    content: `Professional video editing significantly increases viewer engagement and retention by maintaining proper pacing, creating visual interest, and ensuring technical quality. It elevates your brand image, conveys professionalism, and ultimately drives better results whether your goal is increased sales, brand awareness, or audience education.`,
  },
  {
    id: "accordion-panel-4",
    title: "What formats and platforms do you optimize videos for?",
    content: `We optimize videos for all major platforms including YouTube, Instagram, TikTok, Facebook, LinkedIn, and broadcast television. Each platform has specific requirements for aspect ratios, duration, and technical specifications. We ensure your videos are perfectly formatted for wherever they'll be viewed, including mobile-first optimization.`,
  },
  {
    id: "accordion-panel-5",
    title: "How quickly can you complete video editing projects?",
    content: `Our standard turnaround time for most projects is 3-7 business days depending on complexity and length. For urgent projects, we offer expedited services with 24-48 hour delivery options. We'll always provide a clear timeline during our initial consultation based on your specific project requirements and deadline needs.`,
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

