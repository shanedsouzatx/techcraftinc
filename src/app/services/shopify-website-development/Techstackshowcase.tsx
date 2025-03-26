"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "themes" | "customization" | "ecommerce" | "apps" | "optimization"

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
  type TabKey = "store_design" | "custom_development" | "ecommerce_features" | "app_integration" | "performance_optimization"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("store_design")

  const tabData: TabDataMap = {
    store_design: {
      title: "Shopify Store Design",
      description:
        "Create visually stunning Shopify stores with custom designs that reflect your brand identity and drive conversions.",
      technologies: [
        {
          name: "Custom Theme Development",
          icon: "/services/keyword-research.svg",
          description: "Build unique Shopify themes tailored to your brand's specific requirements.",
        },
        {
          name: "Responsive Design",
          icon: "/services/semantic-seo.svg",
          description: "Ensure your store looks and functions perfectly across all devices and screen sizes.",
        },
        {
          name: "UI/UX Optimization",
          icon: "/services/intent-optimization.svg",
          description: "Create intuitive shopping experiences that guide customers to purchase.",
        },
        {
          name: "Theme Customization",
          icon: "/services/competitor-gap.svg",
          description: "Modify premium Shopify themes to match your brand while maintaining functionality.",
        },
        {
          name: "Visual Merchandising",
          icon: "/services/longtail-keywords.svg",
          description: "Showcase products effectively with strategic layout and presentation techniques.",
        },
      ],
    },
    custom_development: {
      title: "Custom Shopify Development",
      description:
        "Extend Shopify's capabilities with custom development solutions that address your unique business requirements.",
      technologies: [
        {
          name: "Custom Functionality",
          icon: "/services/seo-blog.svg",
          description: "Develop bespoke features that go beyond Shopify's standard offerings.",
        },
        {
          name: "Liquid Programming",
          icon: "/services/meta-tags.svg",
          description: "Utilize Shopify's template language for advanced customization and functionality.",
        },
        {
          name: "API Integrations",
          icon: "/services/headings.svg",
          description: "Connect your Shopify store with external services and applications via APIs.",
        },
        {
          name: "Custom Checkout Process",
          icon: "/services/internal-links.svg",
          description: "Create streamlined checkout experiences that reduce abandonment and increase conversions.",
        },
        {
          name: "Headless Commerce",
          icon: "/services/content-refresh.svg",
          description: "Implement advanced frontend solutions while leveraging Shopify's backend capabilities.",
        },
      ],
    },
    ecommerce_features: {
      title: "E-Commerce Functionality",
      description:
        "Implement powerful e-commerce features that enhance the shopping experience and drive sales growth.",
      technologies: [
        {
          name: "Product Catalog Management",
          icon: "/services/guest-posting.svg",
          description: "Create organized, searchable product collections with advanced filtering options.",
        },
        {
          name: "Payment Gateway Integration",
          icon: "/services/link-worthy-content.svg",
          description: "Set up secure payment processing with multiple payment options for customers.",
        },
        {
          name: "Inventory Management",
          icon: "/services/skyscraper.svg",
          description: "Implement automated stock tracking and low inventory alerts across sales channels.",
        },
        {
          name: "Shipping & Fulfillment",
          icon: "/services/broken-link.svg",
          description: "Configure shipping rates, labels, tracking, and fulfillment processes.",
        },
        {
          name: "Subscription & Recurring Orders",
          icon: "/services/resource-page.svg",
          description: "Set up subscription-based products and recurring billing for repeat customers.",
        },
      ],
    },
    app_integration: {
      title: "Shopify App Integration",
      description:
        "Enhance your store's functionality with carefully selected Shopify apps and seamless integrations.",
      technologies: [
        {
          name: "Marketing Automation",
          icon: "/services/content-calendar.svg",
          description: "Integrate email marketing, SMS, and customer retention tools for automated campaigns.",
        },
        {
          name: "Customer Support Tools",
          icon: "/services/topic-clusters.svg",
          description: "Implement live chat, help desk, and customer service applications for better support.",
        },
        {
          name: "Analytics & Reporting",
          icon: "/services/competitive-analysis.svg",
          description: "Set up advanced tracking and reporting tools for data-driven decision making.",
        },
        {
          name: "Social Media Integration",
          icon: "/services/evergreen-content.svg",
          description: "Connect your store with social platforms for seamless selling and sharing.",
        },
        {
          name: "Loyalty & Rewards Programs",
          icon: "/services/content-distribution.svg",
          description: "Implement customer loyalty solutions to encourage repeat purchases and referrals.",
        },
      ],
    },
    performance_optimization: {
      title: "Store Optimization & Growth",
      description:
        "Maximize your Shopify store's performance, conversion rates, and search visibility for sustainable growth.",
      technologies: [
        {
          name: "Speed Optimization",
          icon: "/services/page-speed.svg",
          description: "Enhance store performance with faster loading times and improved user experience.",
        },
        {
          name: "SEO for Shopify",
          icon: "/services/mobile-seo.svg",
          description: "Optimize product pages, collections, and content for better search engine visibility.",
        },
        {
          name: "Conversion Rate Optimization",
          icon: "/services/schema.svg",
          description: "Implement data-driven strategies to increase your store's conversion rates.",
        },
        {
          name: "Mobile Commerce Optimization",
          icon: "/services/core-web-vitals.svg",
          description: "Ensure seamless shopping experiences for the growing mobile customer base.",
        },
        {
          name: "Multi-Channel Selling",
          icon: "/services/crawlability.svg",
          description: "Expand your reach by connecting Shopify with marketplaces and social selling channels.",
        },
      ],
    },
  };
  
  

  return (
    <div className=" bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">

    <div className="container mx-auto py-12 px-4 ">
      <div className="gap-16 mb-3 ">
      <div>
  <h1 className="text-4xl text-center md:text-5xl font-bold  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  leading-tight uppercase">
  Build a Powerful E-Commerce Store with <br/> Shopify Development
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Create a professional, high-converting Shopify store that drives sales and delivers exceptional shopping experiences. Our expert Shopify development services combine stunning design with powerful functionality to help your e-commerce business thrive.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="store_design"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="store_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Store Design
            </TabsTrigger>
            <TabsTrigger
              value="custom_development"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Custom Development
            </TabsTrigger>
            <TabsTrigger
              value="ecommerce_features"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              E-Commerce Features
            </TabsTrigger>
            <TabsTrigger
              value="app_integration"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              App Integration
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

