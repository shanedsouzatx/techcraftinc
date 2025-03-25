import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Creative Concept & Storyboarding',
    content: 'We develop a unique animation concept, sketch out storyboards, and plan smooth transitions that align with your brand identity.',
    image: '/services/logo-concept.jpg' // Image of storyboard or animation planning
  },
  { 
    step: 'Step 2',
    title: 'Professional Logo Animation',
    content: 'Using cutting-edge motion design techniques, we bring your logo to life with sleek animations that enhance brand recognition and engagement.',
    image: '/services/logo-animation.jpg' // Image of animated logo in progress
  },
  { 
    step: 'Step 3',
    title: 'Final Touches & Delivery',
    content: 'We refine motion details, optimize formats for various platforms, and deliver high-quality animated logo files ready for use.',
    image: '/services/logo-delivery.jpg' // Image of final animated logo
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