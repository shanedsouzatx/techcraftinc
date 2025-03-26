import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Brand Research & Message Development',
    content: 'We dive deep into your brand, target audience, and industry to craft a compelling brand message that resonates and drives engagement.',
    image: '/services/brand-research.jpg' // Image of brand strategy or research documents
  },
  { 
    step: 'Step 2',
    title: 'Persuasive & Engaging Copywriting',
    content: 'Our writers create powerful, results-driven copy that captivates readers, strengthens brand identity, and compels action—whether it’s a sale, a signup, or a share.',
    image: '/services/copywriting.jpg' // Image of a writer crafting compelling content
  },
  { 
    step: 'Step 3',
    title: 'Optimization & Performance Tracking',
    content: 'We refine and optimize your copy using data-driven insights, ensuring maximum impact, audience engagement, and high conversion rates.',
    image: '/services/copy-optimization.jpg' // Image of analytics dashboard or performance tracking
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