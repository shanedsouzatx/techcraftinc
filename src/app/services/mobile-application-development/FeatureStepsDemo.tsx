import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Requirement Analysis & Planning',
    content: 'We gather project requirements, define user needs, and create a strategic roadmap to ensure a seamless application development process.',
    image: '/services/app-planning.jpg' // Image of project planning or wireframing
  },
  { 
    step: 'Step 2',
    title: 'Design & Development',
    content: 'Our team builds responsive, high-performance applications with intuitive UI/UX, robust functionality, and scalable architecture.',
    image: '/services/app-development.jpg' // Image of developers coding or UI design process
  },
  
  { 
    step: 'Step 3',
    title: 'Testing & Deployment',
    content: 'We rigorously test applications for performance, security, and usability before launching them on the desired platforms.',
    image: '/services/app-testing.jpg' // Image of app testing or deployment process
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