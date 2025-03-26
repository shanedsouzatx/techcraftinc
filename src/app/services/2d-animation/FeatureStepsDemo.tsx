import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Character Design & Concept Art',
    content: 'Our artists create unique and expressive 2D characters, environments, and visual elements that perfectly match your project requirements and artistic direction.',
    image: '/services/2d-storyboard.jpg' // Image of a storyboard or concept sketch
  },
  { 
    step: 'Step 2',
    title: 'Frame-by-Frame Animation',
    content: 'Using traditional and digital 2D animation techniques, we meticulously animate each frame to create smooth, natural movements and captivating character performances.',
    image: '/services/2d-animation.jpg' // Image of animation in progress
  },
  { 
    step: 'Step 3',
    title: 'Compositing & Final Output',
    content: 'We combine animated elements with backgrounds, effects, and sound to create a cohesive 2D animation that brings your story to life in stunning detail.',
    image: '/services/2d-production.jpg' // Image of a finalized animation scene
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