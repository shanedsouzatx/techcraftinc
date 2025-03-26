import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Custom WordPress Website Planning',
    content: 'We analyze your business needs, define website goals, and create a strategic plan for building a high-performing WordPress site.',
    image: '/services/wp-planning.jpg' // Image of website wireframing or planning
  },
  { 
    step: 'Step 2',
    title: 'Design & Development',
    content: 'Our developers craft a responsive, SEO-friendly WordPress website with custom themes, plugins, and seamless user experience.',
    image: '/services/wp-development.jpg' // Image of a WordPress site in development
  },
  { 
    step: 'Step 3',
    title: 'Launch & Optimization',
    content: 'We optimize your site for speed, security, and SEO, ensuring a smooth launch and ongoing performance improvements.',
    image: '/services/wp-launch.jpg' // Image of website launch or performance tracking
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