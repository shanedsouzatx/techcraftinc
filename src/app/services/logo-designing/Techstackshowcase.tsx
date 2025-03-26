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
  type TabKey = "logo_design" | "visual_identity" | "design_process" | "file_formats" | "logo_applications"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("logo_design")

  const tabData: TabDataMap = {
    logo_design: {
      title: "Logo Design Styles",
      description:
        "Explore different logo design approaches to find the perfect style that represents your brand's personality and resonates with your audience.",
      technologies: [
        {
          name: "Wordmark Logos",
          icon: "/services/wordmark-logo.svg",
          description: "Text-based logos that showcase your brand name with distinctive typography and styling.",
        },
        {
          name: "Lettermark Logos",
          icon: "/services/lettermark-logo.svg",
          description: "Monogram-style logos using initials or abbreviations for a clean, memorable identity.",
        },
        {
          name: "Symbol & Icon Logos",
          icon: "/services/symbol-logo.svg",
          description: "Distinctive graphic elements that create instant brand recognition without text.",
        },
        {
          name: "Combination Marks",
          icon: "/services/combination-mark.svg",
          description: "Integrated text and symbol designs that offer versatility and comprehensive branding.",
        },
        {
          name: "Emblem Logos",
          icon: "/services/emblem-logo.svg",
          description: "Traditional designs with text inside a symbol for a classic, established feel.",
        },
      ],
    },
    visual_identity: {
      title: "Visual Identity Elements",
      description:
        "Create a complete visual identity system with complementary elements that enhance your logo and strengthen brand recognition.",
      technologies: [
        {
          name: "Color Psychology",
          icon: "/services/color-psychology.svg",
          description: "Strategic color selection that evokes specific emotions and aligns with your brand personality.",
        },
        {
          name: "Typography Selection",
          icon: "/services/typography-selection.svg",
          description: "Choosing fonts that complement your logo and reinforce your brand's character.",
        },
        {
          name: "Secondary Graphics",
          icon: "/services/secondary-graphics.svg",
          description: "Supporting visual elements that create a cohesive brand system beyond your primary logo.",
        },
        {
          name: "Logo Variations",
          icon: "/services/logo-variations.svg",
          description: "Alternative versions of your logo optimized for different contexts and applications.",
        },
        {
          name: "Visual Style Guide",
          icon: "/services/style-guide.svg",
          description: "Comprehensive documentation of your visual identity for consistent implementation.",
        },
      ],
    },
    design_process: {
      title: "Logo Design Process",
      description:
        "Our proven design methodology ensures we create a logo that perfectly captures your brand essence and meets your business objectives.",
      technologies: [
        {
          name: "Brand Discovery",
          icon: "/services/brand-discovery.svg",
          description: "In-depth exploration of your brand values, audience, and competitive landscape.",
        },
        {
          name: "Concept Development",
          icon: "/services/concept-development.svg",
          description: "Creative ideation and sketching to explore multiple design directions.",
        },
        {
          name: "Digital Rendering",
          icon: "/services/digital-rendering.svg",
          description: "Transforming concepts into polished digital designs with precision and detail.",
        },
        {
          name: "Refinement & Iteration",
          icon: "/services/refinement.svg",
          description: "Collaborative feedback process to perfect your logo design.",
        },
        {
          name: "Finalization & Delivery",
          icon: "/services/finalization.svg",
          description: "Preparing and delivering your logo in all necessary formats for immediate use.",
        },
      ],
    },
    file_formats: {
      title: "Logo File Formats & Deliverables",
      description:
        "Receive your logo in all the formats you need for seamless implementation across digital and print applications.",
      technologies: [
        {
          name: "Vector Files",
          icon: "/services/vector-files.svg",
          description: "Scalable formats (AI, EPS, SVG) that maintain quality at any size.",
        },
        {
          name: "Raster Files",
          icon: "/services/raster-files.svg",
          description: "Web-ready formats (PNG, JPG) optimized for digital applications.",
        },
        {
          name: "Color Variations",
          icon: "/services/color-variations.svg",
          description: "Full-color, black, white, and reversed versions for different backgrounds.",
        },
        {
          name: "Transparent Backgrounds",
          icon: "/services/transparent-bg.svg",
          description: "Clean logo files without backgrounds for flexible placement.",
        },
        {
          name: "Source Files",
          icon: "/services/source-files.svg",
          description: "Original design files for future modifications and adaptations.",
        },
      ],
    },
    logo_applications: {
      title: "Logo Applications & Implementation",
      description:
        "See how your new logo can be effectively implemented across various touchpoints to build a consistent brand presence.",
      technologies: [
        {
          name: "Digital Applications",
          icon: "/services/digital-applications.svg",
          description: "Website, social media, email signatures, and digital marketing materials.",
        },
        {
          name: "Print Materials",
          icon: "/services/print-materials.svg",
          description: "Business cards, letterheads, brochures, and promotional items.",
        },
        {
          name: "Signage & Environmental",
          icon: "/services/signage.svg",
          description: "Office signs, retail displays, vehicle wraps, and physical spaces.",
        },
        {
          name: "Merchandise & Products",
          icon: "/services/merchandise.svg",
          description: "Branded products, packaging, labels, and promotional items.",
        },
        {
          name: "Digital Advertising",
          icon: "/services/digital-advertising.svg",
          description: "Banner ads, social media graphics, and digital marketing assets.",
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
  Create a Distinctive Logo That Makes <br/> Your Brand Unforgettable
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Design a professional, memorable logo that captures your brand's essence and creates instant recognition. Our expert logo design services deliver custom visual identities that stand out from competitors and resonate with your target audience.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="logo_design"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="logo_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Logo Styles
            </TabsTrigger>
            <TabsTrigger
              value="visual_identity"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Visual Identity
            </TabsTrigger>
            <TabsTrigger
              value="design_process"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Design Process
            </TabsTrigger>
            <TabsTrigger
              value="file_formats"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              File Formats
            </TabsTrigger>
            <TabsTrigger
              value="logo_applications"
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

