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
  AMPLIFY YOUR BRAND WITH STRATEGIC SOCIAL MEDIA MARKETING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's connected world, effective social media marketing is essential for building brand awareness and driving customer engagement.  
  Simply having social profiles isn't enough—your strategy needs to be targeted, consistent, and aligned with your business goals.  
  At Tech Craft, we specialize in creating data-driven social media campaigns that increase visibility, boost engagement, and convert followers into loyal customers.  
  Through platform-specific strategies, compelling content creation, and performance analytics, we ensure your social media presence not only grows but also delivers measurable ROI.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S SOCIAL MEDIA MARKETING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "How can social media marketing benefit my business?",
    content: `Social media marketing builds brand awareness by reaching millions of potential customers where they already spend time. It increases website traffic, generates qualified leads, and improves conversion rates through targeted campaigns. Additionally, it enhances customer relationships through direct engagement, provides valuable audience insights, and offers a cost-effective alternative to traditional advertising with measurable ROI.`,
  },
  {
    id: "accordion-panel-2",
    title: "Which social media platforms should my business focus on?",
    content: `The ideal platforms depend on your specific business goals, target audience demographics, and industry. We conduct thorough audience research to determine where your customers are most active. For B2B companies, LinkedIn and Twitter often yield the best results, while B2C brands typically see stronger engagement on Instagram, Facebook, and increasingly TikTok. Our strategy focuses on quality presence on the most relevant platforms rather than spreading resources too thin.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you create engaging social media content?",
    content: `We develop platform-specific content strategies based on audience research and platform best practices. Our approach includes creating a diverse content mix (educational, entertaining, promotional) to maintain audience interest, incorporating trending formats and topics while staying true to your brand voice, and using high-quality visuals, videos, and graphics optimized for each platform. We also implement data-driven testing to continuously refine what resonates with your audience.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you measure social media marketing success?",
    content: `We track both vanity metrics (followers, likes, shares) and more meaningful KPIs tied to business objectives. For awareness campaigns, we measure reach, impressions, and audience growth. For engagement, we analyze interaction rates, comments, and shares. For conversion-focused campaigns, we track click-through rates, lead generation, and direct sales attribution. We provide comprehensive monthly reports with actionable insights and recommendations for ongoing optimization.`,
  },
  {
    id: "accordion-panel-5",
    title: "How does paid social media advertising fit into the strategy?",
    content: `Paid social advertising complements organic efforts by accelerating results and reaching specific audience segments with precision. We develop targeted ad campaigns across relevant platforms using advanced demographic, interest, and behavioral targeting. Our approach includes creating platform-optimized ad creative, implementing strategic retargeting, and continuously optimizing campaigns based on performance data to maximize ROI and minimize cost-per-acquisition.`,
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

