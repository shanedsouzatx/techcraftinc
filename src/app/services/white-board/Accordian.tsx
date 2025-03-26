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
  SIMPLIFY COMPLEX IDEAS WITH ENGAGING WHITEBOARD ANIMATIONS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's fast-paced digital world, whiteboard animations have become a powerful tool for explaining complex concepts clearly and memorably.  
  Simply having text and static images isn't enough—your audience needs engaging visual explanations that simplify information.  
  At Tech Craft, we specialize in creating custom whiteboard animations that transform complicated ideas into simple, engaging stories.  
  Through hand-drawn illustrations, strategic storytelling, and professional production, we ensure your whiteboard videos not only educate but also drive action.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S WHITEBOARD ANIMATION SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What makes whiteboard animation effective for communication?",
    content: `Whiteboard animation combines visual and auditory learning, making complex information up to 67% more memorable than traditional content. The drawing effect naturally captures attention and maintains viewer engagement, while the simplified visual style helps audiences focus on key messages without distractions.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your whiteboard animation process work?",
    content: `Our process begins with scriptwriting and storyboarding to establish the narrative flow. We then create custom illustrations tailored to your message and brand. After client approval, we animate the drawings with professional hand-simulation techniques, add voiceover narration, and enhance with subtle sound effects for a polished final product.`,
  },
  {
    id: "accordion-panel-3",
    title: "What types of content work best with whiteboard animation?",
    content: `Whiteboard animation excels at explaining complex processes, abstract concepts, and educational content. It's particularly effective for product demonstrations, company introductions, training materials, educational content, and marketing campaigns where simplifying information is crucial for audience understanding and retention.`,
  },
  {
    id: "accordion-panel-4",
    title: "How can whiteboard animation benefit my business?",
    content: `Whiteboard animation increases viewer retention by up to 15% compared to traditional video, boosts conversion rates on landing pages, simplifies complex information for better understanding, differentiates your brand with a unique visual style, and provides excellent ROI through versatile content that can be used across multiple platforms and campaigns.`,
  },
  {
    id: "accordion-panel-5",
    title: "How long does it take to create a whiteboard animation?",
    content: `The timeline for a typical 1-2 minute whiteboard animation is 2-4 weeks from concept to completion. This includes scriptwriting (3-5 days), storyboarding (4-7 days), illustration (5-10 days), animation (5-10 days), and final production with voiceover and sound design (3-5 days). We can accommodate rush projects when needed.`,
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

