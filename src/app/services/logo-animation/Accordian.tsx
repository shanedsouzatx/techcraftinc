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
  ELEVATE YOUR BRAND WITH A UNIQUE & IMPACTFUL LOGO
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  Your logo is the face of your brand—it should be memorable, timeless, and visually striking.  
  A well-designed logo not only sets you apart but also builds trust and recognition among your audience.  
  At Tech Craft, we specialize in crafting custom logos that capture your brand's essence with creativity and precision.  
  From modern minimalism to bold and dynamic designs, we bring your vision to life with expert design techniques and attention to detail.
</p>


      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET ULTIMATE BENEFITS BY CHOOSING TECH CRAFT AS YOUR SEO BLOG WRITING 
        </h2>

        {/* Panel Template */}
        {[
  {
    id: "accordion-panel-1",
    title: "Why is a professional logo important for my business?",
    content: `Your logo is the face of your brand—it creates a strong first impression, builds brand recognition, and sets you apart from competitors. A well-designed logo establishes credibility and helps customers connect with your brand on a deeper level.`,
  },
  {
    id: "accordion-panel-2",
    title: "What makes a great logo design?",
    content: `A great logo is simple, memorable, versatile, and relevant to your brand identity. It should work across different platforms and mediums while effectively conveying your brand’s message and personality.`,
  },
  {
    id: "accordion-panel-3",
    title: "How long does the logo design process take?",
    content: `The timeline depends on the complexity of the design and revision process. Typically, it takes anywhere from a few days to a couple of weeks to create a refined, high-quality logo that aligns with your vision.`,
  },
  {
    id: "accordion-panel-4",
    title: "Will I receive multiple logo concepts to choose from?",
    content: `Yes! We provide multiple initial logo concepts based on your brand’s identity and preferences. After feedback, we refine the chosen design to perfection until it truly represents your brand.`,
  },
  {
    id: "accordion-panel-5",
    title: "What file formats will I receive for my logo?",
    content: `You will receive high-resolution logo files in multiple formats, including PNG, JPEG, SVG, and vector files (AI, EPS, or PDF). These formats ensure your logo looks sharp across digital and print media.`,
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

