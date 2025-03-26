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
  TRANSFORM YOUR BUSINESS WITH CUSTOM E-COMMERCE SOLUTIONS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital marketplace, a powerful e-commerce website is essential for selling products online and growing your business.  
  Simply having a basic online store isn't enough—your e-commerce presence needs to be visually appealing, user-friendly, and optimized for conversions.  
  At Tech Craft, we specialize in creating custom e-commerce websites that enhance your brand image, improve customer experience, and drive sales growth.  
  Through expert design, development, and optimization, we ensure your online store not only looks stunning but also converts visitors into loyal customers.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S E-COMMERCE DEVELOPMENT SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What e-commerce platforms do you work with?",
    content: `We develop e-commerce solutions on multiple platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions. Our team evaluates your specific business needs, product complexity, budget, and growth plans to recommend the most suitable platform for your online store.`,
  },
  {
    id: "accordion-panel-2",
    title: "How do you optimize e-commerce websites for conversions?",
    content: `We implement conversion-focused design principles with clear product displays, streamlined checkout processes, and trust-building elements. Our optimization strategy includes persuasive product descriptions, high-quality images, effective upsell/cross-sell opportunities, mobile optimization, and strategic placement of calls-to-action to maximize your conversion rates.`,
  },
  {
    id: "accordion-panel-3",
    title: "What payment and shipping integrations do you offer?",
    content: `We integrate a wide range of payment gateways including PayPal, Stripe, Square, Authorize.net, and many others to provide your customers with flexible payment options. For shipping, we configure real-time shipping calculations, label printing, tracking systems, and can integrate with major carriers like UPS, FedEx, USPS, and DHL.`,
  },
  {
    id: "accordion-panel-4",
    title: "Can you create a multi-vendor marketplace?",
    content: `Yes, we specialize in developing multi-vendor marketplaces that allow multiple sellers to list products on your platform. These solutions include vendor registration, product management, commission systems, separate vendor dashboards, and secure payment distribution. We can build custom marketplaces or implement solutions on platforms like WooCommerce or Magento.`,
  },
  {
    id: "accordion-panel-5",
    title: "What ongoing support do you provide after launch?",
    content: `We offer comprehensive maintenance packages that include regular platform updates, security monitoring, performance optimization, content updates, and technical support. Our team remains available to implement new features, troubleshoot issues, and provide strategic guidance as your e-commerce business grows and evolves.`,
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

