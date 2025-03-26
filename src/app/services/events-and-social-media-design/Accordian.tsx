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
  CAPTIVATE YOUR AUDIENCE WITH STUNNING EVENT & SOCIAL MEDIA DESIGNS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's visually-driven world, eye-catching designs are essential for standing out at events and across social media platforms.  
  Generic templates and basic graphics aren't enough—your brand needs custom, cohesive visuals that capture attention and drive engagement.  
  At Tech Craft, we specialize in creating stunning event materials and social media designs that elevate your brand presence, increase engagement, and create memorable experiences.  
  Through strategic visual storytelling, on-trend aesthetics, and platform-specific optimization, we ensure your designs not only look impressive but also achieve your marketing objectives.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          GET EXCEPTIONAL RESULTS WITH TECH CRAFT'S EVENT & SOCIAL MEDIA DESIGN SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "How can professional event and social media design benefit my business?",
    content: `Professional design creates a cohesive brand experience that increases recognition by up to 80%. For events, it enhances attendee experience and creates memorable impressions. On social media, custom designs increase engagement rates by 48% compared to generic content, driving more followers, interactions, and conversions while establishing your brand as professional and trustworthy.`,
  },
  {
    id: "accordion-panel-2",
    title: "What types of event and social media design services do you offer?",
    content: `For events, we create invitation designs, banners, backdrops, signage, presentation templates, name badges, promotional materials, and complete event branding packages. Our social media services include platform-specific post designs, story templates, profile graphics, cover images, carousel posts, animated content, promotional graphics for campaigns, and consistent design systems for your entire social presence.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you ensure designs work across different platforms and formats?",
    content: `We implement responsive design principles that adapt to various platforms while maintaining brand consistency. Each design is created with platform-specific dimensions, aspect ratios, and technical requirements in mind. We provide multiple format variations for each design and follow a comprehensive brand style guide to ensure cohesive visuals across all touchpoints, from physical event materials to digital social posts.`,
  },
  {
    id: "accordion-panel-4",
    title: "What's your process for creating event and social media designs?",
    content: `Our process begins with understanding your brand, audience, and objectives through a detailed discovery phase. We then develop concept designs based on your brand guidelines and event/campaign goals. After your feedback and revisions, we finalize the designs and deliver them in all necessary formats. For ongoing social media design, we can establish templates and systems for consistent content creation at scale.`,
  },
  {
    id: "accordion-panel-5",
    title: "How can I measure the success of my event and social media designs?",
    content: `For events, success metrics include attendee feedback, participation rates, brand recall, lead generation, and conversion metrics. For social media, we track engagement rates (likes, comments, shares), reach and impressions, follower growth, click-through rates, and conversion metrics. We can help establish KPIs before launching designs and provide guidance on tracking these metrics to demonstrate ROI on your design investment.`,
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

