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
  ELEVATE YOUR BRAND WITH A UNIQUE & IMPACTFUL LOGO
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  Your logo is the face of your brand—it should be memorable, timeless, and visually striking.  
  A well-designed logo not only sets you apart but also builds trust and recognition among your audience.  
  At Tech Craft, we specialize in crafting custom logos that capture your brand's essence with creativity and precision.  
  From modern minimalism to bold and dynamic designs, we bring your vision to life with expert design techniques and attention to detail.
</p>


      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET ULTIMATE BENEFITS BY CHOOSING TECH CRAFT AS YOUR SEO BLOG WRITING 
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why is SEO blog writing important for my website?",
    content: `SEO blog writing helps your website rank higher on search engines by targeting relevant keywords, improving user engagement, and increasing organic traffic. Quality blog content establishes authority in your industry, keeps visitors on your site longer, and boosts conversion rates.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you ensure my blog content is SEO-optimized?",
    content: `We conduct in-depth keyword research, optimize meta tags, structure content with headings, and ensure proper internal linking. Our writers focus on readability, engagement, and search intent while following Google's best practices for content ranking.`,
  },
  {
    id: "accordion-panel-3",
    title: "How often should I publish SEO blogs?",
    content: `Consistency is key! We recommend publishing high-quality blog posts at least once a week or biweekly. However, the ideal frequency depends on your industry, competition, and content goals. Regular updates keep your website fresh and improve search rankings.`,
  },
  {
    id: "accordion-panel-4",
    title: "What types of SEO blogs perform best?",
    content: `Long-form, informative blogs that address specific questions or problems perform best. Lists, how-to guides, case studies, and pillar content that interlink with other pages on your site also tend to rank higher and attract more readers.`,
  },
  {
    id: "accordion-panel-5",
    title: "Can SEO blog writing help convert readers into customers?",
    content: `Absolutely! Well-written blogs not only attract visitors but also guide them through the buyer’s journey. By addressing pain points, providing solutions, and including strong calls-to-action, your blogs can turn casual readers into loyal customers.`,
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

