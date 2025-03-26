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
  BRING YOUR IDEAS TO LIFE WITH STUNNING 3D ANIMATION
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visual-driven world, 3D animation has become a powerful tool for storytelling, product visualization, and brand engagement.  
  Simply having static visuals isn't enough—your content needs to be dynamic, immersive, and captivating to your audience.  
  At Tech Craft, we specialize in creating high-quality 3D animations that transform complex ideas into compelling visual experiences.  
  Through cutting-edge technology, artistic expertise, and strategic implementation, we ensure your animations not only look stunning but also effectively communicate your message.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S 3D ANIMATION SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of 3D animation services do you offer?",
    content: `We provide a comprehensive range of 3D animation services including character animation, product visualization, architectural visualization, medical and scientific animations, explainer videos, and VFX for film and advertising. Our team can handle projects of any complexity, from simple product rotations to complex character-driven narratives.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your 3D animation process work?",
    content: `Our process begins with concept development and storyboarding to establish the creative direction. We then move to 3D modeling, texturing, and rigging of assets. This is followed by animation, lighting, and rendering. Finally, we enhance the animation with post-production effects, sound design, and color grading to deliver a polished final product.`,
  },
  {
    id: "accordion-panel-3",
    title: "What software and technologies do you use for 3D animation?",
    content: `We utilize industry-standard software including Autodesk Maya, Blender, Cinema 4D, ZBrush for modeling, and Substance Painter for texturing. For rendering, we employ powerful engines like Arnold, Redshift, and Octane. Our pipeline also incorporates motion capture technology and procedural animation tools when appropriate for the project.`,
  },
  {
    id: "accordion-panel-4",
    title: "How can 3D animation benefit my business?",
    content: `3D animation helps businesses explain complex products or services in an engaging way, showcase products before they're physically produced, create memorable brand experiences, and stand out in crowded digital spaces. It's particularly effective for increasing engagement on websites and social media, enhancing presentations, and creating immersive training materials.`,
  },
  {
    id: "accordion-panel-5",
    title: "What is the typical timeline and investment for a 3D animation project?",
    content: `Project timelines vary based on complexity, ranging from 2-3 weeks for simple animations to 2-3 months for complex projects. Investment similarly scales with project scope, style requirements, animation complexity, and length. We work closely with clients to develop solutions that fit their timeline and budget while maintaining high quality standards.`,
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

