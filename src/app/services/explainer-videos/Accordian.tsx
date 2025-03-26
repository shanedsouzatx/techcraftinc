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
  SIMPLIFY COMPLEX IDEAS WITH ENGAGING EXPLAINER VIDEOS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's fast-paced digital world, explainer videos have become essential for communicating complex ideas quickly and effectively.  
  Simply having text and static images isn't enough—your audience needs clear, engaging visual explanations that capture attention.  
  At Tech Craft, we specialize in creating custom explainer videos that simplify your message, boost engagement, and drive conversions.  
  Through compelling storytelling, professional animation, and strategic messaging, we ensure your explainer videos not only inform but also inspire action.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S EXPLAINER VIDEO SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of explainer videos do you create?",
    content: `We produce a variety of explainer video styles including 2D animation, whiteboard animation, motion graphics, character-based animation, and mixed media. Each style is selected based on your brand identity, target audience, and specific communication goals to ensure maximum impact.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your explainer video process work?",
    content: `Our process begins with discovery and scriptwriting to establish your key messages. We then create a storyboard and style frames for your approval. After finalizing the visual approach, we move to animation, voiceover recording, sound design, and final production. Each step includes client feedback to ensure the final video meets your expectations.`,
  },
  {
    id: "accordion-panel-3",
    title: "What is the ideal length for an explainer video?",
    content: `The optimal length for most explainer videos is 60-90 seconds. This duration is long enough to communicate key messages while maintaining viewer attention. For more complex topics, we can create videos up to 2-3 minutes, but we focus on keeping the content concise, engaging, and to the point.`,
  },
  {
    id: "accordion-panel-4",
    title: "How can explainer videos benefit my business?",
    content: `Explainer videos increase website conversion rates by up to 80%, improve email click-through rates, boost social media engagement, and enhance presentation effectiveness. They simplify complex information, build emotional connections with viewers, reduce support inquiries, and provide a consistent message across all platforms.`,
  },
  {
    id: "accordion-panel-5",
    title: "Where can I use my explainer video?",
    content: `Your explainer video can be used across multiple channels including your website homepage, landing pages, social media platforms, email campaigns, digital ads, trade shows, sales presentations, and training materials. We optimize the video format for each platform to ensure maximum effectiveness wherever it's displayed.`,
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

