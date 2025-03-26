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
  // Define the tab types specific to events and social media design
  type TabKey = "event_design" | "social_media_design" | "branding_consistency" | "visual_strategy" | "design_tools"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("event_design")

  const tabData: TabDataMap = {
    event_design: {
      title: "Event Design & Materials",
      description:
        "Create stunning visual assets for events that capture attention and reinforce your brand identity across all touchpoints.",
      technologies: [
        {
          name: "Event Branding",
          icon: "/services/keyword-research.svg",
          description: "Develop cohesive visual identities that make your events memorable and recognizable.",
        },
        {
          name: "Invitation Design",
          icon: "/services/semantic-seo.svg",
          description: "Create eye-catching digital and print invitations that set the tone for your event.",
        },
        {
          name: "Signage & Wayfinding",
          icon: "/services/intent-optimization.svg",
          description: "Design clear, branded directional signage that enhances attendee experience.",
        },
        {
          name: "Backdrop & Stage Design",
          icon: "/services/competitor-gap.svg",
          description: "Craft impressive backdrops and stage elements that create perfect photo opportunities.",
        },
        {
          name: "Event Collateral",
          icon: "/services/longtail-keywords.svg",
          description: "Design cohesive programs, badges, and promotional materials that reinforce your brand.",
        },
      ],
    },
    social_media_design: {
      title: "Social Media Graphics",
      description:
        "Develop scroll-stopping visuals optimized for each platform that increase engagement and build brand recognition.",
      technologies: [
        {
          name: "Feed Post Design",
          icon: "/services/seo-blog.svg",
          description: "Create eye-catching graphics that stand out in crowded social feeds and drive engagement.",
        },
        {
          name: "Story & Reel Templates",
          icon: "/services/meta-tags.svg",
          description: "Design dynamic templates for Stories and Reels that maintain brand consistency.",
        },
        {
          name: "Social Media Covers",
          icon: "/services/headings.svg",
          description: "Craft impactful profile and cover images that make strong first impressions.",
        },
        {
          name: "Carousel Post Design",
          icon: "/services/internal-links.svg",
          description: "Create swipeable multi-slide content that increases engagement and sharing.",
        },
        {
          name: "Social Media Ads",
          icon: "/services/content-refresh.svg",
          description: "Design high-converting ad creatives optimized for each platform's specifications.",
        },
      ],
    },
    branding_consistency: {
      title: "Brand Consistency & Guidelines",
      description:
        "Maintain visual coherence across all event materials and social platforms to strengthen brand recognition.",
      technologies: [
        {
          name: "Brand Style Guides",
          icon: "/services/guest-posting.svg",
          description: "Develop comprehensive guidelines for consistent application of visual elements.",
        },
        {
          name: "Template Systems",
          icon: "/services/link-worthy-content.svg",
          description: "Create flexible template systems that maintain brand identity while allowing for variation.",
        },
        {
          name: "Color & Typography",
          icon: "/services/skyscraper.svg",
          description: "Establish consistent color palettes and font usage that reinforce brand personality.",
        },
        {
          name: "Logo Application",
          icon: "/services/broken-link.svg",
          description: "Define proper logo usage across different contexts, sizes, and applications.",
        },
        {
          name: "Visual Asset Library",
          icon: "/services/resource-page.svg",
          description: "Build a comprehensive library of branded elements for consistent implementation.",
        },
      ],
    },
    visual_strategy: {
      title: "Visual Content Strategy",
      description:
        "Develop a cohesive visual approach that aligns with marketing goals and resonates with your target audience.",
      technologies: [
        {
          name: "Content Calendar Visuals",
          icon: "/services/content-calendar.svg",
          description: "Plan and design visual content that supports your marketing calendar and campaigns.",
        },
        {
          name: "Audience-Targeted Design",
          icon: "/services/topic-clusters.svg",
          description: "Create visuals that specifically appeal to your target demographic and their preferences.",
        },
        {
          name: "Competitive Visual Analysis",
          icon: "/services/competitive-analysis.svg",
          description: "Analyze competitors' visual strategies to identify opportunities for differentiation.",
        },
        {
          name: "Campaign Visual Systems",
          icon: "/services/evergreen-content.svg",
          description: "Develop cohesive visual systems for campaigns that work across multiple channels.",
        },
        {
          name: "Visual Trend Adaptation",
          icon: "/services/content-distribution.svg",
          description: "Incorporate current design trends while maintaining your unique brand identity.",
        },
      ],
    },
    design_tools: {
      title: "Design Tools & Technology",
      description:
        "Leverage industry-leading design software and techniques to create professional, high-impact visuals.",
      technologies: [
        {
          name: "Adobe Creative Suite",
          icon: "/services/page-speed.svg",
          description: "Utilize professional tools like Photoshop, Illustrator, and InDesign for premium results.",
        },
        {
          name: "Motion Graphics",
          icon: "/services/mobile-seo.svg",
          description: "Create attention-grabbing animated content for higher engagement on social platforms.",
        },
        {
          name: "Canva Pro Templates",
          icon: "/services/schema.svg",
          description: "Develop custom templates for easy, consistent content creation by your team.",
        },
        {
          name: "Video Editing",
          icon: "/services/core-web-vitals.svg",
          description: "Produce professional video content optimized for social media and event displays.",
        },
        {
          name: "3D & AR Elements",
          icon: "/services/crawlability.svg",
          description: "Incorporate cutting-edge 3D and augmented reality elements for innovative experiences.",
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
  Captivate Your Audience with Stunning <br/> Event & Social Media Design
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Create visually striking designs that elevate your events and stand out on social media. Our expert design services ensure every visual touchpoint reinforces your brand identity, engages your audience, and drives meaningful interaction both online and in-person.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="event_design"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="event_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Event Design
            </TabsTrigger>
            <TabsTrigger
              value="social_media_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Social Media
            </TabsTrigger>
            <TabsTrigger
              value="branding_consistency"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Consistency
            </TabsTrigger>
            <TabsTrigger
              value="visual_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Strategy
            </TabsTrigger>
            <TabsTrigger
              value="design_tools"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Design Tools
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

