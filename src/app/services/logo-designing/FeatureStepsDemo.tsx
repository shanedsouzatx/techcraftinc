import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Brand Research & Identity Analysis',
    content: 'We analyze your brand values, audience, and competitors to create a logo that embodies your unique identity.',
    image: '/services/logo-research.jpg' // Image of brainstorming or brand strategy
  },
  { 
    step: 'Step 2',
    title: 'Creative Concept & Logo Design',
    content: 'Our designers sketch and refine multiple logo concepts, blending creativity with strategic design principles for maximum impact.',
    image: '/services/logo-concept.jpg' // Image of digital logo drafts or sketching process
  },
  { 
    step: 'Step 3',
    title: 'Finalization & Brand Asset Delivery',
    content: 'We refine and perfect your chosen logo, providing high-resolution files and brand guidelines for seamless use across all platforms.',
    image: '/services/logo-final.jpg' // Image of a finalized logo on various branding materials
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