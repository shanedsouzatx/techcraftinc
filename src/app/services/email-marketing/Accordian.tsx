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
  DRIVE CONVERSIONS WITH STRATEGIC EMAIL MARKETING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital landscape, email marketing remains one of the most effective channels for nurturing leads and driving conversions.  
  Simply having an email list isn't enough—your campaigns need to be strategic, personalized, and designed to engage your audience.  
  At Tech Craft, we specialize in crafting results-driven email campaigns that build relationships, increase engagement, and generate measurable ROI.  
  Through audience segmentation, compelling content, and continuous optimization, we ensure your emails not only reach the inbox but also resonate with your subscribers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE BENEFITS OF TECH CRAFT'S EMAIL MARKETING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is email marketing important for my business?",
    content: `Email marketing offers one of the highest ROIs of any digital marketing channel, averaging $36 for every $1 spent. It provides direct access to your audience, builds customer relationships, drives website traffic, and generates sales. Unlike social media, you own your email list, giving you control over your communication channel.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you create effective email campaigns?",
    content: `We develop email campaigns based on your specific business goals and audience needs. Our process includes audience segmentation, compelling subject lines, mobile-responsive design, personalized content, and strategic CTAs. We also implement A/B testing to continuously improve open rates, click-through rates, and conversions.`,
  },
  {
    id: "accordion-panel-3",
    title: "What types of email campaigns do you offer?",
    content: `We create a variety of email campaigns including welcome sequences, promotional emails, newsletters, abandoned cart recovery, post-purchase follow-ups, re-engagement campaigns, and event-based emails. Each campaign is tailored to your specific business objectives and customer journey stages.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you measure email marketing success?",
    content: `We track key metrics including open rates, click-through rates, conversion rates, list growth, and ROI. Our comprehensive reporting provides insights into campaign performance, subscriber behavior, and revenue attribution. We use these metrics to continuously refine your email strategy for optimal results.`,
  },
  {
    id: "accordion-panel-5",
    title: "How do you ensure emails reach the inbox and not spam folders?",
    content: `We implement deliverability best practices including proper authentication (SPF, DKIM, DMARC), list hygiene maintenance, engagement-focused content, and compliance with anti-spam regulations like GDPR and CAN-SPAM. We also monitor deliverability metrics and make adjustments to ensure your emails consistently reach the inbox.`,
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

