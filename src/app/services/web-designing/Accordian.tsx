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
  CREATE A STUNNING WEBSITE THAT DRIVES RESULTS FOR YOUR BUSINESS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital-first world, your website is often the first impression potential customers have of your business.  
  Simply having an online presence isn't enough—your website needs to be visually appealing, user-friendly, and strategically designed to convert visitors.  
  At Tech Craft, we specialize in creating custom websites that combine beautiful design with powerful functionality to enhance your brand, improve user experience, and drive measurable business results.  
  Through responsive layouts, intuitive navigation, and conversion-focused elements, we ensure your website not only looks impressive but also performs exceptionally well.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S PROFESSIONAL WEB DESIGN SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is professional web design important for my business?",
    content: `Professional web design establishes credibility, creates a positive first impression, and builds trust with your visitors. A well-designed website improves user experience, increases engagement, enhances conversion rates, and provides a competitive advantage in your industry. In today's digital marketplace, your website is often your most important marketing asset.`,
  },
  {
    id: "accordion-panel-2",
    title: "What's included in your web design process?",
    content: `Our comprehensive web design process includes discovery and planning, wireframing and prototyping, visual design, development and coding, content integration, testing and quality assurance, and launch and post-launch support. We begin with understanding your business goals and target audience, then create a strategic design that aligns with your objectives and brand identity.`,
  },
  {
    id: "accordion-panel-3",
    title: "How long does it take to design and build a website?",
    content: `A typical website project takes 6-12 weeks from start to finish, depending on the complexity and scope. Simple brochure websites may take 4-6 weeks, while more complex e-commerce or custom functionality sites can take 12-16 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements and project scope.`,
  },
  {
    id: "accordion-panel-4",
    title: "Will my website be mobile-friendly and responsive?",
    content: `Absolutely! All our websites are built with responsive design principles, ensuring they look and function perfectly on all devices—smartphones, tablets, laptops, and desktop computers. With mobile traffic accounting for over 50% of web visits, we prioritize mobile-first design approaches that provide an optimal viewing experience regardless of screen size.`,
  },
  {
    id: "accordion-panel-5",
    title: "Do you include SEO in your web design services?",
    content: `Yes, we integrate SEO best practices throughout the web design process. This includes proper HTML structure, optimized page loading speed, mobile responsiveness, secure connections (HTTPS), schema markup, and user-friendly navigation. While comprehensive SEO campaigns require ongoing effort, our websites provide a strong technical foundation that supports your search engine visibility from day one.`,
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

