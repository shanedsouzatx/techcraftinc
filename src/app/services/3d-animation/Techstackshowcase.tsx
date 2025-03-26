"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "modeling" | "animation" | "rendering" | "vfx" | "pipeline"

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
  type TabKey = "modeling" | "animation" | "rendering" | "vfx" | "pipeline"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("modeling")

  const tabData: TabDataMap = {
    modeling: {
      title: "3D Modeling & Asset Creation",
      description:
        "Create detailed, high-quality 3D models and assets for any project. Our modeling expertise brings your concepts to life with precision and artistry.",
      technologies: [
        {
          name: "Character Modeling",
          icon: "/services/keyword-research.svg",
          description: "Create expressive, anatomically accurate character models ready for animation.",
        },
        {
          name: "Environment Design",
          icon: "/services/semantic-seo.svg",
          description: "Build immersive 3D environments and scenes with attention to detail and atmosphere.",
        },
        {
          name: "Product Visualization",
          icon: "/services/intent-optimization.svg",
          description: "Transform product concepts into photorealistic 3D models for marketing and presentations.",
        },
        {
          name: "Architectural Visualization",
          icon: "/services/competitor-gap.svg",
          description: "Create detailed architectural models and walkthroughs for real estate and construction.",
        },
        {
          name: "Organic & Hard Surface Modeling",
          icon: "/services/longtail-keywords.svg",
          description: "Specialized modeling techniques for both organic forms and mechanical/industrial objects.",
        },
      ],
    },
    animation: {
      title: "Character & Object Animation",
      description:
        "Bring models to life with fluid, expressive animation that captivates audiences and communicates your message effectively.",
      technologies: [
        {
          name: "Character Animation",
          icon: "/services/seo-blog.svg",
          description: "Create lifelike movement and expressions for characters with advanced rigging techniques.",
        },
        {
          name: "Motion Capture Integration",
          icon: "/services/meta-tags.svg",
          description: "Incorporate motion capture data for realistic human and creature movement.",
        },
        {
          name: "Procedural Animation",
          icon: "/services/headings.svg",
          description: "Generate complex animations through algorithms for natural phenomena and crowd simulations.",
        },
        {
          name: "Physics-Based Animation",
          icon: "/services/internal-links.svg",
          description: "Simulate realistic object interactions using advanced physics engines and dynamics.",
        },
        {
          name: "Facial Animation",
          icon: "/services/content-refresh.svg",
          description: "Create nuanced facial expressions and lip-syncing for emotional character performances.",
        },
      ],
    },
    rendering: {
      title: "Texturing & Rendering",
      description:
        "Transform raw 3D models into stunning visuals with professional texturing, lighting, and rendering techniques.",
      technologies: [
        {
          name: "PBR Texturing",
          icon: "/services/guest-posting.svg",
          description: "Create physically accurate materials using Physically Based Rendering workflows.",
        },
        {
          name: "Lighting Design",
          icon: "/services/link-worthy-content.svg",
          description: "Craft atmospheric lighting setups that enhance mood and visual impact.",
        },
        {
          name: "Photorealistic Rendering",
          icon: "/services/skyscraper.svg",
          description: "Produce ultra-realistic imagery indistinguishable from photography.",
        },
        {
          name: "Stylized Rendering",
          icon: "/services/broken-link.svg",
          description: "Create non-photorealistic renders with artistic styles from cartoon to painterly.",
        },
        {
          name: "Real-time Rendering",
          icon: "/services/resource-page.svg",
          description: "Optimize assets for real-time applications including games, VR, and interactive media.",
        },
      ],
    },
    vfx: {
      title: "Visual Effects & Compositing",
      description:
        "Enhance your animations with cutting-edge visual effects and seamless compositing for professional results.",
      technologies: [
        {
          name: "Particle Systems",
          icon: "/services/content-calendar.svg",
          description: "Create dynamic effects like fire, smoke, water, and magic using advanced particle simulations.",
        },
        {
          name: "Fluid Dynamics",
          icon: "/services/topic-clusters.svg",
          description: "Simulate realistic liquid and gas behaviors for water, explosions, and atmospheric effects.",
        },
        {
          name: "Destruction Simulations",
          icon: "/services/competitive-analysis.svg",
          description: "Create realistic breaking, shattering, and demolition effects for dynamic scenes.",
        },
        {
          name: "Compositing & Integration",
          icon: "/services/evergreen-content.svg",
          description: "Seamlessly blend 3D elements with live-action footage or other visual elements.",
        },
        {
          name: "Matte Painting & Set Extension",
          icon: "/services/content-distribution.svg",
          description: "Expand environments and create impossible locations through digital matte painting techniques.",
        },
      ],
    },
    pipeline: {
      title: "Production Pipeline & Delivery",
      description:
        "Streamline your 3D animation project with our efficient production pipeline and flexible delivery options.",
      technologies: [
        {
          name: "Project Management",
          icon: "/services/page-speed.svg",
          description: "Coordinate complex animation projects with efficient workflows and milestone tracking.",
        },
        {
          name: "Asset Management",
          icon: "/services/mobile-seo.svg",
          description: "Organize and optimize 3D assets for team collaboration and production efficiency.",
        },
        {
          name: "Multi-Platform Delivery",
          icon: "/services/schema.svg",
          description: "Prepare animations for various platforms including web, mobile, broadcast, and cinema.",
        },
        {
          name: "Version Control",
          icon: "/services/core-web-vitals.svg",
          description: "Track changes and maintain project integrity throughout the production process.",
        },
        {
          name: "Format Conversion",
          icon: "/services/crawlability.svg",
          description: "Convert and optimize 3D animations for different file formats and delivery requirements.",
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
  Bring Your Vision to Life with Stunning <br/> 3D Animation Services
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform your ideas into captivating visual experiences with our professional 3D animation services. From character animation to product visualization, our expert team combines technical expertise with artistic vision to create animations that engage, inform, and inspire.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="modeling"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="modeling"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Modeling
            </TabsTrigger>
            <TabsTrigger
              value="animation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Animation
            </TabsTrigger>
            <TabsTrigger
              value="rendering"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Rendering
            </TabsTrigger>
            <TabsTrigger
              value="vfx"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Effects
            </TabsTrigger>
            <TabsTrigger
              value="pipeline"
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

