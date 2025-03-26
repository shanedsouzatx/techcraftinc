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
  // Define the tab types specific to logo animation
  type TabKey = "animation_styles" | "technical_aspects" | "applications" | "production_process" | "delivery_formats"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("animation_styles")

  const tabData: TabDataMap = {
    animation_styles: {
      title: "Logo Animation Styles",
      description:
        "Bring your brand to life with dynamic logo animations that capture attention and enhance brand recognition.",
      technologies: [
        {
          name: "Kinetic Typography",
          icon: "/services/keyword-research.svg",
          description: "Transform your text-based logo into dynamic, moving typography that captures attention.",
        },
        {
          name: "Morphing Animation",
          icon: "/services/semantic-seo.svg",
          description: "Seamlessly transform your logo between different shapes and forms for a fluid visual experience.",
        },
        {
          name: "3D Logo Animation",
          icon: "/services/intent-optimization.svg",
          description: "Add depth and dimension to your logo with realistic 3D movement and perspective shifts.",
        },
        {
          name: "Particle Effects",
          icon: "/services/competitor-gap.svg",
          description: "Create stunning particle assemblies and disintegrations that add energy to your logo reveal.",
        },
        {
          name: "Character Animation",
          icon: "/services/longtail-keywords.svg",
          description: "Bring mascot or character-based logos to life with personality-driven animation.",
        },
      ],
    },
    technical_aspects: {
      title: "Technical Excellence",
      description:
        "Leverage cutting-edge animation techniques and software to create professional, high-impact logo animations.",
      technologies: [
        {
          name: "Smooth Motion Curves",
          icon: "/services/seo-blog.svg",
          description: "Implement precise easing and timing for natural, professional movement in your logo animation.",
        },
        {
          name: "High-Resolution Rendering",
          icon: "/services/meta-tags.svg",
          description: "Ensure your logo animation looks crisp and professional across all devices and screen sizes.",
        },
        {
          name: "Seamless Looping",
          icon: "/services/headings.svg",
          description: "Create perfect loop animations that can play continuously without visible transitions.",
        },
        {
          name: "Sound Design Integration",
          icon: "/services/internal-links.svg",
          description: "Enhance your logo animation with custom sound effects and audio that reinforce your brand.",
        },
        {
          name: "Responsive Animation",
          icon: "/services/content-refresh.svg",
          description: "Adapt your logo animation for different aspect ratios and platforms while maintaining impact.",
        },
      ],
    },
    applications: {
      title: "Logo Animation Applications",
      description:
        "Implement your animated logo across multiple platforms and touchpoints for consistent brand experiences.",
      technologies: [
        {
          name: "Website Integration",
          icon: "/services/guest-posting.svg",
          description: "Incorporate your animated logo into website headers, loading screens, and interactive elements.",
        },
        {
          name: "Video Production",
          icon: "/services/link-worthy-content.svg",
          description: "Create professional video intros and outros featuring your animated logo for consistent branding.",
        },
        {
          name: "Social Media Content",
          icon: "/services/skyscraper.svg",
          description: "Develop attention-grabbing animated logos optimized for various social media platforms.",
        },
        {
          name: "Digital Advertising",
          icon: "/services/broken-link.svg",
          description: "Enhance digital ad campaigns with eye-catching animated logos that increase brand recall.",
        },
        {
          name: "Presentation Templates",
          icon: "/services/resource-page.svg",
          description: "Integrate your animated logo into presentation templates for consistent professional branding.",
        },
      ],
    },
    production_process: {
      title: "Animation Production Process",
      description:
        "Experience a streamlined, collaborative process that transforms your static logo into a dynamic brand asset.",
      technologies: [
        {
          name: "Concept Development",
          icon: "/services/content-calendar.svg",
          description: "Create storyboards and animation concepts that align with your brand personality and goals.",
        },
        {
          name: "Motion Design",
          icon: "/services/topic-clusters.svg",
          description: "Develop detailed motion plans that define how your logo elements will move and interact.",
        },
        {
          name: "Animation Production",
          icon: "/services/competitive-analysis.svg",
          description: "Bring your logo to life through expert animation techniques and professional software.",
        },
        {
          name: "Refinement & Feedback",
          icon: "/services/evergreen-content.svg",
          description: "Fine-tune animations through collaborative feedback to achieve the perfect brand expression.",
        },
        {
          name: "Final Delivery",
          icon: "/services/content-distribution.svg",
          description: "Receive your animated logo in multiple formats optimized for different platforms and uses.",
        },
      ],
    },
    delivery_formats: {
      title: "File Formats & Delivery",
      description:
        "Receive your animated logo in multiple optimized formats ready for immediate implementation across all platforms.",
      technologies: [
        {
          name: "Video Files (MP4/MOV)",
          icon: "/services/page-speed.svg",
          description: "High-quality video files with transparency for versatile use across multiple platforms.",
        },
        {
          name: "GIF Animation",
          icon: "/services/mobile-seo.svg",
          description: "Lightweight animated GIFs perfect for email signatures, messaging apps, and simple web uses.",
        },
        {
          name: "JSON Animation",
          icon: "/services/schema.svg",
          description: "Lottie/JSON files for lightweight, scalable web animations with interactive capabilities.",
        },
        {
          name: "Source Files",
          icon: "/services/core-web-vitals.svg",
          description: "Editable project files for future modifications and adaptations of your animated logo.",
        },
        {
          name: "Social Media Packages",
          icon: "/services/crawlability.svg",
          description: "Platform-specific formats optimized for each social media channel's requirements.",
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
  Bring Your Brand to Life with Dynamic <br/> Logo Animation
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Transform your static logo into a memorable motion experience that captures attention and strengthens brand recognition. Our expert logo animation services create dynamic visual assets that enhance your digital presence across all platforms.
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
              value="technical_aspects"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Technical Excellence
            </TabsTrigger>
            <TabsTrigger
              value="applications"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Applications
            </TabsTrigger>
            <TabsTrigger
              value="production_process"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Production Process
            </TabsTrigger>
            <TabsTrigger
              value="delivery_formats"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              File Formats
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

