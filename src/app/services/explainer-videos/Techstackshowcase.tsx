"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "animation" | "scriptwriting" | "voiceover" | "production" | "distribution"

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
  type TabKey = "animation_styles" | "scriptwriting" | "voiceover" | "production" | "distribution"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("animation_styles")

  const tabData: TabDataMap = {
    animation_styles: {
      title: "Animation Styles & Techniques",
      description:
        "Choose from a variety of animation styles to match your brand identity and communication goals. Each style offers unique advantages for different types of messages.",
      technologies: [
        {
          name: "2D Character Animation",
          icon: "/services/keyword-research.svg",
          description: "Create engaging character-driven stories that connect emotionally with your audience.",
        },
        {
          name: "Motion Graphics",
          icon: "/services/semantic-seo.svg",
          description: "Transform abstract concepts into dynamic visual elements with smooth transitions and effects.",
        },
        {
          name: "Whiteboard Animation",
          icon: "/services/intent-optimization.svg",
          description: "Simplify complex ideas with hand-drawn illustrations that unfold in real-time.",
        },
        {
          name: "Kinetic Typography",
          icon: "/services/competitor-gap.svg",
          description: "Bring text to life with dynamic movement that enhances message retention and impact.",
        },
        {
          name: "Isometric & 3D Elements",
          icon: "/services/longtail-keywords.svg",
          description: "Add depth and dimension to your explainer videos with modern 3D and isometric design.",
        },
      ],
    },
    scriptwriting: {
      title: "Scriptwriting & Storytelling",
      description:
        "Craft compelling narratives that simplify complex ideas and drive viewer action. Our scriptwriting process ensures clear, engaging messages.",
      technologies: [
        {
          name: "Problem-Solution Framework",
          icon: "/services/seo-blog.svg",
          description: "Structure your explainer video to identify pain points and present your solution effectively.",
        },
        {
          name: "Brand Voice Development",
          icon: "/services/meta-tags.svg",
          description: "Create scripts that align with your brand personality and resonate with your target audience.",
        },
        {
          name: "Message Simplification",
          icon: "/services/headings.svg",
          description: "Distill complex concepts into clear, concise language that viewers can easily understand.",
        },
        {
          name: "Emotional Storytelling",
          icon: "/services/internal-links.svg",
          description: "Connect with viewers through relatable scenarios and emotional hooks that drive engagement.",
        },
        {
          name: "Call-to-Action Optimization",
          icon: "/services/content-refresh.svg",
          description: "Craft compelling CTAs that guide viewers toward the next step in their customer journey.",
        },
      ],
    },
    voiceover: {
      title: "Voiceover & Sound Design",
      description:
        "Enhance your explainer video with professional voiceover and immersive sound design that elevates the viewing experience.",
      technologies: [
        {
          name: "Professional Voice Talent",
          icon: "/services/guest-posting.svg",
          description: "Select from a diverse range of voice actors to find the perfect match for your brand and message.",
        },
        {
          name: "Custom Music Composition",
          icon: "/services/link-worthy-content.svg",
          description: "Create a unique soundtrack that enhances mood and reinforces your brand identity.",
        },
        {
          name: "Sound Effects Library",
          icon: "/services/skyscraper.svg",
          description: "Add depth and dimension to your animation with carefully selected sound effects.",
        },
        {
          name: "Audio Mixing & Mastering",
          icon: "/services/broken-link.svg",
          description: "Ensure professional sound quality with expert audio balancing and optimization.",
        },
        {
          name: "Multilingual Adaptation",
          icon: "/services/resource-page.svg",
          description: "Expand your reach with voiceover translations for international audiences.",
        },
      ],
    },
    production: {
      title: "Production & Quality Assurance",
      description:
        "Ensure a smooth production process and exceptional final product with our comprehensive production workflow and quality standards.",
      technologies: [
        {
          name: "Storyboard Development",
          icon: "/services/content-calendar.svg",
          description: "Plan every scene with detailed visual storyboards to streamline the animation process.",
        },
        {
          name: "Style Frame Creation",
          icon: "/services/topic-clusters.svg",
          description: "Establish the visual style and color palette before animation begins.",
        },
        {
          name: "Animatic Preview",
          icon: "/services/competitive-analysis.svg",
          description: "Review timing and flow with preliminary animations before final production.",
        },
        {
          name: "Revision Management",
          icon: "/services/evergreen-content.svg",
          description: "Refine your explainer video with our structured feedback and revision process.",
        },
        {
          name: "Quality Assurance Testing",
          icon: "/services/content-distribution.svg",
          description: "Ensure technical excellence with comprehensive quality checks before delivery.",
        },
      ],
    },
    distribution: {
      title: "Optimization & Distribution",
      description:
        "Maximize the impact of your explainer video with platform-specific optimization and strategic distribution tactics.",
      technologies: [
        {
          name: "Video SEO Optimization",
          icon: "/services/page-speed.svg",
          description: "Enhance discoverability with keyword-rich titles, descriptions, and tags.",
        },
        {
          name: "Multi-Platform Formatting",
          icon: "/services/mobile-seo.svg",
          description: "Adapt your explainer video for various platforms including web, social media, and presentations.",
        },
        {
          name: "Subtitle & Caption Creation",
          icon: "/services/schema.svg",
          description: "Improve accessibility and engagement with professional subtitles and captions.",
        },
        {
          name: "Thumbnail Optimization",
          icon: "/services/core-web-vitals.svg",
          description: "Increase click-through rates with eye-catching, strategic video thumbnails.",
        },
        {
          name: "Analytics & Performance Tracking",
          icon: "/services/crawlability.svg",
          description: "Measure success with comprehensive video performance metrics and insights.",
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
  Simplify Complex Ideas with Engaging <br/> Explainer Videos
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform complicated concepts into clear, compelling visual stories that captivate your audience and drive action. Our professional explainer video services combine strategic messaging, creative animation, and expert production to deliver videos that inform, engage, and convert.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="animation_styles"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="animation_styles"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Animation Styles
            </TabsTrigger>
            <TabsTrigger
              value="scriptwriting"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Scriptwriting
            </TabsTrigger>
            <TabsTrigger
              value="voiceover"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Voiceover & Audio
            </TabsTrigger>
            <TabsTrigger
              value="production"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Production
            </TabsTrigger>
            <TabsTrigger
              value="distribution"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Distribution
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

