'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel((prevId) => (prevId === panelId ? null : panelId));
  };

  return (
    <div className="max-w-6xl py-2 md:py-9 mx-auto px-4 md:px-0">
      {/* Text Section */}
      <div data-aos="zoom-in" className="text-center md:text-left">
        <h2 className="text-2xl md:text-4xl text-left font-bold text-[#333] mb-4">
          Give Your Business A Digital Boost.
        </h2>
        <p className="text-left text-sm md:text-base text-[#687087]">
          The digital marketing competition is very high. Without a
          professional digital marketing agency, it would be very complicated
          for you to survive and grow your business. A website alone doesn’t
          guarantee visibility unless search engines recognize it. Tech Craft
          specializes in amplifying the digital presence of any business
          through targeted website design, compelling copywriting, strategic
          keyword integration, and active social media engagement to ensure your
          site is easily discoverable by the intended audience. We guarantee
          that partnering with Tech Craft will optimize your marketing
          investment for the highest returns.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333] my-6 md:my-8">
          Get Ultimate Benefits By Choosing Tech Craft as Your Digital Marketing
          Consultant
        </h2>

        {/* Panel Template */}
        {[
          {
            id: "accordion-panel-1",
            title: "Dedication to Your Success",
            content: `Our mission at Tech Craft is to contribute to your business’s growth. We see your success as our victory, fostering a relationship where you receive outstanding customer service aligned with your goals. We encourage continuous dialogue and provide access to a team that’s working for you and with you, offering reliable, expert advice to ensure your satisfaction.`,
          },
          {
            id: "accordion-panel-2",
            title: "Tailored Digital Marketing Strategies",
            content: `With Tech Craft, you’re not just getting a service but investing in a partnership that promises to develop and implement digital marketing strategies specifically designed for your business’s long-term goals. Our strategies are result-driven, highly impactful, customized to your industry, and easily measurable. After all, we need to ensure that your marketing efforts are targeted and effective.`,
          },
          {
            id: "accordion-panel-3",
            title: "Focus on Growing Your Business",
            content: `Leveraging our digital marketing expertise allows you to shed the marketing weight off your shoulders. This means you can concentrate more on what you do best — running your business. While we handle the digital front, you’ll gain insights into performance metrics and areas for improvement, guided by our comprehensive support.`,
          },
          {
            id: "accordion-panel-4",
            title: "Results-Driven Approach",
            content: `There’s no point in sticking with strategies that don’t deliver. Tech Craft listens to your needs and objectives, crafting and executing plans that align with your business’s goals. Our focus is clear: to strengthen your brand’s visibility, recognition, growth, and development. We utilize SEO and other innovative digital tools and techniques approved by Google’s algorithms to ensure your business gets higher search results and intended audience that can easily convert into sales.`,
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
                className="flex items-center w-full p-5 font-medium text-white bg-gradient-to-r from-[#282353]  to-[#282353]/80   border-b-0 rounded-t-xl focus:ring-4 focus:ring-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 hover:shadow-lg transform hover:scale-80 transition duration-300 ease-in-out"
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
                  className="shadow-lg bg-white p-4"
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
  );
};

export default Accordion;

