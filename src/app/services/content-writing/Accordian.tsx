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
  ELEVATE YOUR BRAND WITH COMPELLING CONTENT WRITING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's competitive digital landscape, exceptional content is the foundation of effective communication with your audience.  
  Simply having content isn't enough—it needs to be strategic, engaging, and tailored to your specific business goals.  
  At Tech Craft, we specialize in crafting versatile content that builds brand authority, engages readers, and drives meaningful conversions.  
  Through audience research, strategic messaging, and expert storytelling, we ensure your content not only captures attention but also inspires action.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S PROFESSIONAL CONTENT WRITING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of content writing services do you offer?",
    content: `We provide comprehensive content writing services including website copy, blog articles, product descriptions, email newsletters, social media content, case studies, white papers, ebooks, press releases, and video scripts. Our versatile team adapts to your specific industry and content needs while maintaining a consistent brand voice across all platforms.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you ensure content aligns with our brand voice?",
    content: `We begin with a thorough brand discovery process to understand your unique voice, values, and communication style. Our writers create detailed brand guidelines that capture your tone, terminology, and messaging priorities. We maintain consistent communication throughout the content creation process, incorporating your feedback to refine and perfect your brand's distinctive voice.`,
  },
  {
    id: "accordion-panel-3",
    title: "What is your content creation process?",
    content: `Our structured process begins with strategy development and topic planning based on your goals. We then conduct thorough research and create detailed content outlines for your approval. Our writers craft the initial draft, which undergoes internal editing and quality checks. After delivering the draft, we incorporate your feedback through up to two revision rounds to ensure the final content perfectly meets your expectations and objectives.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you measure content effectiveness?",
    content: `We establish clear KPIs aligned with your business goals, whether that's engagement, lead generation, or conversions. We track metrics like traffic, time on page, social shares, and conversion rates. For ongoing content strategies, we provide regular performance reports with actionable insights and continuously refine our approach based on data to maximize your content ROI.`,
  },
  {
    id: "accordion-panel-5",
    title: "Can you create content for specialized or technical industries?",
    content: `Absolutely! We have experience creating content across diverse industries including healthcare, finance, technology, manufacturing, and more. Our research-driven approach allows us to quickly understand complex topics. For highly specialized content, we can collaborate with your subject matter experts or conduct expert interviews to ensure technical accuracy while maintaining engaging, accessible writing.`,
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

