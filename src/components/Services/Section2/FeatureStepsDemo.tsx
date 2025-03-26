import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Research & Strategy for Maximum Impact',
    content: 'We dive deep into keyword research, competitor analysis, and audience insights to craft a content strategy that drives organic growth and engagement.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of a strategy meeting or brainstorming session
  },
  { 
    step: 'Step 2',
    title: 'SEO-Optimized Content Creation',
    content: 'Our expert writers produce high-quality, search-optimized blog posts that boost visibility, enhance authority, and keep readers coming back for more.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of a writer typing or content creation in progress
  },
  { 
    step: 'Step 3',
    title: 'Editing, Optimization & Publishing',
    content: 'We meticulously refine every piece—enhancing readability, structure, and SEO factors—before publishing content that ranks higher and converts better.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of a person reviewing content or publishing online
  },
];



export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="YOUR JOURNEY STARTS HERE"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        className="pt-28"
      />
  )
}