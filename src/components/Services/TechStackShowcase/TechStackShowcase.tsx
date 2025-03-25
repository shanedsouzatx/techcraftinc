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
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("seo")

  // Define tabData with proper typing
  const tabData: TabDataMap = {
    seo: {
      title: "SEO Content Writing",
      description:
        "Craft content optimized for search engines while maintaining readability and engagement. Effective SEO writing boosts rankings and drives organic traffic.",
      technologies: [
        {
          name: "Keyword Research",
          icon: "/services/tab2.jpg",
          description: "Identify high-ranking and relevant keywords to target for better search visibility.",
        },
        {
          name: "On-Page SEO",
          icon: "/services/tab3.jpg",
          description: "Optimize headings, meta descriptions, and keyword placement to enhance search rankings.",
        },
        {
          name: "Content Optimization",
          icon: "/services/tab4.webp",
          description: "Refine content readability, structure, and keyword density to improve search performance.",
        },
        {
          name: "Internal Linking",
          icon: "/services/tab7.jpg",
          description: "Strategically place links within content to boost engagement and improve crawlability.",
        },
        {
          name: "SEO Copywriting",
          icon: "/services/tab6.jpg",
          description: "Write compelling, keyword-rich copy that drives conversions and engagement.",
        },
      ],
    },
    blogging: {
      title: "Blog & Article Writing",
      description:
        "Engaging blog content that educates, informs, and captivates readers while aligning with brand voice and SEO strategies.",
      technologies: [
        {
          name: "Long-Form Articles",
          icon: "/long-form.svg",
          description: "In-depth, research-backed content designed to establish authority and expertise.",
        },
        {
          name: "Storytelling",
          icon: "/storytelling.svg",
          description: "Craft compelling narratives to make blog content more engaging and relatable.",
        },
        {
          name: "Thought Leadership",
          icon: "/thought-leadership.svg",
          description: "Position your brand as an industry leader with insightful and expert-driven content.",
        },
        {
          name: "Guest Posting",
          icon: "/guest-posting.svg",
          description: "Write articles for external publications to boost brand authority and backlinks.",
        },
        {
          name: "Content Repurposing",
          icon: "/repurposing.svg",
          description: "Transform existing content into various formats like infographics, videos, and social posts.",
        },
      ],
    },
    ecommerce: {
      title: "E-Commerce Copywriting",
      description:
        "Persuasive product descriptions, category pages, and sales copy that turn visitors into loyal customers.",
      technologies: [
        {
          name: "Product Descriptions",
          icon: "/product-description.svg",
          description: "Create compelling descriptions that highlight product benefits and unique selling points.",
        },
        {
          name: "Landing Page Copy",
          icon: "/landing-page.svg",
          description: "Craft persuasive landing pages optimized for conversions and engagement.",
        },
        {
          name: "Call-to-Action (CTA)",
          icon: "/cta.svg",
          description: "Write powerful CTAs that encourage users to take action immediately.",
        },
        {
          name: "A/B Testing",
          icon: "/ab-testing.svg",
          description: "Test different content strategies to optimize conversion rates and user engagement.",
        },
        {
          name: "Emotional Triggers",
          icon: "/emotional-triggers.svg",
          description: "Incorporate psychological triggers that influence buying decisions and customer trust.",
        },
      ],
    },
    technical: {
      title: "Technical & B2B Writing",
      description:
        "Authoritative and well-researched content tailored for businesses, SaaS, and technology-driven industries.",
      technologies: [
        {
          name: "Whitepapers",
          icon: "/whitepaper.svg",
          description: "Detailed reports providing in-depth solutions and insights for industry challenges.",
        },
        {
          name: "Case Studies",
          icon: "/case-study.svg",
          description: "Success stories that demonstrate the impact of products or services with real-world results.",
        },
        {
          name: "SaaS Content",
          icon: "/saas-content.svg",
          description: "Strategic content designed for SaaS companies to educate, convert, and retain customers.",
        },
        {
          name: "Technical Documentation",
          icon: "/tech-doc.svg",
          description: "Comprehensive user guides, manuals, and API documentation for software and products.",
        },
        {
          name: "Enterprise Blogging",
          icon: "/enterprise-blogging.svg",
          description: "Data-driven blogs that establish authority in competitive B2B markets.",
        },
      ],
    },
    branding: {
      title: "Brand Voice & Tone",
      description: "Develop a consistent and impactful brand voice that resonates with your target audience.",
      technologies: [
        {
          name: "Brand Guidelines",
          icon: "/brand-guidelines.svg",
          description: "Define your tone, messaging style, and personality for all written content.",
        },
        {
          name: "Messaging Framework",
          icon: "/messaging-framework.svg",
          description: "Craft key messaging pillars to ensure consistency across all platforms.",
        },
        {
          name: "Social Media Copy",
          icon: "/social-media.svg",
          description: "Engaging content tailored for different platforms like Twitter, LinkedIn, and Instagram.",
        },
        {
          name: "Email Copywriting",
          icon: "/email-copywriting.svg",
          description: "High-converting email sequences that nurture leads and drive conversions.",
        },
        {
          name: "Tone Customization",
          icon: "/tone-customization.svg",
          description: "Adjust writing tone for different audiences, from professional to casual and witty.",
        },
      ],
    },
  }

  return (
    <div className=" bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">

    <div className="container mx-auto py-12 px-4 ">
      <div className="gap-8 mb-3 ">
      <div>
  <h1 className="text-4xl text-center md:text-5xl font-bold  bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  leading-tight uppercase">
    Elevate Your Brand with Powerful Website Content Writing
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
    Craft compelling, SEO-optimized content that captivates your audience and boosts search rankings.  
    From persuasive website copy to engaging blog posts, we create high-quality content that drives traffic, builds credibility, and converts visitors into loyal customers.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="seo"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              SEO
            </TabsTrigger>
            <TabsTrigger
              value="blogging"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Blogging
            </TabsTrigger>
            <TabsTrigger
              value="ecommerce"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Ecommerce
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="branding"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Branding
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

