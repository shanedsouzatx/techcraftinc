import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
    { 
      step: 'Step 1', 
      title: 'In-Depth SEO Research & Planning',
      content: 'We conduct thorough keyword research, analyze competitors, and map out a data-driven content strategy designed to maximize search rankings and engagement.',
      image: '/services/seo-research.jpg' // Image of keyword research or analytics dashboard
    },
    { 
      step: 'Step 2',
      title: 'High-Quality, SEO-Optimized Blog Writing',
      content: 'Our writers craft compelling, well-researched content that naturally integrates keywords, enhances readability, and aligns with search intent to attract organic traffic.',
      image: '/services/seo-writing.jpg' // Image of content creation in progress
    },
    
    { 
      step: 'Step 3',
      title: 'Publishing & Performance Tracking',
      content: 'Once published, we track performance metrics, analyze user engagement, and make data-driven adjustments to improve rankings and conversions over time.',
      image: '/services/content-publishing.jpg' // Image of analytics dashboard or SEO performance tracking
    },
  ];
  

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        className="pt-28"
      />
  )
}