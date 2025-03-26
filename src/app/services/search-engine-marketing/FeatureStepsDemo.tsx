import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Comprehensive Keyword & Competitor Research',
    content: 'We analyze high-performing keywords, assess competitor strategies, and identify lucrative ad opportunities to maximize your SEM success.',
    image: '/services/sem-research.jpg' // Image of keyword research or analytics dashboard
  },
  { 
    step: 'Step 2',
    title: 'Strategic PPC Campaign Setup',
    content: 'Our team crafts high-converting ad copy, optimizes bidding strategies, and ensures your campaigns align with audience intent for maximum ROI.',
    image: '/services/sem-setup.jpg' // Image of PPC campaign creation
  },
  { 
    step: 'Step 3',
    title: 'Performance Tracking & Optimization',
    content: 'We monitor ad performance, analyze key metrics, and make data-driven adjustments to enhance conversions and reduce ad spend waste.',
    image: '/services/sem-tracking.jpg' // Image of analytics dashboard or SEM performance tracking
  },
  { 
    step: 'Step 4',
    title: 'Retargeting & Conversion Rate Optimization',
    content: 'We implement retargeting strategies to re-engage potential customers and optimize landing pages to improve conversion rates.',
    image: '/services/sem-retargeting.jpg' // Image of retargeting or conversion tracking
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