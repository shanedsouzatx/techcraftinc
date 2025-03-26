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
  type TabKey = "content_creation" | "community_management" | "paid_advertising" | "analytics" | "platform_strategy"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("content_creation")

  const tabData: TabDataMap = {
    content_creation: {
      title: "Strategic Content Creation",
      description:
        "Develop engaging, platform-optimized content that resonates with your audience and drives meaningful engagement.",
      technologies: [
        {
          name: "Visual Content Design",
          icon: "/services/keyword-research.svg",
          description: "Create eye-catching graphics, photos, and videos tailored to each platform's specifications.",
        },
        {
          name: "Copywriting & Captions",
          icon: "/services/semantic-seo.svg",
          description: "Craft compelling captions that drive engagement and include strategic hashtags.",
        },
        {
          name: "Content Calendar Planning",
          icon: "/services/intent-optimization.svg",
          description: "Develop consistent posting schedules aligned with your marketing goals and audience activity.",
        },
        {
          name: "Video Content Strategy",
          icon: "/services/competitor-gap.svg",
          description: "Create short-form and long-form video content optimized for each platform's algorithm.",
        },
        {
          name: "User-Generated Content",
          icon: "/services/longtail-keywords.svg",
          description: "Leverage customer content to build authenticity and increase community engagement.",
        },
      ],
    },
    community_management: {
      title: "Community Management & Engagement",
      description:
        "Build meaningful relationships with your audience through active engagement and responsive community management.",
      technologies: [
        {
          name: "Comment & Message Management",
          icon: "/services/seo-blog.svg",
          description: "Respond promptly to comments and messages to build relationships and trust.",
        },
        {
          name: "Social Listening",
          icon: "/services/meta-tags.svg",
          description: "Monitor brand mentions and industry conversations to identify opportunities.",
        },
        {
          name: "Community Building Tactics",
          icon: "/services/headings.svg",
          description: "Implement strategies to foster a loyal, engaged community around your brand.",
        },
        {
          name: "Crisis Management",
          icon: "/services/internal-links.svg",
          description: "Develop protocols for addressing negative feedback and potential PR issues.",
        },
        {
          name: "Influencer Relationship Building",
          icon: "/services/content-refresh.svg",
          description: "Identify and collaborate with relevant influencers to expand your reach.",
        },
      ],
    },
    paid_advertising: {
      title: "Social Media Advertising",
      description:
        "Maximize ROI with targeted paid campaigns that reach your ideal audience and drive measurable results.",
      technologies: [
        {
          name: "Audience Targeting",
          icon: "/services/guest-posting.svg",
          description: "Create detailed audience segments based on demographics, interests, and behaviors.",
        },
        {
          name: "Ad Creative Development",
          icon: "/services/link-worthy-content.svg",
          description: "Design high-converting ad creatives optimized for each platform's specifications.",
        },
        {
          name: "Campaign Structure & Budget",
          icon: "/services/skyscraper.svg",
          description: "Develop efficient campaign structures with strategic budget allocation.",
        },
        {
          name: "A/B Testing & Optimization",
          icon: "/services/broken-link.svg",
          description: "Continuously test ad elements to improve performance and reduce costs.",
        },
        {
          name: "Retargeting Strategies",
          icon: "/services/resource-page.svg",
          description: "Implement advanced retargeting to re-engage website visitors and past customers.",
        },
      ],
    },
    analytics: {
      title: "Performance Analytics & Reporting",
      description:
        "Track key metrics and gain actionable insights to continuously improve your social media strategy.",
      technologies: [
        {
          name: "KPI Tracking & Dashboards",
          icon: "/services/content-calendar.svg",
          description: "Monitor essential metrics with custom dashboards for clear performance visibility.",
        },
        {
          name: "Competitor Benchmarking",
          icon: "/services/topic-clusters.svg",
          description: "Compare your performance against competitors to identify opportunities and threats.",
        },
        {
          name: "Conversion Tracking",
          icon: "/services/competitive-analysis.svg",
          description: "Measure the impact of social media on website traffic, leads, and sales.",
        },
        {
          name: "Content Performance Analysis",
          icon: "/services/evergreen-content.svg",
          description: "Identify your highest-performing content types to refine your content strategy.",
        },
        {
          name: "ROI Measurement",
          icon: "/services/content-distribution.svg",
          description: "Calculate the return on investment for both organic and paid social media efforts.",
        },
      ],
    },
    platform_strategy: {
      title: "Platform-Specific Strategies",
      description:
        "Leverage the unique features and audience behaviors of each social platform to maximize your brand's impact.",
      technologies: [
        {
          name: "Instagram Strategy",
          icon: "/services/page-speed.svg",
          description: "Optimize feed posts, Stories, Reels, and shopping features for maximum engagement.",
        },
        {
          name: "LinkedIn B2B Approach",
          icon: "/services/mobile-seo.svg",
          description: "Develop thought leadership content and networking strategies for professional audiences.",
        },
        {
          name: "TikTok Growth Tactics",
          icon: "/services/schema.svg",
          description: "Create trending, authentic content that resonates with younger demographics.",
        },
        {
          name: "Facebook Community Building",
          icon: "/services/core-web-vitals.svg",
          description: "Leverage groups, events, and interactive features to build active communities.",
        },
        {
          name: "Twitter Conversation Strategy",
          icon: "/services/crawlability.svg",
          description: "Join relevant conversations and utilize hashtags to increase brand visibility.",
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
  Elevate Your Brand with Strategic <br/> Social Media Management
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Build a powerful social media presence that drives engagement, increases brand awareness, and generates measurable business results. Our comprehensive social media management services combine creative content, strategic planning, and data-driven optimization.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="content_creation"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
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
              Analytics & Reporting
            </TabsTrigger>
            <TabsTrigger
              value="platform_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Platform Strategies
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

