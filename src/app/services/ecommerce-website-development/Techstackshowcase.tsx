"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "platforms" | "design" | "features" | "payment" | "optimization"

// Define the structure of a technology item
interface Technology {
  name: string
  icon: string
  description: string
}

// Define the structure of tab data
interface TabData {
  title: string
  description: string
  technologies: Technology[]
}

// Define the structure of all tab data
interface TabDataMap {
  [key: string]: TabData
}

export default function TechStackShowcase() {
  // Update the TabKey type to match the actual keys in tabData
  type TabKey = "ecommerce_platforms" | "store_design" | "core_features" | "payment_shipping" | "performance_optimization"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("ecommerce_platforms")

  const tabData: TabDataMap = {
    ecommerce_platforms: {
      title: "E-Commerce Platforms",
      description:
        "Choose the perfect platform for your online store. We develop on multiple e-commerce platforms to match your specific business needs and goals.",
      technologies: [
        {
          name: "Shopify",
          icon: "/services/keyword-research.svg",
          description: "Build scalable, feature-rich stores with the leading hosted e-commerce platform.",
        },
        {
          name: "WooCommerce",
          icon: "/services/semantic-seo.svg",
          description: "Create flexible WordPress-based online stores with unlimited customization options.",
        },
        {
          name: "Magento",
          icon: "/services/intent-optimization.svg",
          description: "Develop enterprise-grade stores with advanced features for large-scale operations.",
        },
        {
          name: "BigCommerce",
          icon: "/services/competitor-gap.svg",
          description: "Build SEO-friendly stores with robust built-in features and multi-channel selling.",
        },
        {
          name: "Custom Solutions",
          icon: "/services/longtail-keywords.svg",
          description: "Create bespoke e-commerce applications tailored to unique business requirements.",
        },
      ],
    },
    store_design: {
      title: "Store Design & User Experience",
      description:
        "Create visually stunning online stores with intuitive navigation and seamless shopping experiences that drive conversions.",
      technologies: [
        {
          name: "Responsive Design",
          icon: "/services/seo-blog.svg",
          description: "Ensure perfect functionality across all devices and screen sizes for maximum reach.",
        },
        {
          name: "UI/UX Optimization",
          icon: "/services/meta-tags.svg",
          description: "Create intuitive shopping experiences that guide customers to purchase completion.",
        },
        {
          name: "Custom Theme Development",
          icon: "/services/headings.svg",
          description: "Build unique store designs that perfectly reflect your brand identity and values.",
        },
        {
          name: "Product Showcase",
          icon: "/services/internal-links.svg",
          description: "Implement effective product displays with high-quality images and compelling descriptions.",
        },
        {
          name: "Conversion-Focused Design",
          icon: "/services/content-refresh.svg",
          description: "Optimize store layouts and elements to maximize conversion rates and sales.",
        },
      ],
    },
    core_features: {
      title: "E-Commerce Functionality",
      description:
        "Implement powerful features that enhance the shopping experience, streamline operations, and drive business growth.",
      technologies: [
        {
          name: "Product Management",
          icon: "/services/guest-posting.svg",
          description: "Create flexible catalog systems with advanced categorization and filtering options.",
        },
        {
          name: "Shopping Cart & Checkout",
          icon: "/services/link-worthy-content.svg",
          description: "Develop streamlined checkout processes that minimize abandonment and maximize conversions.",
        },
        {
          name: "Customer Accounts",
          icon: "/services/skyscraper.svg",
          description: "Implement user registration, profiles, wishlists, and order history tracking.",
        },
        {
          name: "Inventory Management",
          icon: "/services/broken-link.svg",
          description: "Set up automated stock tracking, low inventory alerts, and multi-location support.",
        },
        {
          name: "Search & Navigation",
          icon: "/services/resource-page.svg",
          description: "Implement advanced search functionality with filters, suggestions, and smart results.",
        },
      ],
    },
    payment_shipping: {
      title: "Payment & Shipping Solutions",
      description:
        "Integrate secure payment processing and efficient shipping options to provide a seamless checkout experience.",
      technologies: [
        {
          name: "Payment Gateways",
          icon: "/services/content-calendar.svg",
          description: "Integrate multiple payment options including credit cards, PayPal, Apple Pay, and more.",
        },
        {
          name: "Shipping Integrations",
          icon: "/services/topic-clusters.svg",
          description: "Configure real-time shipping rates, label printing, and tracking with major carriers.",
        },
        {
          name: "Tax Calculation",
          icon: "/services/competitive-analysis.svg",
          description: "Implement automated tax calculations for domestic and international transactions.",
        },
        {
          name: "Subscription Billing",
          icon: "/services/evergreen-content.svg",
          description: "Set up recurring payment systems for subscription-based products and services.",
        },
        {
          name: "Multi-Currency Support",
          icon: "/services/content-distribution.svg",
          description: "Enable international selling with multiple currencies and localized payment methods.",
        },
      ],
    },
    performance_optimization: {
      title: "Store Optimization & Growth",
      description:
        "Maximize your online store's performance, conversion rates, and search visibility for sustainable business growth.",
      technologies: [
        {
          name: "Speed Optimization",
          icon: "/services/page-speed.svg",
          description: "Enhance store performance with faster loading times for better user experience and SEO.",
        },
        {
          name: "E-Commerce SEO",
          icon: "/services/mobile-seo.svg",
          description: "Optimize product pages, categories, and content for better search engine visibility.",
        },
        {
          name: "Analytics & Reporting",
          icon: "/services/schema.svg",
          description: "Implement tracking tools to monitor performance and make data-driven decisions.",
        },
        {
          name: "Mobile Commerce",
          icon: "/services/core-web-vitals.svg",
          description: "Optimize the mobile shopping experience for the growing smartphone user base.",
        },
        {
          name: "Multi-Channel Selling",
          icon: "/services/crawlability.svg",
          description: "Expand your reach by connecting your store with marketplaces and social platforms.",
        },
      ],
    },
  };
  
  

  return (
    <div className=" bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">

    <div className="container mx-auto py-12 px-4 ">
      <div className="gap-8 mb-3 ">
      <div>
  <h1 className="text-4xl text-center md:text-5xl font-bold  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  leading-tight uppercase">
  Transform Your Business with Custom <br/> E-Commerce Solutions
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Create a powerful online store that drives sales and delivers exceptional shopping experiences. Our expert e-commerce development services combine stunning design with robust functionality to help your business thrive in the digital marketplace.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="ecommerce_platforms"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="ecommerce_platforms"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Platforms
            </TabsTrigger>
            <TabsTrigger
              value="store_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Store Design
            </TabsTrigger>
            <TabsTrigger
              value="core_features"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Core Features
            </TabsTrigger>
            <TabsTrigger
              value="payment_shipping"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Payment & Shipping
            </TabsTrigger>
            <TabsTrigger
              value="performance_optimization"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Optimization
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black  mb-6">{tabData[activeTab].title}</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">{tabData[activeTab].description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-11 ">
              {tabData[activeTab].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <motion.div
                    className="relative w-28 h-28 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 overflow-hidden transition-all duration-300 group-hover:shadow-md"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} 
                    width={100}
                    height={100}
                    className="w-[100%] h-[100%] object-contain !p-0 !m-0 " />
                  </motion.div>
                  <h3 className="text-md font-medium text-[#221E46] text-center">{tech.name}</h3>
                  <div className="mt-2  group-hover:scale-105 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                    <p className="text-base text-slate-600 text-center px-2">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
    </div>
  )
}

