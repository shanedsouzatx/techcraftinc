import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Footage Selection & Organization',
    content: 'We carefully review and organize raw footage, selecting the best clips to create a cohesive and compelling story.',
    image: '/video-editing/footage-selection.jpg' // Image of video clips on an editing timeline
  },
  { 
    step: 'Step 2',
    title: 'Editing, Effects & Transitions',
    content: 'We enhance videos with smooth transitions, motion graphics, color correction, and visual effects to create a polished final cut.',
    image: '/video-editing/effects-transitions.jpg' // Image of a video editing software interface
  },
  { 
    step: 'Step 3',
    title: 'Final Touches & Export',
    content: 'We fine-tune audio, add background music, optimize for different platforms, and export in high quality for maximum impact.',
    image: '/video-editing/final-export.jpg' // Image of export settings in video editing software
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