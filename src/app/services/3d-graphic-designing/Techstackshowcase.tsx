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
  // Define the tab types specific to 3D graphic design
  type TabKey = "3d_modeling" | "3d_animation" | "3d_rendering" | "3d_visualization" | "3d_software"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("3d_modeling")

  const tabData: TabDataMap = {
    "3d_modeling": {
      title: "3D Modeling & Design",
      description:
        "Create stunning three-dimensional models with precision and detail. Our expert modeling techniques bring your concepts to life with realistic proportions and textures.",
      technologies: [
        {
          name: "Character Modeling",
          icon: "/services/keyword-research.svg",
          description: "Design expressive, anatomically accurate characters for games, animations, and marketing.",
        },
        {
          name: "Product Modeling",
          icon: "/services/semantic-seo.svg",
          description: "Create photorealistic 3D models of products for marketing, e-commerce, and presentations.",
        },
        {
          name: "Architectural Modeling",
          icon: "/services/intent-optimization.svg",
          description: "Build detailed 3D models of buildings, interiors, and landscapes for visualization.",
        },
        {
          name: "Organic Modeling",
          icon: "/services/competitor-gap.svg",
          description: "Sculpt natural forms and organic shapes with realistic textures and details.",
        },
        {
          name: "Hard Surface Modeling",
          icon: "/services/longtail-keywords.svg",
          description: "Design mechanical objects, vehicles, and industrial products with precision engineering.",
        },
      ],
    },
    "3d_animation": {
      title: "3D Animation & Motion",
      description:
        "Bring your 3D models to life with fluid, realistic animation. Our motion expertise creates engaging visual stories that captivate your audience.",
      technologies: [
        {
          name: "Character Animation",
          icon: "/services/seo-blog.svg",
          description: "Create lifelike movement and expressions for 3D characters with realistic physics.",
        },
        {
          name: "Product Animation",
          icon: "/services/meta-tags.svg",
          description: "Showcase product features and functionality through dynamic 3D animations.",
        },
        {
          name: "Architectural Walkthroughs",
          icon: "/services/headings.svg",
          description: "Guide viewers through 3D spaces with immersive camera movements and lighting.",
        },
        {
          name: "Motion Graphics",
          icon: "/services/internal-links.svg",
          description: "Combine 3D elements with typography and effects for engaging visual presentations.",
        },
        {
          name: "Simulation & Physics",
          icon: "/services/content-refresh.svg",
          description: "Create realistic physical interactions, fluid dynamics, and particle effects.",
        },
      ],
    },
    "3d_rendering": {
      title: "Rendering & Visualization",
      description:
        "Transform 3D models into photorealistic images and videos with advanced rendering techniques that showcase lighting, materials, and atmosphere.",
      technologies: [
        {
          name: "Photorealistic Rendering",
          icon: "/services/guest-posting.svg",
          description: "Create images indistinguishable from photographs with advanced lighting and materials.",
        },
        {
          name: "Stylized Rendering",
          icon: "/services/link-worthy-content.svg",
          description: "Develop non-photorealistic visuals with artistic styles for unique brand aesthetics.",
        },
        {
          name: "Lighting & Composition",
          icon: "/services/skyscraper.svg",
          description: "Craft mood and atmosphere through strategic lighting setups and visual composition.",
        },
        {
          name: "Material Development",
          icon: "/services/broken-link.svg",
          description: "Create realistic or stylized surface properties with advanced shader techniques.",
        },
        {
          name: "Environment Design",
          icon: "/services/resource-page.svg",
          description: "Build immersive 3D environments with atmospheric effects and detailed scenery.",
        },
      ],
    },
    "3d_visualization": {
      title: "3D Applications & Use Cases",
      description:
        "Leverage 3D graphics across various industries and applications to enhance marketing, improve product development, and create immersive experiences.",
      technologies: [
        {
          name: "Product Visualization",
          icon: "/services/content-calendar.svg",
          description: "Showcase products in photorealistic 3D for marketing materials and e-commerce.",
        },
        {
          name: "Architectural Visualization",
          icon: "/services/topic-clusters.svg",
          description: "Present buildings and spaces before construction with realistic lighting and materials.",
        },
        {
          name: "Medical & Scientific",
          icon: "/services/competitive-analysis.svg",
          description: "Visualize complex scientific concepts and medical procedures with accurate 3D models.",
        },
        {
          name: "Virtual Reality Content",
          icon: "/services/evergreen-content.svg",
          description: "Create immersive 3D environments and objects optimized for VR experiences.",
        },
        {
          name: "Augmented Reality Assets",
          icon: "/services/content-distribution.svg",
          description: "Design 3D elements that integrate seamlessly with real-world environments in AR.",
        },
      ],
    },
    "3d_software": {
      title: "3D Software & Technology",
      description:
        "Utilize industry-leading software and cutting-edge technology to create exceptional 3D graphics with efficiency and innovation.",
      technologies: [
        {
          name: "Blender Expertise",
          icon: "/services/page-speed.svg",
          description: "Leverage the power of open-source 3D creation with advanced Blender workflows.",
        },
        {
          name: "Maya & 3ds Max",
          icon: "/services/mobile-seo.svg",
          description: "Create professional 3D content with industry-standard Autodesk software.",
        },
        {
          name: "ZBrush Sculpting",
          icon: "/services/schema.svg",
          description: "Craft highly detailed organic models with digital sculpting techniques.",
        },
        {
          name: "Substance Texturing",
          icon: "/services/core-web-vitals.svg",
          description: "Develop realistic PBR materials and textures for photorealistic rendering.",
        },
        {
          name: "Unreal Engine & Unity",
          icon: "/services/crawlability.svg",
          description: "Create interactive 3D experiences and real-time visualizations with game engines.",
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
  Transform Your Vision with Stunning <br/> 3D Graphic Design
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Create immersive visual experiences with photorealistic 3D models, animations, and renderings that captivate your audience. Our expert 3D graphic design services bring your ideas to life with depth, dimension, and stunning detail for marketing, product visualization, and interactive experiences.
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
              value="3d_animation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Animation
            </TabsTrigger>
            <TabsTrigger
              value="3d_rendering"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Rendering
            </TabsTrigger>
            <TabsTrigger
              value="3d_visualization"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Applications
            </TabsTrigger>
            <TabsTrigger
              value="3d_software"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              3D Software
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

