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
  type TabKey = "brand_strategy" | "visual_identity" | "brand_messaging" | "brand_experience" | "brand_management"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("brand_strategy")

  const tabData: TabDataMap = {
    brand_strategy: {
      title: "Brand Strategy Development",
      description:
        "Create a solid foundation for your brand with strategic planning that defines your unique position in the market and connects with your target audience.",
      technologies: [
        {
          name: "Brand Positioning",
          icon: "/services/brand-positioning.svg",
          description: "Define your unique place in the market that differentiates you from competitors.",
        },
        {
          name: "Target Audience Analysis",
          icon: "/services/audience-analysis.svg",
          description: "Identify and understand your ideal customers to create resonant brand experiences.",
        },
        {
          name: "Competitive Research",
          icon: "/services/competitive-research.svg",
          description: "Analyze competitor brands to identify opportunities and establish your unique advantage.",
        },
        {
          name: "Brand Architecture",
          icon: "/services/brand-architecture.svg",
          description: "Structure your brand portfolio to maximize clarity and business value.",
        },
        {
          name: "Brand Value Proposition",
          icon: "/services/value-proposition.svg",
          description: "Articulate the unique value and benefits your brand delivers to customers.",
        },
      ],
    },
    visual_identity: {
      title: "Visual Identity Design",
      description:
        "Develop a distinctive visual system that communicates your brand personality and creates instant recognition across all touchpoints.",
      technologies: [
        {
          name: "Logo Design",
          icon: "/services/logo-design.svg",
          description: "Create a memorable, versatile mark that embodies your brand essence.",
        },
        {
          name: "Color Palette Development",
          icon: "/services/color-palette.svg",
          description: "Select strategic colors that evoke the right emotions and enhance brand recognition.",
        },
        {
          name: "Typography Selection",
          icon: "/services/typography.svg",
          description: "Choose fonts that reflect your brand personality and ensure readability.",
        },
        {
          name: "Visual Elements & Iconography",
          icon: "/services/visual-elements.svg",
          description: "Design supporting graphics and icons that strengthen your visual identity system.",
        },
        {
          name: "Brand Style Guide",
          icon: "/services/style-guide.svg",
          description: "Create comprehensive guidelines for consistent application of visual elements.",
        },
      ],
    },
    brand_messaging: {
      title: "Brand Voice & Messaging",
      description:
        "Develop a distinctive verbal identity that communicates your brand's personality and resonates with your audience.",
      technologies: [
        {
          name: "Brand Story Development",
          icon: "/services/brand-story.svg",
          description: "Craft a compelling narrative that communicates your purpose and connects emotionally.",
        },
        {
          name: "Messaging Framework",
          icon: "/services/messaging-framework.svg",
          description: "Create a structured approach to what your brand says and how it says it.",
        },
        {
          name: "Tagline & Slogan Creation",
          icon: "/services/tagline-creation.svg",
          description: "Develop memorable phrases that capture your brand essence and value proposition.",
        },
        {
          name: "Brand Voice Guidelines",
          icon: "/services/brand-voice.svg",
          description: "Define your brand's tone, personality, and language for consistent communication.",
        },
        {
          name: "Brand Naming",
          icon: "/services/brand-naming.svg",
          description: "Create distinctive, meaningful names for your company, products, or services.",
        },
      ],
    },
    brand_experience: {
      title: "Brand Experience Design",
      description:
        "Create cohesive, memorable interactions across all customer touchpoints that bring your brand to life.",
      technologies: [
        {
          name: "Customer Journey Mapping",
          icon: "/services/customer-journey.svg",
          description: "Visualize every interaction to ensure consistent brand experiences at each touchpoint.",
        },
        {
          name: "Website Branding",
          icon: "/services/website-branding.svg",
          description: "Translate your brand identity into engaging digital experiences that convert visitors.",
        },
        {
          name: "Social Media Branding",
          icon: "/services/social-branding.svg",
          description: "Develop platform-specific strategies that maintain brand consistency while maximizing engagement.",
        },
        {
          name: "Environmental Branding",
          icon: "/services/environmental-branding.svg",
          description: "Design physical spaces that immerse customers in your brand experience.",
        },
        {
          name: "Packaging Design",
          icon: "/services/packaging-design.svg",
          description: "Create packaging that stands out on shelves and reinforces your brand identity.",
        },
      ],
    },
    brand_management: {
      title: "Brand Management & Growth",
      description:
        "Protect and evolve your brand over time with strategic management practices that build long-term equity.",
      technologies: [
        {
          name: "Brand Guidelines",
          icon: "/services/brand-guidelines.svg",
          description: "Develop comprehensive documentation to ensure consistent brand implementation.",
        },
        {
          name: "Brand Audit & Analysis",
          icon: "/services/brand-audit.svg",
          description: "Evaluate your current brand performance and identify opportunities for improvement.",
        },
        {
          name: "Brand Extension Strategy",
          icon: "/services/brand-extension.svg",
          description: "Plan strategic growth of your brand into new products, services, or markets.",
        },
        {
          name: "Rebranding & Refresh",
          icon: "/services/rebranding.svg",
          description: "Update or transform your brand identity to stay relevant and competitive.",
        },
        {
          name: "Brand Training Programs",
          icon: "/services/brand-training.svg",
          description: "Educate your team on brand standards to ensure consistent implementation.",
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
  Build a Powerful Brand Identity That <br/> Captivates Your Audience
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Create a distinctive, memorable brand that resonates with your target audience and sets you apart from competitors. Our comprehensive branding services help you develop a cohesive identity that builds recognition, trust, and lasting customer loyalty.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="brand_strategy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="brand_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Strategy
            </TabsTrigger>
            <TabsTrigger
              value="visual_identity"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Identity
            </TabsTrigger>
            <TabsTrigger
              value="brand_messaging"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Messaging
            </TabsTrigger>
            <TabsTrigger
              value="brand_experience"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Experience
            </TabsTrigger>
            <TabsTrigger
              value="brand_management"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Management
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

