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
  type TabKey = "website_copy" | "blog_articles" | "marketing_content" | "technical_writing" | "creative_content"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("website_copy")

  const tabData: TabDataMap = {
    website_copy: {
      title: "Website & Landing Page Copy",
      description:
        "Craft compelling website content that converts visitors into customers with persuasive messaging and clear value propositions.",
      technologies: [
        {
          name: "Homepage Messaging",
          icon: "/services/keyword-research.svg",
          description: "Create impactful first impressions with clear, benefit-focused homepage content.",
        },
        {
          name: "Service/Product Pages",
          icon: "/services/semantic-seo.svg",
          description: "Develop persuasive copy that highlights features, benefits, and drives conversions.",
        },
        {
          name: "About Us Storytelling",
          icon: "/services/intent-optimization.svg",
          description: "Craft authentic brand narratives that build trust and emotional connections.",
        },
        {
          name: "Landing Page Optimization",
          icon: "/services/competitor-gap.svg",
          description: "Create high-converting landing pages with compelling CTAs and persuasive elements.",
        },
        {
          name: "UX Microcopy",
          icon: "/services/longtail-keywords.svg",
          description: "Develop intuitive interface text that guides users and improves experience.",
        },
      ],
    },
    blog_articles: {
      title: "Blog & Article Writing",
      description:
        "Publish engaging, informative content that establishes thought leadership, drives organic traffic, and nurtures leads.",
      technologies: [
        {
          name: "SEO-Optimized Blogs",
          icon: "/services/seo-blog.svg",
          description: "Create search-friendly content that ranks well and attracts targeted traffic.",
        },
        {
          name: "Thought Leadership Articles",
          icon: "/services/meta-tags.svg",
          description: "Develop authoritative content that positions your brand as an industry leader.",
        },
        {
          name: "How-To & Tutorial Content",
          icon: "/services/headings.svg",
          description: "Create practical, valuable content that solves problems and builds audience trust.",
        },
        {
          name: "Industry News & Trends",
          icon: "/services/internal-links.svg",
          description: "Deliver timely insights on industry developments to keep your audience informed.",
        },
        {
          name: "Case Studies & Success Stories",
          icon: "/services/content-refresh.svg",
          description: "Showcase real results through compelling narrative and data-driven storytelling.",
        },
      ],
    },
    marketing_content: {
      title: "Marketing & Sales Content",
      description:
        "Develop persuasive marketing materials that generate leads, nurture prospects, and drive conversions throughout the funnel.",
      technologies: [
        {
          name: "Email Campaigns",
          icon: "/services/guest-posting.svg",
          description: "Craft engaging email sequences that nurture leads and drive conversions.",
        },
        {
          name: "Social Media Content",
          icon: "/services/link-worthy-content.svg",
          description: "Create platform-specific content that builds engagement and community.",
        },
        {
          name: "Sales Collateral",
          icon: "/services/skyscraper.svg",
          description: "Develop persuasive brochures, one-pagers, and presentations that support sales.",
        },
        {
          name: "Ad Copy & CTAs",
          icon: "/services/broken-link.svg",
          description: "Write compelling ad copy and calls-to-action that maximize click-through rates.",
        },
        {
          name: "Video Scripts",
          icon: "/services/resource-page.svg",
          description: "Create engaging scripts for promotional videos, explainers, and testimonials.",
        },
      ],
    },
    technical_writing: {
      title: "Technical & Specialized Content",
      description:
        "Translate complex information into clear, accessible content that educates your audience and showcases expertise.",
      technologies: [
        {
          name: "White Papers & eBooks",
          icon: "/services/content-calendar.svg",
          description: "Develop in-depth resources that establish authority and generate quality leads.",
        },
        {
          name: "Technical Documentation",
          icon: "/services/topic-clusters.svg",
          description: "Create clear user guides, manuals, and documentation for products and services.",
        },
        {
          name: "Industry Reports",
          icon: "/services/competitive-analysis.svg",
          description: "Produce data-driven reports with actionable insights and expert analysis.",
        },
        {
          name: "Educational Content",
          icon: "/services/evergreen-content.svg",
          description: "Develop instructional materials that simplify complex topics for your audience.",
        },
        {
          name: "Research Summaries",
          icon: "/services/content-distribution.svg",
          description: "Transform technical research into accessible, valuable content for your audience.",
        },
      ],
    },
    creative_content: {
      title: "Creative & Brand Storytelling",
      description:
        "Build emotional connections with your audience through compelling brand narratives and creative content formats.",
      technologies: [
        {
          name: "Brand Storytelling",
          icon: "/services/page-speed.svg",
          description: "Craft authentic narratives that communicate your brand's purpose and values.",
        },
        {
          name: "Creative Campaigns",
          icon: "/services/mobile-seo.svg",
          description: "Develop thematic content campaigns that capture attention and drive engagement.",
        },
        {
          name: "Podcast & Interview Scripts",
          icon: "/services/schema.svg",
          description: "Create engaging audio content that builds authority and audience connection.",
        },
        {
          name: "Interactive Content",
          icon: "/services/core-web-vitals.svg",
          description: "Design quizzes, assessments, and interactive experiences that boost engagement.",
        },
        {
          name: "Storytelling for Social",
          icon: "/services/crawlability.svg",
          description: "Craft platform-optimized stories that resonate with social media audiences.",
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
  Elevate Your Brand with Professional <br/> Content Writing Services
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform your brand messaging with expertly crafted content that engages your audience and drives business results. Our professional content writing services deliver clear, compelling copy tailored to your unique voice, goals, and target audience.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="website_copy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="website_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Website Copy
            </TabsTrigger>
            <TabsTrigger
              value="blog_articles"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Blog Articles
            </TabsTrigger>
            <TabsTrigger
              value="marketing_content"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Marketing Content
            </TabsTrigger>
            <TabsTrigger
              value="technical_writing"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Technical Writing
            </TabsTrigger>
            <TabsTrigger
              value="creative_content"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Creative Content
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

