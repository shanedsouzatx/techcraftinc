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
  type TabKey = "research_writing" | "thought_leadership" | "industry_articles" | "educational_content" | "content_formats"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("research_writing")

  const tabData: TabDataMap = {
    research_writing: {
      title: "Research-Based Articles",
      description:
        "Create authoritative, well-researched articles that establish credibility and provide valuable insights to your audience.",
      technologies: [
        {
          name: "In-Depth Research",
          icon: "/services/research.svg",
          description: "Thorough investigation using credible sources and expert insights for accurate content.",
        },
        {
          name: "Data Analysis",
          icon: "/services/data-analysis.svg",
          description: "Transform complex data into clear, actionable insights and compelling narratives.",
        },
        {
          name: "Expert Interviews",
          icon: "/services/expert-interviews.svg",
          description: "Incorporate industry expert perspectives to add authority and unique viewpoints.",
        },
        {
          name: "Fact Verification",
          icon: "/services/fact-checking.svg",
          description: "Rigorous fact-checking process to ensure accuracy and build reader trust.",
        },
        {
          name: "Source Citation",
          icon: "/services/citations.svg",
          description: "Professional citation of sources to strengthen credibility and provide further reading.",
        },
      ],
    },
    thought_leadership: {
      title: "Thought Leadership Articles",
      description:
        "Position your brand as an industry authority with forward-thinking articles that showcase expertise and innovative perspectives.",
      technologies: [
        {
          name: "Opinion Pieces",
          icon: "/services/opinion-pieces.svg",
          description: "Articulate well-reasoned perspectives on industry trends, challenges, and opportunities.",
        },
        {
          name: "Industry Analysis",
          icon: "/services/industry-analysis.svg",
          description: "Provide expert analysis of market developments and their implications for stakeholders.",
        },
        {
          name: "Future Trends",
          icon: "/services/future-trends.svg",
          description: "Forecast emerging trends and provide strategic insights for industry evolution.",
        },
        {
          name: "Problem-Solution Articles",
          icon: "/services/problem-solution.svg",
          description: "Address industry pain points with innovative approaches and practical solutions.",
        },
        {
          name: "Executive Viewpoints",
          icon: "/services/executive-viewpoints.svg",
          description: "Develop leadership narratives that reflect your organization's vision and expertise.",
        },
      ],
    },
    industry_articles: {
      title: "Industry-Specific Content",
      description:
        "Craft specialized articles tailored to your industry's unique language, challenges, and audience needs.",
      technologies: [
        {
          name: "Technical Articles",
          icon: "/services/technical-articles.svg",
          description: "Translate complex technical concepts into accessible, valuable content for your audience.",
        },
        {
          name: "Case Studies",
          icon: "/services/case-studies.svg",
          description: "Showcase real-world applications, challenges, and results through compelling narratives.",
        },
        {
          name: "Industry News Analysis",
          icon: "/services/news-analysis.svg",
          description: "Provide context and insights on breaking news and developments in your field.",
        },
        {
          name: "Regulatory Updates",
          icon: "/services/regulatory-updates.svg",
          description: "Explain complex regulatory changes and their practical implications for your industry.",
        },
        {
          name: "Comparative Analysis",
          icon: "/services/comparative-analysis.svg",
          description: "Evaluate competing approaches, technologies, or methodologies with expert insight.",
        },
      ],
    },
    educational_content: {
      title: "Educational & Informative Articles",
      description:
        "Educate your audience with clear, comprehensive articles that build understanding and demonstrate your expertise.",
      technologies: [
        {
          name: "How-To Guides",
          icon: "/services/how-to-guides.svg",
          description: "Step-by-step instructions that solve problems and build practical skills for readers.",
        },
        {
          name: "Explanatory Articles",
          icon: "/services/explanatory-articles.svg",
          description: "Clear explanations of complex concepts that build understanding and awareness.",
        },
        {
          name: "Resource Compilations",
          icon: "/services/resource-compilations.svg",
          description: "Curated collections of valuable tools, references, and information for your audience.",
        },
        {
          name: "Glossaries & Definitions",
          icon: "/services/glossaries.svg",
          description: "Clarify industry terminology and concepts to educate newcomers and stakeholders.",
        },
        {
          name: "FAQ Content",
          icon: "/services/faq-content.svg",
          description: "Address common questions with thorough, authoritative answers that build trust.",
        },
      ],
    },
    content_formats: {
      title: "Versatile Article Formats",
      description:
        "Engage your audience with diverse article formats designed for maximum impact and readability across platforms.",
      technologies: [
        {
          name: "Listicles",
          icon: "/services/listicles.svg",
          description: "Scannable, engaging list-based articles that organize information for easy consumption.",
        },
        {
          name: "Long-Form Features",
          icon: "/services/longform-features.svg",
          description: "In-depth explorations of topics that demonstrate comprehensive expertise and authority.",
        },
        {
          name: "Interview Articles",
          icon: "/services/interview-articles.svg",
          description: "Engaging Q&A formats that capture expert insights and authentic perspectives.",
        },
        {
          name: "News & Trend Reports",
          icon: "/services/trend-reports.svg",
          description: "Timely analysis of current developments with context and expert commentary.",
        },
        {
          name: "Narrative Articles",
          icon: "/services/narrative-articles.svg",
          description: "Story-driven content that uses compelling narratives to engage and inform readers.",
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
  Elevate Your Brand With Professional <br/> Article Writing Services
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Craft authoritative, engaging articles that establish your expertise, educate your audience, and enhance your brands credibility. Our professional article writing services deliver well-researched, compelling content that resonates with readers and achieves your communication goals.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="research_writing"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="research_writing"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Research Articles
            </TabsTrigger>
            <TabsTrigger
              value="thought_leadership"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Thought Leadership
            </TabsTrigger>
            <TabsTrigger
              value="industry_articles"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Industry Content
            </TabsTrigger>
            <TabsTrigger
              value="educational_content"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Educational Articles
            </TabsTrigger>
            <TabsTrigger
              value="content_formats"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Article Formats
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

