import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Content Research & Strategy',
    content: 'We conduct in-depth research to understand your audience, industry trends, and competitors, crafting a tailored content strategy for maximum impact.',
    image: '/services/content-research.jpg' // Image of brainstorming or content strategy planning
  },
  { 
    step: 'Step 2',
    title: 'Engaging & Well-Structured Writing',
    content: 'Our expert writers create compelling, well-organized content that captivates readers, enhances brand voice, and delivers value across platforms.',
    image: '/services/content-writing.jpg' // Image of content creation in progress
  },
  { 
    step: 'Step 3',
    title: 'Editing & Proofreading',
    content: 'We refine and optimize your content with thorough editing and proofreading, ensuring clarity, coherence, and grammatical accuracy.',
    image: '/services/content-editing.jpg' // Image of editing tools or proofreading process
  },
  { 
    step: 'Step 4',
    title: 'Publishing & Performance Monitoring',
    content: 'Once published, we track engagement, analyze content performance, and refine strategies to improve reach and audience retention.',
    image: '/services/content-publishing.jpg' // Image of analytics dashboard or content performance tracking
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