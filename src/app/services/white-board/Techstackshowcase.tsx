"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "illustration" | "animation" | "storytelling" | "production" | "applications"

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
  type TabKey = "illustration_design" | "animation_techniques" | "storytelling" | "production_process" | "business_applications"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("illustration_design")

  const tabData: TabDataMap = {
    illustration_design: {
      title: "Illustration & Design",
      description:
        "Create visually engaging whiteboard animations with professional illustration techniques that simplify complex concepts.",
      technologies: [
        {
          name: "Character Design",
          icon: "/services/keyword-research.svg",
          description: "Create relatable characters that connect with viewers and personify abstract concepts.",
        },
        {
          name: "Icon & Symbol Creation",
          icon: "/services/semantic-seo.svg",
          description: "Develop clear, recognizable visual symbols that represent complex ideas simply.",
        },
        {
          name: "Storyboard Development",
          icon: "/services/intent-optimization.svg",
          description: "Plan the visual flow of your whiteboard animation for maximum clarity and impact.",
        },
        {
          name: "Visual Metaphors",
          icon: "/services/competitor-gap.svg",
          description: "Use powerful visual metaphors to explain abstract concepts in relatable ways.",
        },
        {
          name: "Custom Illustration Style",
          icon: "/services/longtail-keywords.svg",
          description: "Develop a unique illustration style that aligns with your brand identity.",
        },
      ],
    },
    animation_techniques: {
      title: "Animation Techniques",
      description:
        "Bring your whiteboard illustrations to life with professional animation techniques that enhance engagement and understanding.",
      technologies: [
        {
          name: "Hand-Drawn Simulation",
          icon: "/services/seo-blog.svg",
          description: "Create the authentic drawing effect that makes whiteboard animation so engaging.",
        },
        {
          name: "Reveal Timing",
          icon: "/services/meta-tags.svg",
          description: "Perfect the timing of visual reveals to maintain viewer attention and enhance comprehension.",
        },
        {
          name: "Character Animation",
          icon: "/services/headings.svg",
          description: "Add personality and emotion to characters with subtle, effective animation techniques.",
        },
        {
          name: "Transition Effects",
          icon: "/services/internal-links.svg",
          description: "Create smooth, logical transitions between scenes and concepts for better understanding.",
        },
        {
          name: "Dynamic Text Animation",
          icon: "/services/content-refresh.svg",
          description: "Animate text elements to emphasize key points and improve information retention.",
        },
      ],
    },
    storytelling: {
      title: "Scriptwriting & Storytelling",
      description:
        "Craft compelling narratives that transform complex information into clear, memorable stories.",
      technologies: [
        {
          name: "Script Development",
          icon: "/services/guest-posting.svg",
          description: "Create concise, engaging scripts that simplify complex topics without losing essential details.",
        },
        {
          name: "Narrative Structure",
          icon: "/services/link-worthy-content.svg",
          description: "Build clear beginning-middle-end structures that guide viewers through complex information.",
        },
        {
          name: "Voiceover Direction",
          icon: "/services/skyscraper.svg",
          description: "Select and direct professional voice talent to complement your visual storytelling.",
        },
        {
          name: "Pacing & Timing",
          icon: "/services/broken-link.svg",
          description: "Perfect the rhythm between narration and visual elements for maximum comprehension.",
        },
        {
          name: "Audience Adaptation",
          icon: "/services/resource-page.svg",
          description: "Tailor your whiteboard story to specific audience needs, knowledge levels, and preferences.",
        },
      ],
    },
    production_process: {
      title: "Production & Post-Production",
      description:
        "Ensure professional quality with comprehensive production processes that elevate your whiteboard animation.",
      technologies: [
        {
          name: "Sound Design",
          icon: "/services/content-calendar.svg",
          description: "Enhance engagement with custom music, sound effects, and professional audio mixing.",
        },
        {
          name: "Color Treatment",
          icon: "/services/topic-clusters.svg",
          description: "Use strategic color highlights to emphasize key points while maintaining the whiteboard aesthetic.",
        },
        {
          name: "Quality Assurance",
          icon: "/services/competitive-analysis.svg",
          description: "Ensure technical excellence with comprehensive quality checks before delivery.",
        },
        {
          name: "Format Optimization",
          icon: "/services/evergreen-content.svg",
          description: "Prepare your whiteboard animation for various platforms with appropriate format specifications.",
        },
        {
          name: "Revision Management",
          icon: "/services/content-distribution.svg",
          description: "Refine your whiteboard animation with our structured feedback and revision process.",
        },
      ],
    },
    business_applications: {
      title: "Business Applications",
      description:
        "Leverage whiteboard animation across various business contexts to simplify communication and drive results.",
      technologies: [
        {
          name: "Product Explanations",
          icon: "/services/page-speed.svg",
          description: "Simplify complex product features and benefits with clear visual explanations.",
        },
        {
          name: "Training & Education",
          icon: "/services/mobile-seo.svg",
          description: "Improve learning outcomes with engaging whiteboard animations that simplify complex topics.",
        },
        {
          name: "Marketing & Sales",
          icon: "/services/schema.svg",
          description: "Boost conversion rates with whiteboard videos that clearly communicate your value proposition.",
        },
        {
          name: "Process Visualization",
          icon: "/services/core-web-vitals.svg",
          description: "Transform complicated workflows and processes into clear, easy-to-follow visual sequences.",
        },
        {
          name: "Internal Communication",
          icon: "/services/crawlability.svg",
          description: "Improve organizational alignment with whiteboard animations that clarify vision and strategy.",
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
  Simplify Complex Ideas with Engaging <br/> Whiteboard Animation
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform complicated concepts into clear, engaging visual stories with our professional whiteboard animation services. Our hand-drawn style combines with strategic storytelling to create videos that educate, engage, and inspire action across training, marketing, and educational applications.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="illustration_design"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="illustration_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Illustration Design
            </TabsTrigger>
            <TabsTrigger
              value="animation_techniques"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Animation Techniques
            </TabsTrigger>
            <TabsTrigger
              value="storytelling"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Storytelling
            </TabsTrigger>
            <TabsTrigger
              value="production_process"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Production
            </TabsTrigger>
            <TabsTrigger
              value="business_applications"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Applications
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

