import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Comprehensive Audience Research & Segmentation',
    content: 'We analyze your audience, segment them based on behaviors, and create personalized email strategies that resonate and drive action.',
    image: '/services/email-research.jpg' // Image of email analytics or audience segmentation
  },
  { 
    step: 'Step 2',
    title: 'Compelling Email Content & Design',
    content: 'Our team crafts engaging subject lines, persuasive email copy, and visually appealing designs to ensure high open and conversion rates.',
    image: '/services/email-content.jpg' // Image of email content creation in progress
  },
  { 
    step: 'Step 3',
    title: 'Automated Campaign Execution & Optimization',
    content: 'We set up automated email sequences, track key metrics, and optimize campaigns in real time for maximum effectiveness and ROI.',
    image: '/services/email-automation.jpg' // Image of email analytics dashboard or performance tracking
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