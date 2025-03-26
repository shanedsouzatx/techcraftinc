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
  type TabKey = "design_elements" | "responsive_design" | "frontend_tech" | "user_experience" | "website_features"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("design_elements")

  const tabData: TabDataMap = {
    design_elements: {
      title: "Modern Design Elements",
      description:
        "Create visually stunning websites with contemporary design elements that capture attention and reflect your brand identity.",
      technologies: [
        {
          name: "Custom Typography",
          icon: "/services/typography.svg",
          description: "Unique font selections and text styling that enhance readability and brand personality.",
        },
        {
          name: "Color Psychology",
          icon: "/services/color-palette.svg",
          description: "Strategic color schemes that evoke specific emotions and reinforce brand messaging.",
        },
        {
          name: "Visual Hierarchy",
          icon: "/services/visual-hierarchy.svg",
          description: "Thoughtful arrangement of elements to guide users' attention to key information and actions.",
        },
        {
          name: "Micro-Interactions",
          icon: "/services/micro-interactions.svg",
          description: "Subtle animations and feedback that create engaging, interactive user experiences.",
        },
        {
          name: "White Space Utilization",
          icon: "/services/whitespace.svg",
          description: "Strategic use of negative space to improve readability, focus, and overall aesthetic appeal.",
        },
      ],
    },
    responsive_design: {
      title: "Responsive & Adaptive Design",
      description:
        "Ensure your website looks and functions perfectly across all devices with fluid layouts and device-specific optimizations.",
      technologies: [
        {
          name: "Mobile-First Approach",
          icon: "/services/mobile-first.svg",
          description: "Design that prioritizes mobile experience first, then scales up for larger screens.",
        },
        {
          name: "Fluid Grid Layouts",
          icon: "/services/fluid-grid.svg",
          description: "Flexible grid systems that adapt seamlessly to different screen sizes and orientations.",
        },
        {
          name: "Responsive Images",
          icon: "/services/responsive-images.svg",
          description: "Image optimization techniques that ensure fast loading and proper display across devices.",
        },
        {
          name: "Breakpoint Optimization",
          icon: "/services/breakpoints.svg",
          description: "Strategic screen size thresholds where layouts adjust for optimal viewing experience.",
        },
        {
          name: "Touch-Friendly Elements",
          icon: "/services/touch-friendly.svg",
          description: "Interactive components designed specifically for touchscreen usability and navigation.",
        },
      ],
    },
    frontend_tech: {
      title: "Frontend Technologies",
      description:
        "Leverage cutting-edge web technologies to create fast, interactive, and feature-rich website experiences.",
      technologies: [
        {
          name: "React.js Development",
          icon: "/services/react.svg",
          description: "Component-based architecture for building dynamic, high-performance user interfaces.",
        },
        {
          name: "CSS Frameworks",
          icon: "/services/css-frameworks.svg",
          description: "Tailwind, Bootstrap, and custom frameworks for efficient, consistent styling.",
        },
        {
          name: "JavaScript Animation",
          icon: "/services/js-animation.svg",
          description: "GSAP, Framer Motion, and custom animations that bring your website to life.",
        },
        {
          name: "Next.js Implementation",
          icon: "/services/nextjs.svg",
          description: "Server-side rendering and static site generation for optimal performance and SEO.",
        },
        {
          name: "Progressive Web Apps",
          icon: "/services/pwa.svg",
          description: "App-like experiences with offline capabilities, push notifications, and home screen installation.",
        },
      ],
    },
    user_experience: {
      title: "User Experience & Interface Design",
      description:
        "Create intuitive, user-centered designs that guide visitors through your website and encourage desired actions.",
      technologies: [
        {
          name: "Intuitive Navigation",
          icon: "/services/navigation.svg",
          description: "Clear, logical menu structures that help users find information quickly and easily.",
        },
        {
          name: "Call-to-Action Optimization",
          icon: "/services/cta-design.svg",
          description: "Strategic button design and placement to maximize conversion rates and user engagement.",
        },
        {
          name: "User Flow Mapping",
          icon: "/services/user-flow.svg",
          description: "Planned user journeys that guide visitors toward specific goals and conversions.",
        },
        {
          name: "Accessibility Compliance",
          icon: "/services/accessibility.svg",
          description: "WCAG-compliant designs ensuring your website is usable by people with diverse abilities.",
        },
        {
          name: "Form Design & Validation",
          icon: "/services/form-design.svg",
          description: "User-friendly forms with inline validation and error handling for higher completion rates.",
        },
      ],
    },
    website_features: {
      title: "Advanced Website Features",
      description:
        "Enhance your website with powerful functionality that improves user engagement and supports business goals.",
      technologies: [
        {
          name: "Content Management Systems",
          icon: "/services/cms.svg",
          description: "User-friendly backends that allow easy content updates without technical knowledge.",
        },
        {
          name: "E-commerce Integration",
          icon: "/services/ecommerce.svg",
          description: "Secure, feature-rich online stores with product management and payment processing.",
        },
        {
          name: "Search Functionality",
          icon: "/services/search.svg",
          description: "Advanced search capabilities with filters and suggestions for improved user experience.",
        },
        {
          name: "Performance Optimization",
          icon: "/services/performance.svg",
          description: "Speed enhancements through code splitting, lazy loading, and resource optimization.",
        },
        {
          name: "Analytics Integration",
          icon: "/services/analytics.svg",
          description: "Data collection and reporting tools to track user behavior and website performance.",
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
  Create a Stunning Website That Drives <br/> Results for Your Business
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Design a professional, user-friendly website that not only looks impressive but also converts visitors into customers. Our expert web design services combine visual appeal with strategic functionality to create digital experiences that elevate your brand and achieve your business goals.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="design_elements"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="design_elements"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Design Elements
            </TabsTrigger>
            <TabsTrigger
              value="responsive_design"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Responsive Design
            </TabsTrigger>
            <TabsTrigger
              value="frontend_tech"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Frontend Tech
            </TabsTrigger>
            <TabsTrigger
              value="user_experience"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              User Experience
            </TabsTrigger>
            <TabsTrigger
              value="website_features"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Website Features
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

