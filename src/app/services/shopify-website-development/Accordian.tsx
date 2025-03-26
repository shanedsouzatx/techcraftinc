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
  BUILD A POWERFUL E-COMMERCE STORE WITH SHOPIFY DEVELOPMENT
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital marketplace, a professional Shopify store is essential for selling products online and growing your e-commerce business.  
  Simply having a basic online store isn't enough—your e-commerce presence needs to be visually appealing, user-friendly, and optimized for conversions.  
  At Tech Craft, we specialize in creating custom Shopify websites that enhance your brand image, improve customer experience, and drive sales growth.  
  Through expert design, development, and optimization, we ensure your Shopify store not only looks stunning but also converts visitors into loyal customers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S SHOPIFY DEVELOPMENT SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "Why choose Shopify for my e-commerce business?",
    content: `Shopify is the leading e-commerce platform powering over 1.7 million businesses worldwide. It offers unmatched reliability, built-in payment processing, comprehensive security, mobile-responsive designs, and extensive app integrations. Shopify stores are easy to manage, scale with your business growth, and provide powerful analytics to track your performance.`,
  },
  {
    id: "accordion-panel-2",
    title: "What Shopify development services do you offer?",
    content: `We provide end-to-end Shopify services including custom store design, theme development and customization, app integration, product setup and migration, payment gateway configuration, and performance optimization. We also offer ongoing maintenance, SEO optimization for Shopify, and custom app development for unique business requirements.`,
  },
  {
    id: "accordion-panel-3",
    title: "How do you optimize Shopify stores for conversions?",
    content: `We implement conversion-focused design principles with clear product displays, streamlined checkout processes, and trust-building elements. We optimize product pages with compelling descriptions and high-quality images, create effective upsell/cross-sell opportunities, and ensure mobile optimization. We also integrate analytics tools to continuously improve conversion rates.`,
  },
  {
    id: "accordion-panel-4",
    title: "Can you migrate my existing store to Shopify?",
    content: `Yes, we specialize in seamless migrations from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. Our migration process includes transferring products, customer data, order history, and content while maintaining SEO value. We ensure zero downtime during transition and thoroughly test the new store before launch.`,
  },
  {
    id: "accordion-panel-5",
    title: "What ongoing support do you provide after my Shopify store launches?",
    content: `We offer comprehensive maintenance packages that include regular theme updates, security monitoring, performance optimization, content updates, and technical support. Our team remains available to implement new features, troubleshoot issues, and provide strategic guidance as your e-commerce business grows and evolves.`,
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

