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
  BUILD A POWERFUL BRAND IDENTITY THAT STANDS OUT FROM THE CROWD
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's competitive marketplace, a strong brand identity is essential for making a lasting impression and building customer loyalty.  
  Simply having a logo isn't enough—your brand needs to communicate your values, connect emotionally with your audience, and remain consistent across all touchpoints.  
  At Tech Craft, we specialize in creating comprehensive brand identities that capture your unique essence, resonate with your target market, and position you for long-term success.  
  Through strategic brand development, creative design, and consistent implementation, we ensure your brand not only looks professional but also tells your authentic story.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL BRANDING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is professional branding important for my business?",
    content: `Professional branding helps your business stand out in a crowded marketplace, builds trust with customers, and creates emotional connections with your audience. A strong brand identity increases recognition, commands premium pricing, attracts ideal customers, and turns satisfied clients into brand advocates.`,
  },
  {
    id: "accordion-panel-2",
    title: "What does a complete branding package include?",
    content: `Our comprehensive branding packages typically include brand strategy development, logo design, color palette selection, typography guidelines, brand voice development, messaging frameworks, visual identity systems, brand style guides, and implementation across key touchpoints like websites, social media, and marketing materials.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you ensure my brand reflects my company's values?",
    content: `We begin with a thorough discovery process to understand your company's mission, vision, values, and unique selling propositions. Through collaborative workshops, competitor analysis, and audience research, we identify what makes your business special and develop brand elements that authentically communicate your core values and personality.`,
  },
  {
    id: "accordion-panel-4",
    title: "How long does the branding process typically take?",
    content: `A complete branding project typically takes 4-8 weeks depending on the scope and complexity. This includes discovery and strategy (1-2 weeks), creative development (2-3 weeks), refinement (1-2 weeks), and finalization of deliverables (1 week). We work with you to establish a timeline that meets your specific needs and business goals.`,
  },
  {
    id: "accordion-panel-5",
    title: "How can consistent branding impact my bottom line?",
    content: `Consistent branding directly impacts your revenue by increasing brand recognition (up to 33% higher), building trust (59% of consumers prefer familiar brands), commanding premium pricing (customers will pay 40% more for branded experiences), and improving customer loyalty (64% of consumers cite shared values as the primary reason for brand relationships).`,
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

