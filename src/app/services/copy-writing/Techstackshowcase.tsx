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
  type TabKey = "website_copy" | "marketing_copy" | "brand_copy" | "product_copy" | "digital_copy"
  
  // Use the TabKey type for activeTab
  const [activeTab, setActiveTab] = useState<TabKey>("website_copy")

  const tabData: TabDataMap = {
    website_copy: {
      title: "Website Copywriting",
      description:
        "Create compelling website content that engages visitors, communicates your value proposition, and drives conversions.",
      technologies: [
        {
          name: "Homepage Copy",
          icon: "/services/homepage-copy.svg",
          description: "Craft attention-grabbing headlines and content that clearly communicate your brand's value.",
        },
        {
          name: "About Us Pages",
          icon: "/services/about-us-copy.svg",
          description: "Tell your brand story in a way that builds trust and emotional connection with visitors.",
        },
        {
          name: "Service Pages",
          icon: "/services/service-pages.svg",
          description: "Highlight benefits and solutions that address your customers' specific pain points.",
        },
        {
          name: "Landing Pages",
          icon: "/services/landing-pages.svg",
          description: "Create high-converting pages focused on specific offers, products, or campaigns.",
        },
        {
          name: "Contact & CTA Copy",
          icon: "/services/cta-copy.svg",
          description: "Develop persuasive calls-to-action that motivate visitors to take the next step.",
        },
      ],
    },
    marketing_copy: {
      title: "Marketing & Advertising Copy",
      description:
        "Develop persuasive marketing materials that capture attention, communicate value, and drive action across channels.",
      technologies: [
        {
          name: "Email Campaigns",
          icon: "/services/email-copy.svg",
          description: "Create engaging email sequences that nurture leads and drive conversions.",
        },
        {
          name: "Ad Copy",
          icon: "/services/ad-copy.svg",
          description: "Write compelling ads for PPC, social media, and display advertising that maximize ROI.",
        },
        {
          name: "Sales Letters",
          icon: "/services/sales-letters.svg",
          description: "Craft persuasive long-form content that guides prospects through the buying journey.",
        },
        {
          name: "Brochures & Flyers",
          icon: "/services/brochure-copy.svg",
          description: "Develop print materials that effectively communicate your offerings and value.",
        },
        {
          name: "Case Studies",
          icon: "/services/case-studies.svg",
          description: "Tell customer success stories that demonstrate your solutions' real-world impact.",
        },
      ],
    },
    brand_copy: {
      title: "Brand Messaging & Voice",
      description:
        "Establish a consistent, compelling brand voice that resonates with your audience and differentiates your business.",
      technologies: [
        {
          name: "Brand Messaging Framework",
          icon: "/services/brand-messaging.svg",
          description: "Develop core messaging that clearly articulates your value proposition and brand promise.",
        },
        {
          name: "Taglines & Slogans",
          icon: "/services/taglines.svg",
          description: "Create memorable phrases that capture your brand essence and stick in customers' minds.",
        },
        {
          name: "Brand Story Development",
          icon: "/services/brand-story.svg",
          description: "Craft authentic narratives that communicate your purpose, values, and unique position.",
        },
        {
          name: "Mission & Vision Statements",
          icon: "/services/mission-vision.svg",
          description: "Articulate your organization's purpose and future aspirations in clear, inspiring language.",
        },
        {
          name: "Brand Voice Guidelines",
          icon: "/services/brand-voice.svg",
          description: "Establish consistent tone and personality guidelines for all brand communications.",
        },
      ],
    },
    product_copy: {
      title: "Product & Sales Copy",
      description:
        "Create persuasive product descriptions and sales materials that highlight benefits and drive purchasing decisions.",
      technologies: [
        {
          name: "Product Descriptions",
          icon: "/services/product-descriptions.svg",
          description: "Transform features into compelling benefits that showcase your products' unique value.",
        },
        {
          name: "Sales Pages",
          icon: "/services/sales-pages.svg",
          description: "Develop high-converting pages that address objections and guide customers to purchase.",
        },
        {
          name: "Catalog Copy",
          icon: "/services/catalog-copy.svg",
          description: "Create consistent, benefit-focused descriptions for product catalogs and collections.",
        },
        {
          name: "Feature Announcements",
          icon: "/services/feature-announcements.svg",
          description: "Introduce new products or features in a way that generates excitement and adoption.",
        },
        {
          name: "Promotional Offers",
          icon: "/services/promotional-copy.svg",
          description: "Craft limited-time offers and promotions that create urgency and drive immediate action.",
        },
      ],
    },
    digital_copy: {
      title: "Digital & Social Media Copy",
      description:
        "Develop engaging content for digital platforms that builds community, drives engagement, and supports marketing goals.",
      technologies: [
        {
          name: "Social Media Content",
          icon: "/services/social-media-copy.svg",
          description: "Create platform-specific posts that engage your audience and encourage interaction.",
        },
        {
          name: "Blog Articles",
          icon: "/services/blog-copy.svg",
          description: "Develop informative, engaging blog content that establishes authority and drives traffic.",
        },
        {
          name: "Video Scripts",
          icon: "/services/video-scripts.svg",
          description: "Write compelling scripts for videos that captivate viewers and deliver your message.",
        },
        {
          name: "Podcast Content",
          icon: "/services/podcast-copy.svg",
          description: "Create engaging audio content with clear introductions, segments, and calls-to-action.",
        },
        {
          name: "Newsletters",
          icon: "/services/newsletter-copy.svg",
          description: "Develop regular communications that nurture customer relationships and provide value.",
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
  Transform Your Message With Powerful <br/> Professional Copywriting
  </h1>
</div>
<div>
  <p className="text-base md:text-lg px-9 mb-11 md:px-20 text-center  text-slate-600"  style={{ lineHeight: '1.2' }}>
  Craft compelling, conversion-focused copy that captivates your audience, communicates your value, and drives action. Our expert copywriting services ensure every word works strategically to build your brand and generate results.
  </p>
</div>

      </div>

      <Tabs
        defaultValue="website_copy"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabKey)}
        className="w-full"
      >
        <div className="flex justify-center mb-4 overflow-y-hidden overflow-x-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-3xl p-1">
            <TabsTrigger
              value="website_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Website Copy
            </TabsTrigger>
            <TabsTrigger
              value="marketing_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Marketing Copy
            </TabsTrigger>
            <TabsTrigger
              value="brand_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Brand Messaging
            </TabsTrigger>
            <TabsTrigger
              value="product_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Product Copy
            </TabsTrigger>
            <TabsTrigger
              value="digital_copy"
              className="text-sm md:text-base font-medium transition-all duration-300 data-[state=active]:text-[#8B3791] data-[state=active]:border-b-2 data-[state=active]:border-[#8B3791] whitespace-nowrap px-2"
            >
              Digital Content
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

