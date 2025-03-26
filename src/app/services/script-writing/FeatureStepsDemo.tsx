import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Concept Development & Storyboarding',
    content: 'We start by brainstorming ideas, defining the narrative structure, and creating a detailed storyboard that sets the foundation for a compelling script.',
    image: '/services/script-concept.jpg' // Image of a storyboard or script outline
  },
  { 
    step: 'Step 2',
    title: 'Engaging Script Writing',
    content: 'Our writers craft powerful scripts with dynamic dialogue, engaging storytelling, and a strong narrative arc that captures the audience’s attention.',
    image: '/services/script-writing.jpg' // Image of a script in progress
  },
  { 
    step: 'Step 3',
    title: 'Revisions & Finalization',
    content: 'We refine the script through multiple drafts, incorporating feedback to ensure clarity, impact, and seamless flow before finalizing the script for production.',
    image: '/services/script-finalizing.jpg' // Image of a polished script ready for production
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