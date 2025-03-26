import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Creative Concept & Storyboarding',
    content: 'We develop a unique animation concept, sketch out storyboards, and plan smooth transitions that align with your brand identity.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of storyboard or animation planning
  },
  { 
    step: 'Step 2',
    title: 'Professional Logo Animation',
    content: 'Using cutting-edge motion design techniques, we bring your logo to life with sleek animations that enhance brand recognition and engagement.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of animated logo in progress
  },
  { 
    step: 'Step 3',
    title: 'Final Touches & Delivery',
    content: 'We refine motion details, optimize formats for various platforms, and deliver high-quality animated logo files ready for use.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of final animated logo
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