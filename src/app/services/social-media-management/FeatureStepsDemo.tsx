import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Social Media Strategy & Planning',
    content: 'We craft a tailored social media strategy, analyzing your audience, competitors, and industry trends to maximize engagement and brand growth.',
    image: '/services/social-strategy.jpg' // Image of social media planning or analytics
  },
  { 
    step: 'Step 2',
    title: 'Content Creation & Scheduling',
    content: 'Our team designs eye-catching graphics, compelling captions, and engaging posts, ensuring consistent and high-quality content across all platforms.',
    image: '/services/content-creation.jpg' // Image of social media posts being designed
  },
  { 
    step: 'Step 3',
    title: 'Community Engagement & Growth',
    content: 'We actively engage with your audience, respond to comments, and foster meaningful connections to build a loyal and active community.',
    image: '/services/community-engagement.jpg' // Image of social media interactions
  },
  { 
    step: 'Step 4',
    title: 'Analytics & Performance Optimization',
    content: 'We track key metrics, analyze post performance, and refine strategies to ensure continuous growth, improved reach, and maximum ROI.',
    image: '/services/social-analytics.jpg' // Image of social media insights dashboard
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