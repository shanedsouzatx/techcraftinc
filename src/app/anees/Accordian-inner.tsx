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
    POWERFUL WEBSITE CONTENT THAT ENGAGES & CONVERTS
  </h2>
  <p className="text-center text-sm md:text-base text-[#687087]">
    Your website is your digital storefront, and compelling content is the key to turning visitors into customers.  
    At Tech Craft, we craft engaging, SEO-friendly website copy that enhances your brand voice, improves search rankings, and keeps your audience engaged.  
    From service pages to landing pages, we ensure every word resonates with your target audience and drives action.  
    Let us help you create content that not only informs but also persuades and converts.
  </p>
</div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET ULTIMATE BENEFITS BY CHOOSING TECH CRAFT AS YOUR WEBSITE CONTENT WRITER 
        </h2>

        {/* Panel Template */}
        {[
  {
    id: "accordion-panel-1",
    title: "How Does High-Quality Website Content Benefit My Business?",
    content: `Well-crafted website content not only informs and engages visitors but also builds trust and credibility. Our expert writers ensure that your content aligns with your brand voice, improves user experience, and enhances SEO to attract more organic traffic.`,
  },
  {
    id: "accordion-panel-2",
    title: "Do You Optimize Content for SEO?",
    content: `Yes! We incorporate strategic keyword placement, optimize meta descriptions, and structure content for readability to ensure search engines rank your website higher. Our content is designed to drive traffic while maintaining a natural, engaging flow for readers.`,
  },
  {
    id: "accordion-panel-3",
    title: "Can You Help with Brand Messaging and Tone?",
    content: `Absolutely! We tailor your content to match your brand’s unique voice and personality. Whether you need a professional, informative tone or a friendly, conversational approach, we ensure consistency across all pages for a strong brand presence.`,
  },
  {
    id: "accordion-panel-4",
    title: "What Types of Website Content Do You Write?",
    content: `We specialize in homepages, service pages, landing pages, about us pages, FAQs, blog posts, and more. Each piece is designed to engage users, provide value, and encourage conversions.`,
  },
  {
    id: "accordion-panel-5",
    title: "How Do You Ensure Content Drives Conversions?",
    content: `We craft persuasive and action-driven content that guides visitors through the customer journey. By using clear CTAs, compelling storytelling, and engaging formatting, we help turn visitors into loyal customers.`,
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

