"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "themes" | "plugins" | "ecommerce" | "performance" | "security"

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
  type TabKey = "theme_development" | "plugin_integration" | "ecommerce_solutions" | "performance_optimization" | "security_maintenance"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("theme_development")

  const tabData: TabDataMap = {
    theme_development: {
      title: "Custom Theme Development",
      description:
        "Create unique, branded WordPress websites with custom themes that perfectly match your business identity and requirements.",
      technologies: [
        {
          name: "Responsive Design",
          icon: "/services/keyword-research.svg",
          description: "Build websites that look and function perfectly on all devices and screen sizes.",
        },
        {
          name: "Custom Templates",
          icon: "/services/semantic-seo.svg",
          description: "Develop specialized page templates tailored to your specific content needs.",
        },
        {
          name: "Theme Customization",
          icon: "/services/intent-optimization.svg",
          description: "Modify premium themes to match your brand while maintaining built-in functionality.",
        },
        {
          name: "Child Themes",
          icon: "/services/competitor-gap.svg",
          description: "Create child themes for safe customization that survives parent theme updates.",
        },
        {
          name: "Gutenberg Blocks",
          icon: "/services/longtail-keywords.svg",
          description: "Build custom blocks for the WordPress editor to enhance content creation.",
        },
      ],
    },
    plugin_integration: {
      title: "Plugin Development & Integration",
      description:
        "Extend WordPress functionality with custom plugins and seamless integration of third-party solutions.",
      technologies: [
        {
          name: "Custom Plugin Development",
          icon: "/services/seo-blog.svg",
          description: "Create bespoke plugins that add specific functionality to your WordPress site.",
        },
        {
          name: "API Integrations",
          icon: "/services/meta-tags.svg",
          description: "Connect WordPress with external services and applications via APIs.",
        },
        {
          name: "Form Solutions",
          icon: "/services/headings.svg",
          description: "Implement advanced contact forms, surveys, and user input collection tools.",
        },
        {
          name: "SEO Optimization",
          icon: "/services/internal-links.svg",
          description: "Integrate and configure SEO tools for better search engine visibility.",
        },
        {
          name: "Social Media Integration",
          icon: "/services/content-refresh.svg",
          description: "Connect your WordPress site with social platforms for sharing and engagement.",
        },
      ],
    },
    ecommerce_solutions: {
      title: "WordPress E-Commerce",
      description:
        "Transform your WordPress site into a powerful online store with WooCommerce and custom e-commerce solutions.",
      technologies: [
        {
          name: "WooCommerce Setup",
          icon: "/services/guest-posting.svg",
          description: "Configure WordPress's leading e-commerce platform for your online store.",
        },
        {
          name: "Payment Gateways",
          icon: "/services/link-worthy-content.svg",
          description: "Integrate secure payment processing options for seamless transactions.",
        },
        {
          name: "Product Catalogs",
          icon: "/services/skyscraper.svg",
          description: "Create attractive, organized product displays with filtering and search.",
        },
        {
          name: "Shipping Integration",
          icon: "/services/broken-link.svg",
          description: "Set up shipping calculations, labels, and tracking for physical products.",
        },
        {
          name: "Subscription Systems",
          icon: "/services/resource-page.svg",
          description: "Implement recurring payment models for subscription-based businesses.",
        },
      ],
    },
    performance_optimization: {
      title: "Speed & Performance",
      description:
        "Optimize your WordPress site for lightning-fast loading times and smooth user experience across all devices.",
      technologies: [
        {
          name: "Caching Solutions",
          icon: "/services/content-calendar.svg",
          description: "Implement advanced caching to dramatically improve page load times.",
        },
        {
          name: "Image Optimization",
          icon: "/services/topic-clusters.svg",
          description: "Compress and serve optimized images for faster loading without quality loss.",
        },
        {
          name: "Database Optimization",
          icon: "/services/competitive-analysis.svg",
          description: "Clean and optimize WordPress databases for improved performance.",
        },
        {
          name: "CDN Integration",
          icon: "/services/evergreen-content.svg",
          description: "Set up content delivery networks for faster global access to your site.",
        },
        {
          name: "Core Web Vitals",
          icon: "/services/content-distribution.svg",
          description: "Optimize for Google's performance metrics to improve SEO and user experience.",
        },
      ],
    },
    security_maintenance: {
      title: "Security & Maintenance",
      description:
        "Protect your WordPress website from threats and keep it running smoothly with comprehensive security and maintenance.",
      technologies: [
        {
          name: "Security Hardening",
          icon: "/services/page-speed.svg",
          description: "Implement multiple layers of protection against common WordPress vulnerabilities.",
        },
        {
          name: "Backup Solutions",
          icon: "/services/mobile-seo.svg",
          description: "Set up automated backup systems to protect against data loss.",
        },
        {
          name: "Updates Management",
          icon: "/services/schema.svg",
          description: "Keep WordPress core, themes, and plugins updated for security and compatibility.",
        },
        {
          name: "Malware Scanning",
          icon: "/services/core-web-vitals.svg",
          description: "Implement regular security scans to detect and remove malicious code.",
        },
        {
          name: "SSL Implementation",
          icon: "/services/crawlability.svg",
          description: "Secure your site with HTTPS encryption for data protection and SEO benefits.",
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
  Create a Powerful Online Presence with <br/> WordPress Development
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Build a professional, feature-rich WordPress website that perfectly represents your brand and drives business results. Our expert WordPress development services combine stunning design with powerful functionality to create websites that stand out from the competition.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="theme_development"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="theme_development"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Theme Development
            </TabsTrigger>
            <TabsTrigger
              value="plugin_integration"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Plugin Integration
            </TabsTrigger>
            <TabsTrigger
              value="ecommerce_solutions"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              E-Commerce
            </TabsTrigger>
            <TabsTrigger
              value="performance_optimization"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger
              value="security_maintenance"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Security
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

