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
  ELEVATE YOUR BRAND WITH PROFESSIONAL SCRIPT WRITING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's competitive digital landscape, compelling scripts are essential for engaging your audience and conveying your message effectively.  
  A well-crafted script can transform ordinary content into powerful storytelling that resonates with viewers and drives action.  
  At Tech Craft, we specialize in creating custom scripts for videos, commercials, presentations, and more that capture your brand voice and connect with your target audience.  
  Through strategic messaging, creative storytelling, and professional structure, we ensure your scripts not only communicate clearly but also inspire your audience to respond.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL SCRIPT WRITING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is professional script writing important for my business?",
    content: `Professional script writing ensures your message is clear, engaging, and effective. Well-crafted scripts save production time, maintain audience attention, and increase conversion rates. They help establish brand consistency across all your video content while effectively communicating your unique value proposition.`,
  },
  {
    id: "accordion-panel-2",
    title: "What types of scripts do you write?",
    content: `We create scripts for a wide range of content including explainer videos, commercials, corporate videos, product demonstrations, training materials, webinars, social media content, YouTube videos, podcast intros/outros, and brand storytelling. Each script is tailored to your specific platform, audience, and business objectives.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you ensure my script reflects my brand voice?",
    content: `We begin with a comprehensive brand discovery process to understand your company's unique voice, values, and messaging style. Our writers then craft scripts that authentically represent your brand while engaging your target audience. We provide revisions until the script perfectly captures your desired tone and message.`,
  },
  {
    id: "accordion-panel-4",
    title: "What makes a script effective for video content?",
    content: `Effective video scripts balance concise messaging with engaging storytelling. They include a strong hook, clear structure, conversational language, and compelling calls-to-action. Our scripts account for timing, visual elements, and audience attention spans while ensuring your key messages are memorable and impactful.`,
  },
  {
    id: "accordion-panel-5",
    title: "How does the script writing process work?",
    content: `Our process begins with understanding your goals, audience, and key messages. We then develop a creative brief and outline before crafting your first draft. After your review, we refine the script through collaborative revisions until it perfectly meets your needs. We also provide guidance on timing, pacing, and visual elements to ensure smooth production.`,
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

