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
  CREATE STUNNING VISUALS WITH PROFESSIONAL CGI ANIMATION
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visually-driven digital world, CGI animation has become essential for creating immersive experiences that captivate audiences.  
  Simply having basic visuals isn't enough—your content needs to be realistic, engaging, and technically impressive.  
  At Tech Craft, we specialize in creating custom CGI animations that transform your ideas into photorealistic visual experiences.  
  Through advanced 3D modeling, texturing, lighting, and animation techniques, we ensure your CGI content not only looks stunning but also effectively communicates your message.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S CGI ANIMATION SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of CGI animation services do you offer?",
    content: `We provide comprehensive CGI animation services including 3D modeling and character creation, photorealistic rendering, architectural visualization, product animations, visual effects (VFX), medical and scientific visualizations, and virtual reality content. Each project is customized to meet your specific visual communication goals.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your CGI animation process work?",
    content: `Our process begins with concept development and storyboarding to establish the creative direction. We then create 3D models, textures, and environments before setting up lighting and cameras. After client approval of initial renders, we proceed with animation, rendering, and post-production effects. Each step includes client feedback to ensure the final product exceeds expectations.`,
  },
  {
    id: "accordion-panel-3",
    title: "What industries benefit most from CGI animation?",
    content: `CGI animation provides significant value across numerous industries including architecture and real estate (for visualizing unbuilt properties), product manufacturing (for showcasing products before production), entertainment and media, healthcare (for medical visualizations), automotive, education, and advertising. Any field requiring clear visualization of complex concepts can benefit from CGI.`,
  },
  {
    id: "accordion-panel-4",
    title: "What's the difference between CGI and traditional animation?",
    content: `CGI (Computer Generated Imagery) animation uses 3D computer software to create digital models that can be manipulated in a virtual environment, allowing for photorealistic results and camera movements impossible in traditional animation. Traditional animation involves hand-drawing or manipulating physical objects frame-by-frame. CGI offers greater flexibility, realism, and efficiency for complex visual projects.`,
  },
  {
    id: "accordion-panel-5",
    title: "How can CGI animation benefit my business?",
    content: `CGI animation helps businesses visualize products that don't yet exist, create immersive experiences that increase engagement, demonstrate complex processes clearly, reduce production costs compared to physical photography or video, maintain complete creative control, and easily update content as needed. It's particularly valuable for creating memorable brand experiences that stand out in today's competitive market.`,
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

