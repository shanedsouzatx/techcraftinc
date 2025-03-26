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
  ESTABLISH YOUR AUTHORITY WITH EXPERT ARTICLE WRITING
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's information-driven world, high-quality articles are essential for building credibility and connecting with your audience.  
  Simply publishing content isn't enough—your articles need to be well-researched, engaging, and valuable to your readers.  
  At Tech Craft, we specialize in crafting expert articles that showcase your knowledge, address your audience's needs, and establish your brand as a trusted authority.  
  Through thorough research, compelling storytelling, and professional writing, we ensure your articles not only inform but also inspire and engage your readers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL ARTICLE WRITING SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of articles do you write?",
    content: `We create a wide range of articles including thought leadership pieces, industry analyses, how-to guides, opinion pieces, feature articles, news articles, case studies, interviews, and educational content. Our versatile writers adapt to your specific needs and publication requirements.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you ensure articles are well-researched and accurate?",
    content: `Our process includes comprehensive research using credible sources, fact-checking, and expert consultation when necessary. We verify information from multiple sources, cite references properly, and ensure all statistics and claims are accurate and up-to-date.`,
  },
  {
    id: "accordion-panel-3",
    title: "Can you write articles for specific publications or platforms?",
    content: `Absolutely! We tailor articles to meet the specific requirements, style guidelines, and audience expectations of different publications—whether it's industry journals, news sites, magazines, or your own company blog. We can adapt tone, format, and content to suit any platform.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you make technical or complex topics accessible?",
    content: `Our writers excel at translating complex concepts into clear, engaging content that resonates with your target audience. We use analogies, examples, visual explanations, and structured narratives to make even the most technical subjects approachable without sacrificing accuracy.`,
  },
  {
    id: "accordion-panel-5",
    title: "How can professional article writing benefit my business?",
    content: `Professional articles establish your brand as an authority in your industry, build trust with potential customers, and improve your visibility. Well-crafted articles can generate leads, support your marketing goals, open doors to media opportunities, and create valuable content assets that continue to work for your business long-term.`,
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

