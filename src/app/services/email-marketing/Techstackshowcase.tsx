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
  type TabKey = "campaign_strategy" | "content_creation" | "automation" | "list_management" | "analytics"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("campaign_strategy")

  const tabData: TabDataMap = {
    campaign_strategy: {
      title: "Strategic Campaign Planning",
      description:
        "Develop targeted email campaigns that engage subscribers and drive measurable business results.",
      technologies: [
        {
          name: "Customer Journey Mapping",
          icon: "/services/keyword-research.svg",
          description: "Create personalized email sequences aligned with each stage of the customer journey.",
        },
        {
          name: "Audience Segmentation",
          icon: "/services/semantic-seo.svg",
          description: "Divide your audience into targeted groups for more relevant, personalized messaging.",
        },
        {
          name: "Campaign Calendar Development",
          icon: "/services/intent-optimization.svg",
          description: "Plan strategic email deployments aligned with business goals and seasonal opportunities.",
        },
        {
          name: "A/B Testing Strategy",
          icon: "/services/competitor-gap.svg",
          description: "Implement systematic testing to optimize subject lines, content, and send times.",
        },
        {
          name: "Multi-Channel Integration",
          icon: "/services/longtail-keywords.svg",
          description: "Coordinate email campaigns with social media, SMS, and other marketing channels.",
        },
      ],
    },
    content_creation: {
      title: "Email Content & Design",
      description:
        "Craft compelling, conversion-focused emails that capture attention and drive action.",
      technologies: [
        {
          name: "Responsive Email Design",
          icon: "/services/seo-blog.svg",
          description: "Create mobile-optimized templates that display perfectly across all devices.",
        },
        {
          name: "Persuasive Copywriting",
          icon: "/services/meta-tags.svg",
          description: "Develop engaging subject lines and body content that drives opens and clicks.",
        },
        {
          name: "Visual Content Creation",
          icon: "/services/headings.svg",
          description: "Design eye-catching graphics and imagery that enhance message effectiveness.",
        },
        {
          name: "Call-to-Action Optimization",
          icon: "/services/internal-links.svg",
          description: "Craft compelling CTAs that increase click-through rates and conversions.",
        },
        {
          name: "Personalization & Dynamic Content",
          icon: "/services/content-refresh.svg",
          description: "Implement content that adapts based on subscriber data and behavior.",
        },
      ],
    },
    automation: {
      title: "Email Automation & Workflows",
      description:
        "Implement automated email sequences that nurture leads, onboard customers, and drive repeat business.",
      technologies: [
        {
          name: "Welcome Series Development",
          icon: "/services/guest-posting.svg",
          description: "Create engaging onboarding sequences that convert new subscribers into customers.",
        },
        {
          name: "Abandoned Cart Recovery",
          icon: "/services/link-worthy-content.svg",
          description: "Implement automated reminders that recapture lost sales and boost revenue.",
        },
        {
          name: "Behavioral Trigger Emails",
          icon: "/services/skyscraper.svg",
          description: "Set up automated messages based on specific user actions and engagement patterns.",
        },
        {
          name: "Lead Nurturing Sequences",
          icon: "/services/broken-link.svg",
          description: "Develop multi-stage workflows that guide prospects through the sales funnel.",
        },
        {
          name: "Re-engagement Campaigns",
          icon: "/services/resource-page.svg",
          description: "Create automated sequences to win back inactive subscribers and customers.",
        },
      ],
    },
    list_management: {
      title: "List Growth & Management",
      description:
        "Build and maintain a healthy, engaged email list that delivers consistent results.",
      technologies: [
        {
          name: "Opt-in Strategy & Form Design",
          icon: "/services/content-calendar.svg",
          description: "Create compelling sign-up forms and lead magnets that grow your subscriber base.",
        },
        {
          name: "List Hygiene & Maintenance",
          icon: "/services/topic-clusters.svg",
          description: "Implement regular cleaning processes to maintain deliverability and engagement.",
        },
        {
          name: "Subscriber Preference Management",
          icon: "/services/competitive-analysis.svg",
          description: "Give subscribers control over content preferences to improve relevance and retention.",
        },
        {
          name: "Compliance & Permission Management",
          icon: "/services/evergreen-content.svg",
          description: "Ensure all email practices adhere to GDPR, CAN-SPAM, and other regulations.",
        },
        {
          name: "List Segmentation & Targeting",
          icon: "/services/content-distribution.svg",
          description: "Develop sophisticated segments based on demographics, behavior, and engagement.",
        },
      ],
    },
    analytics: {
      title: "Performance Analytics & Optimization",
      description:
        "Track, analyze, and continuously improve email performance to maximize ROI.",
      technologies: [
        {
          name: "Key Metric Tracking",
          icon: "/services/page-speed.svg",
          description: "Monitor open rates, click-through rates, conversions, and other critical metrics.",
        },
        {
          name: "Deliverability Monitoring",
          icon: "/services/mobile-seo.svg",
          description: "Track inbox placement and implement strategies to avoid spam filters.",
        },
        {
          name: "Revenue Attribution",
          icon: "/services/schema.svg",
          description: "Measure the direct impact of email campaigns on sales and customer lifetime value.",
        },
        {
          name: "Performance Benchmarking",
          icon: "/services/core-web-vitals.svg",
          description: "Compare your results against industry standards to identify improvement areas.",
        },
        {
          name: "Continuous Optimization",
          icon: "/services/crawlability.svg",
          description: "Implement data-driven improvements to consistently enhance campaign performance.",
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
  Drive Conversions with Strategic <br/> Email Marketing
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Connect directly with your audience through personalized, conversion-focused email campaigns. Our comprehensive email marketing services combine strategic planning, compelling content, and data-driven optimization to deliver measurable results.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="campaign_strategy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="campaign_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Campaign Strategy
            </TabsTrigger>
            <TabsTrigger
              value="content_creation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Content & Design
            </TabsTrigger>
            <TabsTrigger
              value="automation"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Automation
            </TabsTrigger>
            <TabsTrigger
              value="list_management"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              List Management
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Analytics
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

