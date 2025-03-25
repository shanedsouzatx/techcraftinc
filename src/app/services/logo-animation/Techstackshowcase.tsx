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
  type TabKey = "keyword_strategy" | "seo_copywriting" | "link_building" | "content_strategy" | "technical_seo"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("keyword_strategy")

  const tabData: TabDataMap = {
    keyword_strategy: {
      title: "Keyword-Driven Content",
      description:
        "Create content that ranks by targeting high-intent keywords. Our strategy ensures maximum visibility and organic traffic growth.",
      technologies: [
        {
          name: "Keyword Research & Analysis",
          icon: "/services/keyword-research.svg",
          description: "Identify high-ranking, low-competition keywords for better search engine placement.",
        },
        {
          name: "Semantic SEO",
          icon: "/services/semantic-seo.svg",
          description: "Enhance relevance by incorporating related keywords and LSI terms.",
        },
        {
          name: "Search Intent Optimization",
          icon: "/services/intent-optimization.svg",
          description: "Align content with user intent to increase engagement and reduce bounce rates.",
        },
        {
          name: "Competitor Keyword Gap Analysis",
          icon: "/services/competitor-gap.svg",
          description: "Identify and target keywords your competitors are missing out on.",
        },
        {
          name: "Long-Tail Keyword Strategy",
          icon: "/services/longtail-keywords.svg",
          description: "Target niche-specific long-tail keywords for higher conversion rates.",
        },
      ],
    },
    seo_copywriting: {
      title: "SEO Copywriting & Optimization",
      description:
        "Craft compelling, optimized content that speaks to both search engines and human readers, boosting rankings and engagement.",
      technologies: [
        {
          name: "SEO Blog Writing",
          icon: "/services/seo-blog.svg",
          description: "Write engaging, informative blog posts that rank and drive organic traffic.",
        },
        {
          name: "Meta Titles & Descriptions",
          icon: "/services/meta-tags.svg",
          description: "Optimize metadata for higher CTR and improved search rankings.",
        },
        {
          name: "Headings & Structure Optimization",
          icon: "/services/headings.svg",
          description: "Enhance readability and SEO performance with well-structured content.",
        },
        {
          name: "Internal Linking Strategy",
          icon: "/services/internal-links.svg",
          description: "Boost site navigation and SEO authority with strategic internal linking.",
        },
        {
          name: "Content Refresh & Updates",
          icon: "/services/content-refresh.svg",
          description: "Revamp old content to maintain relevance and improve rankings over time.",
        },
      ],
    },
    link_building: {
      title: "Content-Driven Link Building",
      description:
        "Leverage high-quality content to earn authoritative backlinks and strengthen domain authority.",
      technologies: [
        {
          name: "Guest Blogging",
          icon: "/services/guest-posting.svg",
          description: "Publish authoritative content on high-DA websites to build credibility and backlinks.",
        },
        {
          name: "Link-Worthy Content Creation",
          icon: "/services/link-worthy-content.svg",
          description: "Produce valuable content that naturally attracts backlinks from reputable sites.",
        },
        {
          name: "Skyscraper Technique",
          icon: "/services/skyscraper.svg",
          description: "Outperform competitor content and earn high-quality links through research-driven articles.",
        },
        {
          name: "Broken Link Building",
          icon: "/services/broken-link.svg",
          description: "Identify and replace broken links with fresh, relevant content to boost SEO.",
        },
        {
          name: "Resource Page Outreach",
          icon: "/services/resource-page.svg",
          description: "Get your content featured on industry-leading resource pages for added exposure.",
        },
      ],
    },
    content_strategy: {
      title: "Content Planning & Strategy",
      description:
        "Develop a data-driven content strategy that aligns with SEO goals and delivers measurable results.",
      technologies: [
        {
          name: "Content Calendar Development",
          icon: "/services/content-calendar.svg",
          description: "Plan and schedule content for consistent publishing and audience engagement.",
        },
        {
          name: "Topic Clusters & Pillar Pages",
          icon: "/services/topic-clusters.svg",
          description: "Create interconnected content to strengthen topical authority in search engines.",
        },
        {
          name: "Competitive Content Analysis",
          icon: "/services/competitive-analysis.svg",
          description: "Analyze competitors' top-performing content and identify gaps for opportunities.",
        },
        {
          name: "Evergreen Content Strategy",
          icon: "/services/evergreen-content.svg",
          description: "Produce timeless content that continues to attract traffic and rankings over time.",
        },
        {
          name: "Content Distribution & Promotion",
          icon: "/services/content-distribution.svg",
          description: "Amplify content reach through social media, email marketing, and partnerships.",
        },
      ],
    },
    technical_seo: {
      title: "Technical SEO & Content Performance",
      description:
        "Optimize content structure, page speed, and mobile-friendliness for improved search rankings and user experience.",
      technologies: [
        {
          name: "Page Speed Optimization",
          icon: "/services/page-speed.svg",
          description: "Enhance site performance by reducing load times and improving user experience.",
        },
        {
          name: "Mobile-First SEO",
          icon: "/services/mobile-seo.svg",
          description: "Ensure your content is fully optimized for mobile search and usability.",
        },
        {
          name: "Schema Markup Implementation",
          icon: "/services/schema.svg",
          description: "Use structured data to enhance search results with rich snippets and featured listings.",
        },
        {
          name: "Core Web Vitals Optimization",
          icon: "/services/core-web-vitals.svg",
          description: "Improve key performance metrics for better rankings and user engagement.",
        },
        {
          name: "Indexing & Crawlability Fixes",
          icon: "/services/crawlability.svg",
          description: "Resolve indexing issues to ensure search engines properly crawl your content.",
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
  Boost Your Search Rankings with High-Impact <br/> SEO Blog Writing
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Craft compelling, keyword-rich content that not only ranks higher on search engines but also engages readers and drives conversions. Our expert SEO blog writing services ensure every article is optimized for visibility, authority, and lasting impact.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="keyword_strategy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="keyword_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Keyword Strategy
            </TabsTrigger>
            <TabsTrigger
              value="seo_copywriting"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              SEO Copywriting
            </TabsTrigger>
            <TabsTrigger
              value="link_building"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Link Building
            </TabsTrigger>
            <TabsTrigger
              value="content_strategy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Content Strategy
            </TabsTrigger>
            <TabsTrigger
              value="technical_seo"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Technical SEO
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

