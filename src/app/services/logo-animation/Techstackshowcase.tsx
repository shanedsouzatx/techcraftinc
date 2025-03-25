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
  // Update the TabKey type to match the actual keys in tabData
  type TabKey = "2d_animation" | "3d_animation" | "motion_graphics" | "character_animation" | "interactive_logos"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("2d_animation")

  const tabData: TabDataMap = {
    2d_animation: {
      title: "2D Logo Animation",
      description:
        "Bring your brand to life with smooth, engaging 2D logo animations that capture attention and enhance brand recognition.",
      technologies: [
        {
          name: "Vector Animation",
          icon: "/services/vector-animation.svg",
          description: "Transform static vector logos into fluid, dynamic animations with precision and clarity.",
        },
        {
          name: "Kinetic Typography",
          icon: "/services/kinetic-typography.svg",
          description: "Add movement to your brand text with creative, eye-catching animated typography.",
        },
        {
          name: "Shape Morphing",
          icon: "/services/shape-morphing.svg",
          description: "Seamlessly transform logo elements into different shapes for captivating visual storytelling.",
        },
        {
          name: "Frame-by-Frame Animation",
          icon: "/services/frame-animation.svg",
          description: "Create detailed, handcrafted animations with traditional animation techniques.",
        },
        {
          name: "Liquid Motion Effects",
          icon: "/services/liquid-motion.svg",
          description: "Add fluid, organic movements to your logo for a modern, dynamic appearance.",
        },
      ],
    },
    3d_animation: {
      title: "3D Logo Animation",
      description:
        "Elevate your brand with stunning 3D logo animations that add depth, dimension, and a premium feel to your visual identity.",
      technologies: [
        {
          name: "3D Modeling & Rendering",
          icon: "/services/3d-modeling.svg",
          description: "Transform your 2D logo into a fully realized 3D model with realistic textures and lighting.",
        },
        {
          name: "Particle Effects",
          icon: "/services/particle-effects.svg",
          description: "Add dynamic particle systems that bring energy and movement to your logo animation.",
        },
        {
          name: "Realistic Materials",
          icon: "/services/realistic-materials.svg",
          description: "Apply photorealistic materials like metal, glass, or custom textures to your 3D logo.",
        },
        {
          name: "Environmental Integration",
          icon: "/services/environmental.svg",
          description: "Place your 3D logo in custom environments that enhance your brand story.",
        },
        {
          name: "Camera Movements",
          icon: "/services/camera-movement.svg",
          description: "Create cinematic reveals with professional camera movements and depth of field effects.",
        },
      ],
    },
    motion_graphics: {
      title: "Motion Graphics & VFX",
      description:
        "Combine your logo with stunning visual effects and motion graphics to create memorable brand experiences.",
      technologies: [
        {
          name: "Compositing & VFX",
          icon: "/services/compositing.svg",
          description: "Blend multiple visual elements with your logo for complex, layered animations.",
        },
        {
          name: "Light & Glow Effects",
          icon: "/services/light-effects.svg",
          description: "Add dynamic lighting, lens flares, and glow effects to enhance your logo's presence.",
        },
        {
          name: "Smoke & Fire Simulations",
          icon: "/services/smoke-fire.svg",
          description: "Incorporate realistic elemental effects that interact with your logo elements.",
        },
        {
          name: "Geometric Transitions",
          icon: "/services/geometric.svg",
          description: "Use modern geometric shapes and transitions to create sleek, contemporary animations.",
        },
        {
          name: "Color Dynamics",
          icon: "/services/color-dynamics.svg",
          description: "Implement color shifts and gradients that evolve throughout your logo animation.",
        },
      ],
    },
    character_animation: {
      title: "Character & Mascot Animation",
      description:
        "Give personality to your brand mascots and characters with expressive, engaging animations that connect with your audience.",
      technologies: [
        {
          name: "Character Rigging",
          icon: "/services/character-rigging.svg",
          description: "Create flexible animation systems for your brand mascots or characters.",
        },
        {
          name: "Facial Animation",
          icon: "/services/facial-animation.svg",
          description: "Add expressive emotions and personality to character-based logos.",
        },
        {
          name: "Walk Cycles & Movement",
          icon: "/services/walk-cycles.svg",
          description: "Develop natural, fluid movements for mascots that reflect your brand's personality.",
        },
        {
          name: "Gesture & Body Language",
          icon: "/services/gesture.svg",
          description: "Communicate brand values through carefully crafted character movements and gestures.",
        },
        {
          name: "Stylized Animation",
          icon: "/services/stylized.svg",
          description: "Apply unique animation styles that match your brand's visual identity and tone.",
        },
      ],
    },
    interactive_logos: {
      title: "Interactive & Web Logos",
      description:
        "Create responsive, interactive logo animations that engage users on websites, apps, and digital platforms.",
      technologies: [
        {
          name: "SVG Animation",
          icon: "/services/svg-animation.svg",
          description: "Develop lightweight, scalable vector animations for optimal web performance.",
        },
        {
          name: "Hover & Click Effects",
          icon: "/services/hover-effects.svg",
          description: "Add interactive elements that respond to user actions for engaging web experiences.",
        },
        {
          name: "Loading Animations",
          icon: "/services/loading.svg",
          description: "Transform your logo into engaging loading screens and transitions for digital platforms.",
        },
        {
          name: "Scroll-Triggered Animation",
          icon: "/services/scroll-trigger.svg",
          description: "Create animations that respond to user scrolling for dynamic website experiences.",
        },
        {
          name: "Lottie Integration",
          icon: "/services/lottie.svg",
          description: "Implement lightweight, high-quality animations across multiple platforms with Lottie.",
        },
      ],
    },
  };
  
  return (
    <div className="bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto py-12 px-4">
        <div className="gap-8 mb-3">
          <div>
            <h1 className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text leading-tight uppercase">
              Bring Your Brand To Life With <br/> Dynamic Logo Animation
            </h1>
          </div>
          <div>
            <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center text-slate-600" style={{ lineHeight: '1.2' }}>
              Transform your static logo into a captivating visual experience that leaves a lasting impression. Our expert animation team creates fluid, professional logo animations that enhance brand recognition and engage your audience across all platforms.
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="2d_animation"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabKey)}
          className="w-full"
        >
          <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
              <TabsTrigger
                value="2d_animation"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                2D Animation
              </TabsTrigger>
              <TabsTrigger
                value="3d_animation"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                3D Animation
              </TabsTrigger>
              <TabsTrigger
                value="motion_graphics"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Motion Graphics
              </TabsTrigger>
              <TabsTrigger
                value="character_animation"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Character Animation
              </TabsTrigger>
              <TabsTrigger
                value="interactive_logos"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Interactive Logos
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
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{tabData[activeTab].title}</h2>
                <p className="text-slate-600 max-w-3xl mx-auto">{tabData[activeTab].description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-11">
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
                      <Image 
                        src={tech.icon || "/placeholder.svg"} 
                        alt={tech.name} 
                        width={100}
                        height={100}
                        className="w-[100%] h-[100%] object-contain !p-0 !m-0" 
                      />
                    </motion.div>
                    <h3 className="text-md font-medium text-[#221E46] text-center">{tech.name}</h3>
                    <div className="mt-2 group-hover:scale-105 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
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

