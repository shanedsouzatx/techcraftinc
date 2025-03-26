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
  type TabKey = "platform_strategy" | "content_creation" | "community_management" | "paid_advertising" | "analytics"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("platform_strategy")

  const tabData: TabDataMap = {
    platform_strategy: {
      title: "Platform Strategy & Optimization",
      description:
        "Develop tailored strategies for each social platform that align with your business goals and target audience behaviors.",
      technologies: [
        {
          name: "Platform Selection",
          icon: "/services/keyword-research.svg",
          description: "Identify the most effective platforms for your specific audience and business objectives.",
        },
        {
          name: "Profile Optimization",
          icon: "/services/semantic-seo.svg",
          description: "Optimize social profiles with strategic keywords, compelling visuals, and clear CTAs.",
        },
        {
          name: "Audience Targeting",
          icon: "/services/intent-optimization.svg",
          description: "Define and reach your ideal audience segments based on demographics, interests, and behaviors.",
        },
        {
          name: "Competitive Analysis",
          icon: "/services/competitor-gap.svg",
          description: "Analyze competitor strategies to identify opportunities and differentiate your approach.",
        },
        {
          name: "Cross-Platform Integration",
          icon: "/services/longtail-keywords.svg",
          description: "Create cohesive experiences across multiple platforms while respecting each platform's unique environment.",
        },
      ],
    },
    content_creation: {
      title: "Content Creation & Curation",
      description:
        "Produce engaging, platform-optimized content that resonates with your audience and drives meaningful engagement.",
      technologies: [
        {
          name: "Visual Content Design",
          icon: "/services/seo-blog.svg",
          description: "Create eye-catching graphics, videos, and animations optimized for each social platform.",
        },
        {
          name: "Content Calendar Management",
          icon: "/services/meta-tags.svg",
          description: "Develop and maintain strategic posting schedules that maximize reach and engagement.",
        },
        {
          name: "Trending Content Adaptation",
          icon: "/services/headings.svg",
          description: "Quickly capitalize on trending topics and formats while maintaining brand relevance.",
        },
        {
          name: "User-Generated Content",
          icon: "/services/internal-links.svg",
          description: "Leverage and amplify authentic content created by your customers and community.",
        },
        {
          name: "Content Repurposing",
          icon: "/services/content-refresh.svg",
          description: "Transform existing content into multiple formats optimized for different platforms and audiences.",
        },
      ],
    },
    community_management: {
      title: "Community Management & Engagement",
      description:
        "Build active, loyal communities through consistent engagement, relationship building, and authentic interactions.",
      technologies: [
        {
          name: "Response Management",
          icon: "/services/guest-posting.svg",
          description: "Provide timely, helpful responses to comments, messages, and mentions across platforms.",
        },
        {
          name: "Community Building",
          icon: "/services/link-worthy-content.svg",
          description: "Foster connections between followers and create a sense of belonging around your brand.",
        },
        {
          name: "Crisis Management",
          icon: "/services/skyscraper.svg",
          description: "Develop protocols for addressing negative feedback and managing potential PR issues.",
        },
        {
          name: "Influencer Relationships",
          icon: "/services/broken-link.svg",
          description: "Identify and collaborate with relevant influencers to expand reach and build credibility.",
        },
        {
          name: "Social Listening",
          icon: "/services/resource-page.svg",
          description: "Monitor conversations about your brand and industry to identify opportunities and issues.",
        },
      ],
    },
    paid_advertising: {
      title: "Paid Social Advertising",
      description:
        "Maximize ROI through strategic paid campaigns that target the right audiences with compelling creative and messaging.",
      technologies: [
        {
          name: "Ad Campaign Strategy",
          icon: "/services/content-calendar.svg",
          description: "Develop targeted campaigns with clear objectives, audience segments, and conversion paths.",
        },
        {
          name: "Creative Development",
          icon: "/services/topic-clusters.svg",
          description: "Design high-performing ad creative that captures attention and drives action.",
        },
        {
          name: "Audience Targeting",
          icon: "/services/competitive-analysis.svg",
          description: "Leverage platform targeting capabilities to reach specific demographics, interests, and behaviors.",
        },
        {
          name: "A/B Testing",
          icon: "/services/evergreen-content.svg",
          description: "Continuously test and optimize ad elements to improve performance and reduce costs.",
        },
        {
          name: "Retargeting Campaigns",
          icon: "/services/content-distribution.svg",
          description: "Re-engage website visitors and potential customers with strategic follow-up messaging.",
        },
      ],
    },
    analytics: {
      title: "Analytics & Performance Optimization",
      description:
        "Track, analyze, and optimize your social media performance to continuously improve results and demonstrate ROI.",
      technologies: [
        {
          name: "KPI Tracking",
          icon: "/services/page-speed.svg",
          description: "Monitor key performance indicators aligned with your specific business objectives.",
        },
        {
          name: "Engagement Analysis",
          icon: "/services/mobile-seo.svg",
          description: "Analyze which content types and topics generate the most meaningful audience interactions.",
        },
        {
          name: "Conversion Tracking",
          icon: "/services/schema.svg",
          description: "Measure how social media activities contribute to leads, sales, and other business outcomes.",
        },
        {
          name: "Competitive Benchmarking",
          icon: "/services/core-web-vitals.svg",
          description: "Compare your performance against competitors to identify opportunities and set realistic goals.",
        },
        {
          name: "ROI Reporting",
          icon: "/services/crawlability.svg",
          description: "Create comprehensive reports that demonstrate the business value of your social media efforts.",
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
  Elevate Your Brand with Strategic <br/> Social Media Marketing
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Build meaningful connections with your audience through strategic social media marketing that drives engagement, increases brand awareness, and generates measurable results. Our expert team creates platform-specific strategies that transform followers into loyal customers.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="platform_strategy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="platform_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Platform Strategy
            </TabsTrigger>
            <TabsTrigger
              value="content_creation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Content Creation
            </TabsTrigger>
            <TabsTrigger
              value="community_management"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Community Management
            </TabsTrigger>
            <TabsTrigger
              value="paid_advertising"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Paid Advertising
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
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

