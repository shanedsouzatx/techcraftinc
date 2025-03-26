"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "seo" | "blogging" | "ecommerce" | "technical" | "branding"

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
  type TabKey = "ppc_strategy" | "campaign_management" | "ad_creation" | "conversion_optimization" | "analytics_reporting"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("ppc_strategy")

  const tabData: TabDataMap = {
    ppc_strategy: {
      title: "Strategic PPC Planning",
      description:
        "Develop data-driven paid search strategies that maximize visibility and ROI across search engines and platforms.",
      technologies: [
        {
          name: "Keyword Research & Analysis",
          icon: "/services/keyword-research.svg",
          description: "Identify high-converting keywords with optimal cost-per-click and search volume.",
        },
        {
          name: "Competitor PPC Analysis",
          icon: "/services/semantic-seo.svg",
          description: "Analyze competitor ad strategies to identify opportunities and optimize spend.",
        },
        {
          name: "Budget Allocation",
          icon: "/services/intent-optimization.svg",
          description: "Strategic distribution of ad spend across campaigns, platforms, and audience segments.",
        },
        {
          name: "Campaign Structure Planning",
          icon: "/services/competitor-gap.svg",
          description: "Design logical, scalable campaign architectures for maximum performance.",
        },
        {
          name: "Bidding Strategy Development",
          icon: "/services/longtail-keywords.svg",
          description: "Create custom bidding approaches based on goals, competition, and platform dynamics.",
        },
      ],
    },
    campaign_management: {
      title: "Campaign Management & Optimization",
      description:
        "Execute and continuously refine paid search campaigns to improve performance and reduce wasted ad spend.",
      technologies: [
        {
          name: "Google Ads Management",
          icon: "/services/seo-blog.svg",
          description: "Expert management of search, display, shopping, and video campaigns on Google.",
        },
        {
          name: "Microsoft Ads Optimization",
          icon: "/services/meta-tags.svg",
          description: "Leverage Bing, Yahoo, and partner networks for additional qualified traffic.",
        },
        {
          name: "Bid Management & Adjustments",
          icon: "/services/headings.svg",
          description: "Implement device, location, audience, and time-based bid adjustments for better ROI.",
        },
        {
          name: "Quality Score Improvement",
          icon: "/services/internal-links.svg",
          description: "Enhance ad relevance and landing page experience to lower costs and improve ad position.",
        },
        {
          name: "Negative Keyword Management",
          icon: "/services/content-refresh.svg",
          description: "Continuously refine campaigns by eliminating irrelevant search terms and wasted spend.",
        },
      ],
    },
    ad_creation: {
      title: "Ad Creative & Copy Development",
      description:
        "Craft compelling ad copy and creative assets that capture attention, drive clicks, and improve conversion rates.",
      technologies: [
        {
          name: "Responsive Search Ads",
          icon: "/services/guest-posting.svg",
          description: "Create flexible, high-performing ads that adapt to maximize relevance for each search.",
        },
        {
          name: "Ad Extension Strategy",
          icon: "/services/link-worthy-content.svg",
          description: "Implement sitelinks, callouts, structured snippets, and other extensions to enhance visibility.",
        },
        {
          name: "Display & Video Creative",
          icon: "/services/skyscraper.svg",
          description: "Design attention-grabbing visual assets that communicate value and drive engagement.",
        },
        {
          name: "A/B Testing Framework",
          icon: "/services/broken-link.svg",
          description: "Systematically test ad variations to identify top-performing messages and creative elements.",
        },
        {
          name: "Ad Copy Optimization",
          icon: "/services/resource-page.svg",
          description: "Refine messaging based on performance data to improve CTR and conversion rates.",
        },
      ],
    },
    conversion_optimization: {
      title: "Conversion Rate Optimization",
      description:
        "Maximize the value of paid traffic by optimizing landing pages and conversion paths for better results.",
      technologies: [
        {
          name: "Landing Page Design",
          icon: "/services/content-calendar.svg",
          description: "Create high-converting landing pages aligned with ad messaging and user intent.",
        },
        {
          name: "Conversion Tracking Setup",
          icon: "/services/topic-clusters.svg",
          description: "Implement comprehensive tracking for leads, sales, and micro-conversions across platforms.",
        },
        {
          name: "User Experience Optimization",
          icon: "/services/competitive-analysis.svg",
          description: "Enhance page speed, mobile experience, and navigation to improve conversion rates.",
        },
        {
          name: "Form & CTA Optimization",
          icon: "/services/evergreen-content.svg",
          description: "Refine forms and calls-to-action to reduce friction and increase completion rates.",
        },
        {
          name: "Conversion Path Analysis",
          icon: "/services/content-distribution.svg",
          description: "Identify and eliminate bottlenecks in the conversion process to maximize results.",
        },
      ],
    },
    analytics_reporting: {
      title: "Analytics & Performance Reporting",
      description:
        "Gain actionable insights through comprehensive tracking, analysis, and reporting of campaign performance.",
      technologies: [
        {
          name: "Custom Dashboard Creation",
          icon: "/services/page-speed.svg",
          description: "Build tailored dashboards that visualize key metrics and performance indicators.",
        },
        {
          name: "Attribution Modeling",
          icon: "/services/mobile-seo.svg",
          description: "Implement multi-touch attribution to understand the full customer journey and touchpoints.",
        },
        {
          name: "ROI & ROAS Analysis",
          icon: "/services/schema.svg",
          description: "Calculate and optimize return on investment and return on ad spend across campaigns.",
        },
        {
          name: "Competitive Benchmarking",
          icon: "/services/core-web-vitals.svg",
          description: "Compare performance against industry standards and direct competitors.",
        },
        {
          name: "Forecasting & Trend Analysis",
          icon: "/services/crawlability.svg",
          description: "Predict future performance and identify emerging opportunities based on historical data.",
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
  Drive Targeted Traffic & Conversions with <br/> Search Engine Marketing
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Maximize your online visibility and ROI with strategic paid search campaigns that deliver qualified traffic and measurable results. Our comprehensive SEM services combine data-driven strategy, compelling ad creative, and continuous optimization.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="ppc_strategy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="ppc_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              PPC Strategy
            </TabsTrigger>
            <TabsTrigger
              value="campaign_management"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Campaign Management
            </TabsTrigger>
            <TabsTrigger
              value="ad_creation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Ad Creation
            </TabsTrigger>
            <TabsTrigger
              value="conversion_optimization"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Conversion Optimization
            </TabsTrigger>
            <TabsTrigger
              value="analytics_reporting"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Analytics & Reporting
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

