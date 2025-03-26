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
  type TabKey = "brand_scripts" | "video_scripts" | "ad_scripts" | "web_scripts" | "social_scripts"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("brand_scripts")

  const tabData: TabDataMap = {
    brand_scripts: {
      title: "Brand Storytelling Scripts",
      description:
        "Craft compelling brand narratives that resonate with your audience and establish a strong emotional connection with your target market.",
      technologies: [
        {
          name: "Brand Story Development",
          icon: "/services/brand-story.svg",
          description: "Create authentic narratives that communicate your brand's purpose, values, and unique selling proposition.",
        },
        {
          name: "Company Profile Scripts",
          icon: "/services/company-profile.svg",
          description: "Develop professional scripts that showcase your company's history, achievements, and vision.",
        },
        {
          name: "Mission & Vision Scripts",
          icon: "/services/mission-vision.svg",
          description: "Articulate your organization's purpose and future aspirations in clear, inspiring language.",
        },
        {
          name: "About Us Narratives",
          icon: "/services/about-us.svg",
          description: "Craft engaging stories that humanize your brand and build trust with potential customers.",
        },
        {
          name: "Brand Voice Development",
          icon: "/services/brand-voice.svg",
          description: "Establish a consistent tone and personality that reflects your brand identity across all communications.",
        },
      ],
    },
    video_scripts: {
      title: "Video & Animation Scripts",
      description:
        "Create engaging scripts for videos that captivate viewers, deliver your message effectively, and drive action.",
      technologies: [
        {
          name: "Explainer Video Scripts",
          icon: "/services/explainer-video.svg",
          description: "Simplify complex concepts into clear, engaging narratives that educate your audience.",
        },
        {
          name: "Corporate Video Scripts",
          icon: "/services/corporate-video.svg",
          description: "Develop professional scripts that showcase your company's strengths and achievements.",
        },
        {
          name: "Product Demo Scripts",
          icon: "/services/product-demo.svg",
          description: "Highlight your product's features and benefits in a compelling, solution-focused narrative.",
        },
        {
          name: "Testimonial Video Scripts",
          icon: "/services/testimonial-video.svg",
          description: "Structure customer success stories that build credibility and showcase real-world impact.",
        },
        {
          name: "Animation Storyboards",
          icon: "/services/animation-storyboard.svg",
          description: "Create detailed scene-by-scene narratives that guide the visual storytelling process.",
        },
      ],
    },
    ad_scripts: {
      title: "Advertising & Commercial Scripts",
      description:
        "Develop persuasive ad scripts that capture attention, communicate value, and drive conversions across various platforms.",
      technologies: [
        {
          name: "TV Commercial Scripts",
          icon: "/services/tv-commercial.svg",
          description: "Create memorable, impactful scripts that make the most of your broadcast advertising budget.",
        },
        {
          name: "Radio Ad Scripts",
          icon: "/services/radio-ad.svg",
          description: "Craft audio scripts that use sound, voice, and pacing to create a strong mental image.",
        },
        {
          name: "YouTube Ad Scripts",
          icon: "/services/youtube-ad.svg",
          description: "Develop scripts optimized for digital video platforms with strong hooks and clear CTAs.",
        },
        {
          name: "PPC Ad Copy",
          icon: "/services/ppc-ad.svg",
          description: "Write concise, compelling ad copy that maximizes click-through rates and conversions.",
        },
        {
          name: "Sales Page Scripts",
          icon: "/services/sales-page.svg",
          description: "Create persuasive long-form content that guides prospects through the buying journey.",
        },
      ],
    },
    web_scripts: {
      title: "Website & Landing Page Copy",
      description:
        "Write conversion-focused website copy that engages visitors, communicates value, and guides them toward taking action.",
      technologies: [
        {
          name: "Homepage Scripts",
          icon: "/services/homepage.svg",
          description: "Create compelling introductions to your brand that clearly communicate your value proposition.",
        },
        {
          name: "Service Page Copy",
          icon: "/services/service-page.svg",
          description: "Develop benefit-focused descriptions that highlight how your services solve customer problems.",
        },
        {
          name: "Landing Page Scripts",
          icon: "/services/landing-page.svg",
          description: "Craft high-converting copy that addresses pain points and drives specific user actions.",
        },
        {
          name: "Product Description Scripts",
          icon: "/services/product-description.svg",
          description: "Write engaging, benefit-rich descriptions that showcase your products' unique value.",
        },
        {
          name: "Call-to-Action Scripts",
          icon: "/services/cta.svg",
          description: "Develop persuasive prompts that motivate users to take the next step in their customer journey.",
        },
      ],
    },
    social_scripts: {
      title: "Social Media & Content Scripts",
      description:
        "Create engaging social media content that builds community, drives engagement, and supports your marketing goals.",
      technologies: [
        {
          name: "Social Media Post Scripts",
          icon: "/services/social-post.svg",
          description: "Develop platform-specific content that resonates with your audience and encourages interaction.",
        },
        {
          name: "Video Script Templates",
          icon: "/services/video-template.svg",
          description: "Create reusable frameworks for consistent, on-brand video content across platforms.",
        },
        {
          name: "Podcast Scripts & Outlines",
          icon: "/services/podcast-script.svg",
          description: "Structure engaging audio content with clear introductions, segments, and conclusions.",
        },
        {
          name: "Email Campaign Scripts",
          icon: "/services/email-campaign.svg",
          description: "Craft compelling email sequences that nurture leads and drive conversions.",
        },
        {
          name: "Webinar & Presentation Scripts",
          icon: "/services/webinar-script.svg",
          description: "Develop structured, engaging presentations that educate and persuade your audience.",
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
              Compelling Script Writing Services <br/> That Drive Results
            </h1>
          </div>
          <div>
            <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center text-slate-600" style={{ lineHeight: '1.2' }}>
              From brand stories to video scripts, our professional scriptwriting services transform your ideas into powerful narratives that engage your audience and inspire action. We craft clear, compelling scripts tailored to your brand voice and marketing objectives.
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="brand_scripts"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabKey)}
          className="w-full"
        >
          <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
              <TabsTrigger
                value="brand_scripts"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Brand Scripts
              </TabsTrigger>
              <TabsTrigger
                value="video_scripts"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Video Scripts
              </TabsTrigger>
              <TabsTrigger
                value="ad_scripts"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Ad Scripts
              </TabsTrigger>
              <TabsTrigger
                value="web_scripts"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Website Copy
              </TabsTrigger>
              <TabsTrigger
                value="social_scripts"
                className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
              >
                Social Content
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

