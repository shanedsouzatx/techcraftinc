"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "modeling" | "rendering" | "animation" | "vfx" | "production"

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
  type TabKey = "3d_modeling" | "rendering_lighting" | "animation_rigging" | "visual_effects" | "production_workflow"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("3d_modeling")

  const tabData: TabDataMap = {
    '3d_modeling': {
      title: "3D Modeling & Asset Creation",
      description:
        "Create detailed 3D models and assets with precision and artistry. Our modeling expertise ensures photorealistic results for any project.",
      'technologies': [
        {
          name: "Character Modeling",
          icon: "/services/keyword-research.svg",
          description: "Create detailed, expressive 3D characters with realistic proportions and features.",
        },
        {
          name: "Environment Design",
          icon: "/services/semantic-seo.svg",
          description: "Build immersive 3D environments and landscapes with realistic terrain and architecture.",
        },
        {
          name: "Hard Surface Modeling",
          icon: "/services/intent-optimization.svg",
          description: "Design precise mechanical objects, vehicles, and products with engineering accuracy.",
        },
        {
          name: "Organic Modeling",
          icon: "/services/competitor-gap.svg",
          description: "Sculpt lifelike organic forms including creatures, plants, and natural elements.",
        },
        {
          name: "Texturing & UV Mapping",
          icon: "/services/longtail-keywords.svg",
          description: "Apply detailed textures and materials for photorealistic surface qualities.",
        },
      ],
    },
    rendering_lighting: {
      title: "Rendering & Lighting",
      description:
        "Transform 3D models into stunning visuals with advanced rendering techniques and artistic lighting setups.",
      technologies: [
        {
          name: "Photorealistic Rendering",
          icon: "/services/seo-blog.svg",
          description: "Create indistinguishable-from-reality images with physically-based rendering techniques.",
        },
        {
          name: "Lighting Design",
          icon: "/services/meta-tags.svg",
          description: "Craft mood and atmosphere with strategic lighting setups that enhance visual storytelling.",
        },
        {
          name: "Material Development",
          icon: "/services/headings.svg",
          description: "Create custom materials with realistic properties including reflection, refraction, and subsurface scattering.",
        },
        {
          name: "Environment Mapping",
          icon: "/services/internal-links.svg",
          description: "Use HDRI and environment maps to create realistic lighting and reflections.",
        },
        {
          name: "Compositing & Post-Processing",
          icon: "/services/content-refresh.svg",
          description: "Enhance rendered images with color grading, depth effects, and atmospheric elements.",
        },
      ],
    },
    animation_rigging: {
      title: "Animation & Character Rigging",
      description:
        "Bring characters and objects to life with fluid, realistic animation and professional rigging techniques.",
      technologies: [
        {
          name: "Character Rigging",
          icon: "/services/guest-posting.svg",
          description: "Create flexible, efficient character rigs with intuitive controls for animators.",
        },
        {
          name: "Keyframe Animation",
          icon: "/services/link-worthy-content.svg",
          description: "Craft smooth, expressive movement with traditional keyframe animation techniques.",
        },
        {
          name: "Motion Capture Integration",
          icon: "/services/skyscraper.svg",
          description: "Apply and refine motion capture data for realistic human and creature movement.",
        },
        {
          name: "Facial Animation",
          icon: "/services/broken-link.svg",
          description: "Create convincing facial expressions and lip-syncing for character dialogue.",
        },
        {
          name: "Physics Simulation",
          icon: "/services/resource-page.svg",
          description: "Add realism with dynamic simulations for cloth, hair, fluids, and rigid body physics.",
        },
      ],
    },
    visual_effects: {
      title: "Visual Effects & Dynamics",
      description:
        "Create spectacular visual effects and simulations that add impact and realism to your CGI projects.",
      technologies: [
        {
          name: "Particle Systems",
          icon: "/services/content-calendar.svg",
          description: "Generate realistic fire, smoke, dust, and other particle-based effects.",
        },
        {
          name: "Fluid Dynamics",
          icon: "/services/topic-clusters.svg",
          description: "Simulate realistic water, liquid, and fluid behavior with advanced physics.",
        },
        {
          name: "Destruction Simulation",
          icon: "/services/competitive-analysis.svg",
          description: "Create convincing destruction sequences with fracturing and dynamic simulations.",
        },
        {
          name: "Atmospheric Effects",
          icon: "/services/evergreen-content.svg",
          description: "Add volumetric fog, clouds, and atmospheric elements for environmental depth.",
        },
        {
          name: "Compositing Integration",
          icon: "/services/content-distribution.svg",
          description: "Seamlessly integrate CGI elements with live-action footage or other visual elements.",
        },
      ],
    },
    production_workflow: {
      title: "Production & Pipeline Management",
      description:
        "Ensure efficient project execution with professional production workflows and pipeline management.",
      technologies: [
        {
          name: "Asset Management",
          icon: "/services/page-speed.svg",
          description: "Organize and track 3D assets throughout the production pipeline for maximum efficiency.",
        },
        {
          name: "Render Farm Optimization",
          icon: "/services/mobile-seo.svg",
          description: "Maximize rendering efficiency with distributed computing and queue management.",
        },
        {
          name: "Version Control",
          icon: "/services/schema.svg",
          description: "Track changes and maintain file integrity throughout the production process.",
        },
        {
          name: "Quality Assurance",
          icon: "/services/core-web-vitals.svg",
          description: "Implement comprehensive quality checks to ensure technical excellence.",
        },
        {
          name: "Client Review Systems",
          icon: "/services/crawlability.svg",
          description: "Facilitate smooth feedback and approval processes with collaborative review tools.",
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
  Create Stunning Visuals with Professional <br/> CGI Animation
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform your ideas into photorealistic visual experiences with our expert CGI animation services. From detailed 3D modeling to dynamic animation and visual effects, we create stunning digital content that captivates audiences and communicates your message with impact.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="3d_modeling"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="3d_modeling"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Modeling
            </TabsTrigger>
            <TabsTrigger
              value="rendering_lighting"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Rendering & Lighting
            </TabsTrigger>
            <TabsTrigger
              value="animation_rigging"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Animation
            </TabsTrigger>
            <TabsTrigger
              value="visual_effects"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Effects
            </TabsTrigger>
            <TabsTrigger
              value="production_workflow"
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

