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
  CONVERT VISITORS INTO CUSTOMERS WITH PERSUASIVE COPYWRITING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's competitive digital marketplace, compelling copy is the difference between being ignored and making sales.  
  Simply having a website isn't enough—your words need to captivate, persuade, and drive action from your audience.  
  At Tech Craft, we specialize in crafting conversion-focused copy that speaks directly to your customers' needs, highlights your unique value, and motivates them to take action.  
  Through strategic messaging, persuasive techniques, and deep audience understanding, we ensure your copy not only engages readers but transforms them into loyal customers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL COPYWRITING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "How can professional copywriting benefit my business?",
    content: `Professional copywriting drives more conversions by clearly communicating your value proposition and addressing customer pain points. Compelling copy builds trust, differentiates your brand from competitors, and guides prospects through the buying journey. Well-crafted words can significantly improve your marketing ROI across all channels.`,
  },
  {
    id: "accordion-panel-2",
    title: "What types of copywriting services do you offer?",
    content: `We provide comprehensive copywriting services including website copy, landing pages, email campaigns, product descriptions, ad copy, social media content, brochures, case studies, white papers, and brand messaging frameworks. Each type of copy is strategically crafted to achieve specific business objectives and connect with your target audience.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you ensure copy reflects my brand voice?",
    content: `We begin with a thorough brand discovery process to understand your unique voice, values, and positioning. Our copywriters then create a consistent tone that aligns with your brand personality—whether professional, conversational, authoritative, or playful. We provide revisions until the copy perfectly captures your brand's distinctive voice.`,
  },
  {
    id: "accordion-panel-4",
    title: "What makes copy effective at driving conversions?",
    content: `Conversion-focused copy speaks directly to customer needs, emphasizes benefits over features, creates emotional connections, addresses objections, and includes clear calls-to-action. Our copywriters use proven persuasive techniques like social proof, scarcity, and value demonstration to motivate readers to take the next step in their customer journey.`,
  },
  {
    id: "accordion-panel-5",
    title: "How do you approach the copywriting process?",
    content: `Our process begins with understanding your business goals, target audience, and competitive landscape. We then develop messaging strategies, create compelling headlines and content, and refine the copy through collaborative feedback. We test different approaches when possible and optimize based on performance data to maximize your results.`,
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

