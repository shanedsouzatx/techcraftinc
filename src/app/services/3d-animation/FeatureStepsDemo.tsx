import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Concept Development & Storyboarding',
    content: 'We start with a creative brainstorming process, crafting detailed storyboards and concepts to bring your vision to life with stunning 3D animations.',
    image: '/services/3d-concept.jpg' // Image of storyboarding or concept art
  },
  { 
    step: 'Step 2',
    title: '3D Modeling & Animation',
    content: 'Our skilled animators create high-quality 3D models, apply textures, and bring characters and objects to life with smooth, realistic animations.',
    image: '/services/3d-animation.jpg' // Image of a 3D animation in progress
  },
  
  { 
    step: 'Step 3',
    title: 'Rendering & Final Touches',
    content: 'We enhance the visuals with lighting, special effects, and high-quality rendering to deliver a polished, immersive animation experience.',
    image: '/services/3d-rendering.jpg' // Image of rendering process
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