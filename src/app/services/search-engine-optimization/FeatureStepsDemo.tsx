import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"

const features = [
  { 
    step: 'Step 1', 
    title: 'Comprehensive SEO Audit & Strategy',
    content: 'We analyze your website’s performance, identify key SEO issues, and conduct in-depth keyword research to craft a data-driven strategy.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-30_ipn9jq.jpg' // Image of an SEO audit dashboard
  },
  { 
    step: 'Step 2',
    title: 'Optimization & Content Enhancement',
    content: 'We improve site structure, meta tags, and page speed while implementing high-quality, keyword-rich content to enhance search rankings.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-31_rhefv4.jpg' // Image of a technical SEO process
  },
  { 
    step: 'Step 3',
    title: 'Performance Tracking & Continuous Improvement',
    content: 'We monitor traffic, rankings, and conversions using analytics tools, refining strategies to maintain long-term SEO success.',
    image: 'https://res.cloudinary.com/dhggagqst/image/upload/v1743010142/Vector-32_ugemr5.jpg' // Image of an SEO performance dashboard
  }
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
