import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'SEO Blueprint & Strategy',
    content: 'We start with a blank whiteboard, outlining keywords, analyzing competitors, and sketching a winning SEO strategy.',
    image: '/whiteboard/seo-plan-drawing.jpg' // Hand-drawn SEO strategy diagram
  },
  { 
    step: 'Step 2',
    title: 'Writing Engaging SEO Blogs',
    content: 'With markers in hand, we draft blog content that’s SEO-friendly, informative, and designed to rank higher in search results.',
    image: '/whiteboard/blog-writing-sketch.jpg' // Sketch of a blog post being written
  },
  { 
    step: 'Step 3',
    title: 'Optimizing & Tracking Results',
    content: 'We track performance, refine content, and update strategies—erasing and redrawing for continuous SEO growth.',
    image: '/whiteboard/seo-analysis-sketch.jpg' // Sketch of performance graphs and analytics
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