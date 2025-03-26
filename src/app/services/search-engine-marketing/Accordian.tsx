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
  DRIVE TARGETED TRAFFIC & CONVERSIONS WITH SEARCH ENGINE MARKETING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's competitive digital landscape, effective search engine marketing is essential for capturing high-intent traffic and driving measurable business results.  
  Simply having an online presence isn't enough—your paid search strategy needs to be targeted, optimized, and continuously refined.  
  At Tech Craft, we specialize in developing comprehensive SEM campaigns that maximize visibility, generate qualified leads, and deliver exceptional ROI.  
  Through strategic keyword targeting, compelling ad creative, and data-driven optimization, we ensure your advertising budget is invested for maximum impact.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S SEARCH ENGINE MARKETING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What platforms do your SEM services cover?",
    content: `Our SEM services encompass all major search engines and advertising platforms including Google Ads, Microsoft Advertising (Bing), YouTube, and display networks. We develop tailored strategies for each platform based on your target audience, industry, and specific business goals to maximize your reach and ROI.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you structure SEM campaigns for optimal performance?",
    content: `We build campaigns with a logical, scalable structure that groups keywords by theme, intent, and performance metrics. Our approach includes strategic ad group organization, targeted keyword selection, and implementation of appropriate campaign types (search, display, shopping, etc.) based on your objectives. This structured approach improves quality scores, enhances relevance, and maximizes your advertising budget.`,
  },
  {
    id: "accordion-panel-3",
    title: "What goes into your ad creation process?",
    content: `Our ad creation process begins with competitor analysis and audience research to identify compelling messaging opportunities. We develop multiple ad variations with attention-grabbing headlines, persuasive descriptions, and strong calls-to-action. We implement all relevant ad extensions to maximize visibility and implement systematic A/B testing to continuously improve performance over time.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you optimize landing pages for SEM campaigns?",
    content: `We ensure landing pages are tightly aligned with ad messaging and user intent to maximize conversion rates. Our optimization process includes improving page load speed, enhancing mobile responsiveness, streamlining forms, and creating compelling calls-to-action. We continuously test and refine landing pages based on performance data to improve quality scores and conversion rates.`,
  },
  {
    id: "accordion-panel-5",
    title: "How do you measure and report on SEM campaign performance?",
    content: `We track comprehensive metrics including impressions, clicks, conversions, cost-per-click, cost-per-acquisition, and return on ad spend. Our custom reporting dashboards provide clear visibility into campaign performance with actionable insights. We conduct regular performance reviews to identify optimization opportunities and ensure your campaigns continuously improve over time.`,
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

