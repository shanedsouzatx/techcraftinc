"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

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
  // Define the tab types specific to SEO
  type TabKey = "on_page_seo" | "off_page_seo" | "technical_seo" | "local_seo" | "analytics_reporting"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("on_page_seo")

  const tabData: TabDataMap = {
    on_page_seo: {
      title: "On-Page SEO Optimization",
      description:
        "Optimize your website's content and structure to improve search visibility and user experience.",
      technologies: [
        {
          name: "Keyword Research & Strategy",
          icon: "/services/keyword-research.svg",
          description: "Identify high-value keywords with optimal search volume and competition levels.",
        },
        {
          name: "Content Optimization",
          icon: "/services/semantic-seo.svg",
          description: "Enhance existing content with strategic keyword placement and semantic relevance.",
        },
        {
          name: "Meta Tag Optimization",
          icon: "/services/meta-tags.svg",
          description: "Craft compelling titles and descriptions that improve click-through rates from search results.",
        },
        {
          name: "Internal Linking Structure",
          icon: "/services/internal-links.svg",
          description: "Build strategic internal links to distribute page authority and improve site navigation.",
        },
        {
          name: "User Experience Signals",
          icon: "/services/intent-optimization.svg",
          description: "Optimize for engagement metrics that influence rankings like dwell time and bounce rate.",
        },
      ],
    },
    off_page_seo: {
      title: "Off-Page SEO & Link Building",
      description:
        "Build your site's authority and reputation through strategic backlink acquisition and brand mentions.",
      technologies: [
        {
          name: "Authority Link Building",
          icon: "/services/link-worthy-content.svg",
          description: "Earn high-quality backlinks from authoritative websites in your industry.",
        },
        {
          name: "Digital PR Strategies",
          icon: "/services/guest-posting.svg",
          description: "Gain brand mentions and links through strategic digital public relations campaigns.",
        },
        {
          name: "Content Outreach",
          icon: "/services/resource-page.svg",
          description: "Promote valuable content to relevant websites and influencers for natural link acquisition.",
        },
        {
          name: "Competitor Backlink Analysis",
          icon: "/services/competitor-gap.svg",
          description: "Identify and target valuable link opportunities your competitors have already secured.",
        },
        {
          name: "Brand Mention Monitoring",
          icon: "/services/broken-link.svg",
          description: "Track and convert unlinked brand mentions into valuable backlinks.",
        },
      ],
    },
    technical_seo: {
      title: "Technical SEO Implementation",
      description:
        "Resolve technical issues that prevent search engines from properly crawling, indexing, and ranking your site.",
      technologies: [
        {
          name: "Site Architecture Optimization",
          icon: "/services/crawlability.svg",
          description: "Improve your website's structure for better crawling efficiency and indexation.",
        },
        {
          name: "Page Speed Optimization",
          icon: "/services/page-speed.svg",
          description: "Enhance loading times to improve both user experience and search rankings.",
        },
        {
          name: "Mobile Optimization",
          icon: "/services/mobile-seo.svg",
          description: "Ensure your site performs flawlessly on all devices with mobile-first indexing.",
        },
        {
          name: "Schema Markup Implementation",
          icon: "/services/schema.svg",
          description: "Add structured data to help search engines understand your content and display rich snippets.",
        },
        {
          name: "Core Web Vitals Improvement",
          icon: "/services/core-web-vitals.svg",
          description: "Optimize key performance metrics that directly impact search rankings and user experience.",
        },
      ],
    },
    local_seo: {
      title: "Local SEO & Business Visibility",
      description:
        "Increase visibility in local search results to attract nearby customers and drive foot traffic.",
      technologies: [
        {
          name: "Google Business Profile Optimization",
          icon: "/services/content-calendar.svg",
          description: "Optimize your business listing to appear in local searches and Google Maps.",
        },
        {
          name: "Local Citation Building",
          icon: "/services/topic-clusters.svg",
          description: "Create consistent business listings across directories to strengthen local presence.",
        },
        {
          name: "Review Management",
          icon: "/services/competitive-analysis.svg",
          description: "Generate and manage customer reviews to improve local rankings and reputation.",
        },
        {
          name: "Local Content Strategy",
          icon: "/services/evergreen-content.svg",
          description: "Create location-specific content that resonates with local audiences and search queries.",
        },
        {
          name: "Local Link Building",
          icon: "/services/content-distribution.svg",
          description: "Acquire backlinks from local organizations and businesses to boost local relevance.",
        },
      ],
    },
    analytics_reporting: {
      title: "SEO Analytics & Reporting",
      description:
        "Track, measure, and analyze your SEO performance to demonstrate ROI and guide ongoing strategy.",
      technologies: [
        {
          name: "Keyword Ranking Tracking",
          icon: "/services/longtail-keywords.svg",
          description: "Monitor your positions for target keywords and track improvements over time.",
        },
        {
          name: "Traffic Analysis",
          icon: "/services/seo-blog.svg",
          description: "Analyze organic traffic patterns, user behavior, and conversion pathways.",
        },
        {
          name: "Competitor Performance Tracking",
          icon: "/services/skyscraper.svg",
          description: "Benchmark your SEO performance against competitors to identify opportunities.",
        },
        {
          name: "Conversion Rate Optimization",
          icon: "/services/headings.svg",
          description: "Improve how effectively your organic traffic converts into leads and customers.",
        },
        {
          name: "Custom SEO Reporting",
          icon: "/services/content-refresh.svg",
          description: "Receive clear, actionable reports that demonstrate progress and guide strategy.",
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
  Dominate Search Results with Strategic <br/> Search Engine Optimization
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Increase your website's visibility and drive qualified traffic with our comprehensive SEO services. We combine technical expertise, content optimization, and strategic link building to help your business achieve sustainable rankings and measurable results.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="on_page_seo"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="on_page_seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              On-Page SEO
            </TabsTrigger>
            <TabsTrigger
              value="off_page_seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Off-Page SEO
            </TabsTrigger>
            <TabsTrigger
              value="technical_seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Technical SEO
            </TabsTrigger>
            <TabsTrigger
              value="local_seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Local SEO
            </TabsTrigger>
            <TabsTrigger
              value="analytics_reporting"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Analytics
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

