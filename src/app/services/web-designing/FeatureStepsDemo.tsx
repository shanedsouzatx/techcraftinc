import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Strategic Planning & Wireframing',
    content: 'We start with in-depth research, competitor analysis, and wireframing to create a well-structured blueprint for your website’s design and functionality.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of website wireframe or planning process
  },
  { 
    step: 'Step 2',
    title: 'Custom Design & Development',
    content: 'Our team crafts a visually appealing, fully responsive, and user-friendly website that aligns with your brand identity and business goals.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of website design in progress
  },
  { 
    step: 'Step 3',
    title: 'Optimization & Launch',
    content: 'We optimize the website for speed, SEO, and mobile responsiveness before launching it, ensuring a flawless user experience and high search visibility.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of a website going live
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