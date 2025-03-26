import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Content Research & Strategy',
    content: 'We analyze industry trends, audience preferences, and competitors to craft a data-driven content strategy for maximum impact.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of brainstorming or content strategy planning
  },
  { 
    step: 'Step 2',
    title: 'Engaging & Optimized Content Creation',
    content: 'Our expert writers craft compelling, SEO-friendly content that enhances brand voice and captivates your audience.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of content creation in progress
  },
  { 
    step: 'Step 3',
    title: 'Editing, Publishing & Performance Tracking',
    content: 'We refine content with thorough editing, publish it seamlessly, and monitor performance to optimize engagement and reach.',
    image:'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of analytics dashboard or content performance tracking
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