"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
// Define the tab types to ensure type safety
type TabKey = "frontend" | "backend" | "mobile" | "database" | "devops"

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
  type TabKey = "frontend_development" | "backend_development" | "mobile_development" | "database_solutions" | "devops_deployment"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("frontend_development")

  const tabData: TabDataMap = {
    frontend_development: {
      title: "Frontend Development",
      description:
        "Create responsive, interactive user interfaces with modern frontend technologies that deliver exceptional user experiences.",
      technologies: [
        {
          name: "React.js",
          icon: "/services/keyword-research.svg",
          description: "Build dynamic, component-based user interfaces with the industry-leading React library.",
        },
        {
          name: "Next.js",
          icon: "/services/semantic-seo.svg",
          description: "Develop high-performance, SEO-friendly applications with server-side rendering capabilities.",
        },
        {
          name: "TypeScript",
          icon: "/services/intent-optimization.svg",
          description: "Enhance code quality and maintainability with static typing and advanced tooling.",
        },
        {
          name: "Tailwind CSS",
          icon: "/services/competitor-gap.svg",
          description: "Create custom, responsive designs efficiently with utility-first CSS framework.",
        },
        {
          name: "Redux/Context API",
          icon: "/services/longtail-keywords.svg",
          description: "Implement robust state management for complex application data flows.",
        },
      ],
    },
    backend_development: {
      title: "Backend Development",
      description:
        "Build scalable, secure server-side applications that power your business logic and handle data processing efficiently.",
      technologies: [
        {
          name: "Node.js",
          icon: "/services/seo-blog.svg",
          description: "Develop high-performance, event-driven backend services with JavaScript runtime.",
        },
        {
          name: "Express.js",
          icon: "/services/meta-tags.svg",
          description: "Create robust APIs and web applications with minimal and flexible Node.js framework.",
        },
        {
          name: "Python/Django",
          icon: "/services/headings.svg",
          description: "Build feature-rich applications with Python's powerful web framework and ORM.",
        },
        {
          name: "GraphQL",
          icon: "/services/internal-links.svg",
          description: "Implement efficient data fetching with flexible, client-driven API queries.",
        },
        {
          name: "Microservices",
          icon: "/services/content-refresh.svg",
          description: "Design modular, independently deployable services for improved scalability and maintenance.",
        },
      ],
    },
    mobile_development: {
      title: "Mobile App Development",
      description:
        "Develop cross-platform and native mobile applications that provide seamless experiences across all devices.",
      technologies: [
        {
          name: "React Native",
          icon: "/services/guest-posting.svg",
          description: "Build native mobile apps for iOS and Android from a single codebase.",
        },
        {
          name: "Flutter",
          icon: "/services/link-worthy-content.svg",
          description: "Create beautiful, natively compiled applications with Google's UI toolkit.",
        },
        {
          name: "Swift",
          icon: "/services/skyscraper.svg",
          description: "Develop high-performance iOS applications with Apple's modern programming language.",
        },
        {
          name: "Kotlin",
          icon: "/services/broken-link.svg",
          description: "Build native Android applications with concise, safe, and interoperable language.",
        },
        {
          name: "Progressive Web Apps",
          icon: "/services/resource-page.svg",
          description: "Create web applications that offer mobile app-like experiences with offline capabilities.",
        },
      ],
    },
    database_solutions: {
      title: "Database & Storage Solutions",
      description:
        "Implement efficient, secure data storage systems that scale with your application needs and ensure data integrity.",
      technologies: [
        {
          name: "MongoDB",
          icon: "/services/content-calendar.svg",
          description: "Store flexible, document-based data with high-performance NoSQL database.",
        },
        {
          name: "PostgreSQL",
          icon: "/services/topic-clusters.svg",
          description: "Implement robust relational database with advanced features and SQL compliance.",
        },
        {
          name: "Firebase",
          icon: "/services/competitive-analysis.svg",
          description: "Leverage Google's platform for real-time databases, authentication, and cloud functions.",
        },
        {
          name: "Redis",
          icon: "/services/evergreen-content.svg",
          description: "Enhance application performance with in-memory data structure store and caching.",
        },
        {
          name: "AWS S3",
          icon: "/services/content-distribution.svg",
          description: "Store and retrieve any amount of data with scalable cloud object storage.",
        },
      ],
    },
    devops_deployment: {
      title: "DevOps & Deployment",
      description:
        "Streamline development workflows and ensure reliable, scalable application deployment with modern DevOps practices.",
      technologies: [
        {
          name: "Docker",
          icon: "/services/page-speed.svg",
          description: "Package applications into standardized containers for consistent deployment environments.",
        },
        {
          name: "Kubernetes",
          icon: "/services/mobile-seo.svg",
          description: "Orchestrate containerized applications for automated deployment and scaling.",
        },
        {
          name: "CI/CD Pipelines",
          icon: "/services/schema.svg",
          description: "Automate testing and deployment processes for faster, more reliable releases.",
        },
        {
          name: "AWS/Azure/GCP",
          icon: "/services/core-web-vitals.svg",
          description: "Deploy applications on enterprise-grade cloud platforms with global infrastructure.",
        },
        {
          name: "Monitoring & Logging",
          icon: "/services/crawlability.svg",
          description: "Implement comprehensive application monitoring for performance and issue detection.",
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
  Build Powerful Applications That Transform <br/> Your Business
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Develop custom applications that solve your unique business challenges and deliver exceptional user experiences. Our expert development team combines cutting-edge technologies with industry best practices to create scalable, secure, and high-performance solutions.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="frontend_development"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="frontend_development"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend_development"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="mobile_development"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="database_solutions"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Database
            </TabsTrigger>
            <TabsTrigger
              value="devops_deployment"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              DevOps
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

