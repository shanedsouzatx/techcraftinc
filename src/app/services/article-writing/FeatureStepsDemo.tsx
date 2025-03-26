import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Research & Topic Development',
    content: 'We conduct in-depth research on trending topics, audience interests, and industry insights to craft compelling, well-informed articles.',
    image: '/services/article-research.jpg' // Image of research or brainstorming process
  },
  { 
    step: 'Step 2',
    title: 'Structuring & Writing Engaging Content',
    content: 'Our writers create well-structured, insightful, and engaging articles that captivate readers, maintain flow, and enhance comprehension.',
    image: '/services/article-writing.jpg' // Image of article writing in progress
  },
  { 
    step: 'Step 3',
    title: 'Editing & Refinement',
    content: 'Each article undergoes rigorous editing, fact-checking, and proofreading to ensure clarity, coherence, and a polished final draft.',
    image: '/services/article-editing.jpg' // Image of content revision or proofreading
  },
  { 
    step: 'Step 4',
    title: 'Publishing & Reader Engagement',
    content: 'We format articles for readability, optimize for search engines, and track engagement metrics to continuously refine content strategies.',
    image: '/services/article-publishing.jpg' // Image of article publication or analytics dashboard
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