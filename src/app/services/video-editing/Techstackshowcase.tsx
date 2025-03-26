"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "editing" | "color" | "audio" | "effects" | "delivery"

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
  type TabKey = "editing_techniques" | "color_grading" | "audio_production" | "visual_effects" | "delivery_formats"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("editing_techniques")

  const tabData: TabDataMap = {
    editing_techniques: {
      title: "Professional Editing Techniques",
      description:
        "Transform raw footage into compelling stories with advanced editing techniques that enhance pacing, flow, and viewer engagement.",
      technologies: [
        {
          name: "Narrative Structure",
          icon: "/services/keyword-research.svg",
          description: "Create compelling story arcs that maintain viewer interest from beginning to end.",
        },
        {
          name: "Multi-Camera Editing",
          icon: "/services/semantic-seo.svg",
          description: "Seamlessly blend footage from multiple camera angles for dynamic, professional results.",
        },
        {
          name: "Precision Cutting",
          icon: "/services/intent-optimization.svg",
          description: "Perfect timing and pacing with frame-accurate cuts that enhance visual flow.",
        },
        {
          name: "Transition Effects",
          icon: "/services/competitor-gap.svg",
          description: "Apply creative transitions that enhance storytelling and maintain viewer engagement.",
        },
        {
          name: "Montage Creation",
          icon: "/services/longtail-keywords.svg",
          description: "Craft compelling sequences that condense time and convey complex ideas efficiently.",
        },
      ],
    },
    color_grading: {
      title: "Color Grading & Visual Enhancement",
      description:
        "Elevate your footage with professional color grading that creates mood, consistency, and visual impact across your entire project.",
      technologies: [
        {
          name: "Color Correction",
          icon: "/services/seo-blog.svg",
          description: "Balance exposure, contrast, and white balance for natural, consistent footage.",
        },
        {
          name: "Cinematic Color Grading",
          icon: "/services/meta-tags.svg",
          description: "Apply stylistic color treatments that establish mood and enhance storytelling.",
        },
        {
          name: "LUT Development",
          icon: "/services/headings.svg",
          description: "Create custom look-up tables for consistent color across multiple projects.",
        },
        {
          name: "Skin Tone Refinement",
          icon: "/services/internal-links.svg",
          description: "Perfect skin tones while maintaining natural appearance in all lighting conditions.",
        },
        {
          name: "HDR Enhancement",
          icon: "/services/content-refresh.svg",
          description: "Optimize footage for high dynamic range displays with expanded contrast and color.",
        },
      ],
    },
    audio_production: {
      title: "Audio Enhancement & Sound Design",
      description:
        "Perfect your project's sound with professional audio editing, mixing, and sound design that complements your visual storytelling.",
      technologies: [
        {
          name: "Dialogue Enhancement",
          icon: "/services/guest-posting.svg",
          description: "Clean and enhance dialogue for crystal clear, professional sound quality.",
        },
        {
          name: "Music Selection & Editing",
          icon: "/services/link-worthy-content.svg",
          description: "Select and edit music tracks that enhance emotional impact and pacing.",
        },
        {
          name: "Sound Effects Design",
          icon: "/services/skyscraper.svg",
          description: "Create and integrate custom sound effects that enhance realism and impact.",
        },
        {
          name: "Audio Mixing & Mastering",
          icon: "/services/broken-link.svg",
          description: "Balance all audio elements for professional sound across all playback systems.",
        },
        {
          name: "Voice-Over Production",
          icon: "/services/resource-page.svg",
          description: "Record, edit and integrate professional narration that enhances your message.",
        },
      ],
    },
    visual_effects: {
      title: "Motion Graphics & Visual Effects",
      description:
        "Enhance your video with custom motion graphics and visual effects that add polish, clarity, and professional impact.",
      technologies: [
        {
          name: "Custom Title Design",
          icon: "/services/content-calendar.svg",
          description: "Create eye-catching titles and lower thirds that reinforce your brand identity.",
        },
        {
          name: "2D/3D Animation",
          icon: "/services/topic-clusters.svg",
          description: "Integrate animated elements that explain concepts and enhance visual interest.",
        },
        {
          name: "Screen Replacement",
          icon: "/services/competitive-analysis.svg",
          description: "Replace device screens with clean, professional content in post-production.",
        },
        {
          name: "Tracking & Stabilization",
          icon: "/services/evergreen-content.svg",
          description: "Smooth shaky footage and add tracked elements for professional results.",
        },
        {
          name: "Green Screen Compositing",
          icon: "/services/content-distribution.svg",
          description: "Seamlessly integrate subjects into new backgrounds with clean keying techniques.",
        },
      ],
    },
    delivery_formats: {
      title: "Format Optimization & Delivery",
      description:
        "Ensure your video looks perfect on every platform with format-specific optimization and professional delivery preparation.",
      technologies: [
        {
          name: "Social Media Optimization",
          icon: "/services/page-speed.svg",
          description: "Format videos specifically for each social platform's requirements and audience.",
        },
        {
          name: "Broadcast Standards Compliance",
          icon: "/services/mobile-seo.svg",
          description: "Prepare content that meets professional broadcast specifications and standards.",
        },
        {
          name: "Compression Techniques",
          icon: "/services/schema.svg",
          description: "Optimize file size while maintaining visual quality for efficient delivery.",
        },
        {
          name: "Multi-Format Delivery",
          icon: "/services/core-web-vitals.svg",
          description: "Provide deliverables in multiple formats for maximum flexibility and usage.",
        },
        {
          name: "Subtitle & Caption Integration",
          icon: "/services/crawlability.svg",
          description: "Add professional subtitles and captions for accessibility and engagement.",
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
  Transform Your Footage Into Professional <br/> Video Content
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Elevate your raw footage with expert video editing that enhances storytelling, visual appeal, and audience engagement. Our professional editing services combine technical expertise with creative vision to deliver polished videos that achieve your goals.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="editing_techniques"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="editing_techniques"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Editing Techniques
            </TabsTrigger>
            <TabsTrigger
              value="color_grading"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Color Grading
            </TabsTrigger>
            <TabsTrigger
              value="audio_production"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Audio Production
            </TabsTrigger>
            <TabsTrigger
              value="visual_effects"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Effects
            </TabsTrigger>
            <TabsTrigger
              value="delivery_formats"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Delivery Formats
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

