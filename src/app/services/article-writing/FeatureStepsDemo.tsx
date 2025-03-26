import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'eCommerce Strategy & Planning',
    content: 'We analyze your business needs, target audience, and market trends to create a customized eCommerce strategy that ensures success.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of business strategy planning
  },
  { 
    step: 'Step 2',
    title: 'Custom Development & Design',
    content: 'Our team designs and develops a high-performing, user-friendly online store with seamless navigation and conversion-focused features.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of website design and coding
  },
  { 
    step: 'Step 3',
    title: 'Launch & Optimization',
    content: 'We deploy your store, integrate essential tools, and continuously optimize for performance, security, and sales growth.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of website launch or analytics dashboard
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