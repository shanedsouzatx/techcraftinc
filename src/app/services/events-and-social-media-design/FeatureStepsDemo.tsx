import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Creative Concept & Strategy',
    content: 'We develop a unique design strategy tailored to your event or social media campaign, ensuring it aligns with your brand identity and target audience.',
    image: '/services/event-strategy.jpg' // Image of a brainstorming or creative planning session
  },
  { 
    step: 'Step 2',
    title: 'Design & Content Creation',
    content: 'Our designers craft visually compelling event materials, social media posts, banners, and motion graphics that capture attention and drive engagement.',
    image: '/services/design-creation.jpg' // Image of social media posts or event flyer designs
  },
  { 
    step: 'Step 3',
    title: 'Publishing & Audience Engagement',
    content: 'We ensure seamless publishing across social platforms and provide engagement strategies to boost interaction, shares, and event attendance.',
    image: '/services/social-publishing.jpg' // Image of social media analytics or a digital event promotion
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