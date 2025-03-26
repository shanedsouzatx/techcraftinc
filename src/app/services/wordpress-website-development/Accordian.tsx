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
      <div data-aos="zoom-in" className="text-center md:text-left">      <h2 className="text-2xl md:text-5xl text-center font-bold bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text mb-4">
  CREATE A POWERFUL ONLINE PRESENCE WITH WORDPRESS DEVELOPMENT
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital landscape, a professional WordPress website is essential for establishing credibility and reaching your target audience.  
  Simply having a basic website isn't enough—your online presence needs to be visually appealing, user-friendly, and optimized for performance.  
  At Tech Craft, we specialize in creating custom WordPress websites that enhance your brand image, improve user experience, and drive business growth.  
  Through expert design, development, and optimization, we ensure your WordPress site not only looks stunning but also delivers results for your business.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S WORDPRESS DEVELOPMENT SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why choose WordPress for my business website?",
    content: `WordPress powers over 40% of all websites on the internet due to its flexibility, scalability, and user-friendly content management system. It offers robust security, regular updates, extensive plugin options, and SEO-friendly architecture. WordPress sites are also mobile-responsive and can be easily maintained by non-technical users after development.`,
  },
  {
    id: "accordion-panel-2",
    title: "What types of WordPress websites can you develop?",
    content: `We develop a wide range of WordPress websites including business websites, e-commerce stores (using WooCommerce), membership sites, online learning platforms, portfolio websites, blogs, news portals, and custom web applications. Our team can create any type of website that aligns with your business goals and target audience needs.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you ensure my WordPress site is secure and fast?",
    content: `We implement multiple security layers including secure hosting, SSL certificates, regular updates, security plugins, and custom security configurations. For performance, we optimize images, implement caching solutions, use content delivery networks (CDNs), minimize HTTP requests, and follow WordPress performance best practices to ensure your site loads quickly on all devices.`,
  },
  {
    id: "accordion-panel-4",
    title: "Can you customize existing WordPress themes or build from scratch?",
    content: `We offer both options based on your needs and budget. We can customize premium themes to match your brand identity while maintaining their built-in functionality. For unique requirements, we develop custom themes from scratch using WordPress best practices, ensuring complete control over design, functionality, and performance without unnecessary bloat.`,
  },
  {
    id: "accordion-panel-5",
    title: "What ongoing support do you provide after my WordPress site launches?",
    content: `We offer comprehensive maintenance packages that include regular WordPress core updates, theme and plugin updates, security monitoring, performance optimization, content updates, and technical support. Our team remains available to address any issues, implement new features, or make design changes as your business evolves.`,
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

