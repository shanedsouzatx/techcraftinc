"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "character" | "motion" | "explainer" | "storyboard" | "production"

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
  type TabKey = "character_animation" | "motion_graphics" | "explainer_videos" | "storyboarding" | "production"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("character_animation")

  const tabData: TabDataMap = {
    character_animation: {
      title: "Character Animation",
      description:
        "Bring characters to life with fluid, expressive animation that captivates audiences and tells compelling stories.",
      technologies: [
        {
          name: "Character Design",
          icon: "/services/keyword-research.svg",
          description: "Create unique, memorable characters tailored to your brand identity and target audience.",
        },
        {
          name: "Frame-by-Frame Animation",
          icon: "/services/semantic-seo.svg",
          description: "Craft smooth, detailed animations with traditional hand-drawn techniques for authentic movement.",
        },
        {
          name: "Rigging & Puppetry",
          icon: "/services/intent-optimization.svg",
          description: "Build efficient character rigs for faster animation production and consistent movement.",
        },
        {
          name: "Lip Sync & Facial Animation",
          icon: "/services/competitor-gap.svg",
          description: "Create expressive character performances with precise lip synchronization and facial expressions.",
        },
        {
          name: "Walk Cycles & Action Sequences",
          icon: "/services/longtail-keywords.svg",
          description: "Develop fluid character movement from basic walks to complex action sequences.",
        },
      ],
    },
    motion_graphics: {
      title: "Motion Graphics & Visual Effects",
      description:
        "Transform static designs into dynamic visual experiences with eye-catching motion graphics and special effects.",
      technologies: [
        {
          name: "Logo Animation",
          icon: "/services/seo-blog.svg",
          description: "Bring your brand identity to life with dynamic, memorable logo animations.",
        },
        {
          name: "Kinetic Typography",
          icon: "/services/meta-tags.svg",
          description: "Create engaging text animations that enhance message retention and viewer engagement.",
        },
        {
          name: "UI/UX Animation",
          icon: "/services/headings.svg",
          description: "Design smooth interface animations for websites, apps, and digital products.",
        },
        {
          name: "Particle Effects & Transitions",
          icon: "/services/internal-links.svg",
          description: "Add visual impact with custom particle systems, transitions, and special effects.",
        },
        {
          name: "Infographic Animation",
          icon: "/services/content-refresh.svg",
          description: "Transform complex data into clear, engaging animated infographics and data visualizations.",
        },
      ],
    },
    explainer_videos: {
      title: "Explainer Videos & Commercials",
      description:
        "Communicate complex ideas clearly and persuasively through engaging animated explainer videos and commercials.",
      technologies: [
        {
          name: "Whiteboard Animation",
          icon: "/services/guest-posting.svg",
          description: "Create engaging hand-drawn style animations that simplify complex concepts.",
        },
        {
          name: "2D Commercial Production",
          icon: "/services/link-worthy-content.svg",
          description: "Develop attention-grabbing animated commercials that drive brand awareness and conversions.",
        },
        {
          name: "Educational Content",
          icon: "/services/skyscraper.svg",
          description: "Produce clear, engaging animations that make learning accessible and enjoyable.",
        },
        {
          name: "Product Demonstrations",
          icon: "/services/broken-link.svg",
          description: "Showcase product features and benefits through clear, visually appealing animations.",
        },
        {
          name: "Social Media Animations",
          icon: "/services/resource-page.svg",
          description: "Create scroll-stopping animated content optimized for various social media platforms.",
        },
      ],
    },
    storyboarding: {
      title: "Storyboarding & Pre-Production",
      description:
        "Lay the foundation for successful animation projects with comprehensive planning and creative development.",
      technologies: [
        {
          name: "Concept Development",
          icon: "/services/content-calendar.svg",
          description: "Transform ideas into viable animation concepts with clear creative direction.",
        },
        {
          name: "Script & Narrative Design",
          icon: "/services/topic-clusters.svg",
          description: "Craft compelling stories and scripts that engage viewers and deliver your message effectively.",
        },
        {
          name: "Visual Storyboarding",
          icon: "/services/competitive-analysis.svg",
          description: "Plan every shot and sequence with detailed visual storyboards to streamline production.",
        },
        {
          name: "Style Frame Development",
          icon: "/services/evergreen-content.svg",
          description: "Establish the visual style and aesthetic direction before animation begins.",
        },
        {
          name: "Animatic Creation",
          icon: "/services/content-distribution.svg",
          description: "Produce preliminary timing and movement tests to validate concepts before full animation.",
        },
      ],
    },
    production: {
      title: "Production & Delivery",
      description:
        "Complete your animation project with professional post-production, sound design, and flexible delivery options.",
      technologies: [
        {
          name: "Compositing & Color Grading",
          icon: "/services/page-speed.svg",
          description: "Enhance visual impact with professional compositing techniques and color treatment.",
        },
        {
          name: "Sound Design & Music",
          icon: "/services/mobile-seo.svg",
          description: "Elevate your animation with custom sound effects, voice-over, and music integration.",
        },
        {
          name: "Multi-Platform Optimization",
          icon: "/services/schema.svg",
          description: "Prepare animations for various platforms including web, social media, broadcast, and presentations.",
        },
        {
          name: "Revision Management",
          icon: "/services/core-web-vitals.svg",
          description: "Efficiently handle feedback and revisions to ensure your complete satisfaction.",
        },
        {
          name: "File Delivery & Support",
          icon: "/services/crawlability.svg",
          description: "Receive final animations in multiple formats with implementation support as needed.",
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
  Captivate Your Audience with Engaging <br/> 2D Animation Services
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform your ideas into compelling visual stories with our professional 2D animation services. From character animation to explainer videos, our expert team combines artistic talent with technical expertise to create animations that engage, inform, and inspire action.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="character_animation"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="character_animation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Character Animation
            </TabsTrigger>
            <TabsTrigger
              value="motion_graphics"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Motion Graphics
            </TabsTrigger>
            <TabsTrigger
              value="explainer_videos"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Explainer Videos
            </TabsTrigger>
            <TabsTrigger
              value="storyboarding"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Storyboarding
            </TabsTrigger>
            <TabsTrigger
              value="production"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Production
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

