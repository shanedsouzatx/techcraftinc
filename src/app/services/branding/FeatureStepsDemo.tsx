import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Brand Discovery & Strategy',
    content: 'We dive deep into your brand’s mission, values, and target audience to create a content strategy that authentically represents your brand identity.',
    image: '/services/brand-discovery.jpg' // Image of brainstorming or brand strategy session
  },
  { 
    step: 'Step 2',
    title: 'Crafting a Unique Brand Voice',
    content: 'Our expert writers develop a compelling and consistent brand tone that resonates with your audience, strengthens brand recall, and builds trust.',
    image: '/services/brand-voice.jpg' // Image of creative writing in progress
  },
  { 
    step: 'Step 3',
    title: 'Performance Analysis & Brand Growth',
    content: 'We track audience engagement and refine strategies based on insights, ensuring your brand messaging evolves and stays impactful over time.',
    image: '/services/brand-growth.jpg' // Image of analytics dashboard tracking brand performance
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