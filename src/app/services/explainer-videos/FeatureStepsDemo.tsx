import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Concept Development & Scripting',
    content: 'We craft compelling scripts that simplify complex ideas, ensuring a clear and engaging story for your explainer video.',
    image: '/services/script-development.jpg' // Image of scriptwriting or brainstorming session
  },
  { 
    step: 'Step 2',
    title: 'Storyboarding & Visual Design',
    content: 'Our team creates detailed storyboards and visually appealing designs that align with your brand and message.',
    image: '/services/storyboarding.jpg' // Image of storyboard sketches or animation frames
  },
  
  { 
    step: 'Step 3',
    title: 'Animation & Voiceover',
    content: 'We bring your story to life with smooth animations, professional voiceovers, and sound design that enhance engagement.',
    image: '/services/animation-production.jpg' // Image of animation process or voice recording
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