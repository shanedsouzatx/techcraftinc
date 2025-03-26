import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Concept Development & Sketching',
    content: 'We begin with brainstorming and sketching ideas to create a strong foundation for visually compelling 3D designs that align with your vision.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of concept sketches or 3D wireframes
  },
  { 
    step: 'Step 2',
    title: '3D Modeling & Texturing',
    content: 'Our designers craft high-quality 3D models with intricate details, realistic textures, and stunning visual effects to enhance your brand’s identity.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of 3D modeling software in action
  },
  
  { 
    step: 'Step 3',
    title: 'Rendering & Final Touches',
    content: 'We bring your 3D visuals to life with high-resolution rendering, lighting adjustments, and finishing touches to ensure a professional and polished look.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of a final 3D render in progress
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