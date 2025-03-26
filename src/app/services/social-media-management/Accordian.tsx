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
  AMPLIFY YOUR BRAND WITH STRATEGIC SOCIAL MEDIA MANAGEMENT
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's connected world, effective social media presence is essential for building brand awareness and driving business growth.  
  Simply having social profiles isn't enough—your strategy needs to be consistent, engaging, and aligned with your business objectives.  
  At Tech Craft, we specialize in comprehensive social media management that enhances visibility, builds community, and generates measurable results.  
  Through platform-specific strategies, compelling content creation, and data-driven optimization, we ensure your social presence not only grows but also converts followers into customers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE BENEFITS OF TECH CRAFT'S SOCIAL MEDIA MANAGEMENT SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What platforms do you manage for social media?",
    content: `We provide comprehensive management across all major social platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest, and YouTube. Our team specializes in platform-specific strategies that leverage each network's unique features, audience behaviors, and algorithm requirements to maximize your brand's impact and engagement.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you develop a social media strategy?",
    content: `We begin with a thorough audit of your current social presence and competitive landscape. Based on this analysis, we develop a customized strategy that includes platform selection, content themes, posting frequency, and growth tactics. Our approach aligns with your specific business goals—whether that's brand awareness, community building, lead generation, or direct sales.`,
  },
  {
    id: "accordion-panel-3",
    title: "What does your content creation process include?",
    content: `Our content creation process encompasses professional photography, graphic design, video production, and copywriting tailored to each platform. We develop monthly content calendars with a strategic mix of promotional, educational, and engagement-focused posts. All content is crafted to reflect your brand voice while optimizing for each platform's best practices and algorithm preferences.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you measure social media success?",
    content: `We track comprehensive metrics including follower growth, engagement rates, reach, impressions, website traffic, and conversion data. Monthly performance reports provide clear insights into what's working and opportunities for improvement. We focus on metrics that align with your business objectives, ensuring social media efforts contribute directly to your bottom line.`,
  },
  {
    id: "accordion-panel-5",
    title: "Do you handle social media advertising?",
    content: `Yes! Our social media advertising services include campaign strategy, audience targeting, ad creative development, and budget management. We specialize in creating high-performing ads across platforms with detailed performance tracking and optimization. Our approach focuses on maximizing ROI through continuous testing and refinement of targeting, creative elements, and conversion pathways.`,
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

