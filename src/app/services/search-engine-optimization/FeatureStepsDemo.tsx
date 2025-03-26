import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'SEO Audit & Keyword Research',
    content: 'Analyzing website performance, identifying SEO issues, and conducting in-depth keyword research to create a data-driven strategy.',
    image: '/services/seo-audit.jpg' // Image of an SEO audit dashboard
  },
  { 
    step: 'Step 2',
    title: 'On-Page & Technical Optimization',
    content: 'Enhancing website structure, meta tags, site speed, and mobile-friendliness to improve search engine rankings and user experience.',
    image: '/services/technical-seo.jpg' // Image of a technical SEO process
  },
  { 
    step: 'Step 3',
    title: 'Content Strategy & Link Building',
    content: 'Developing high-quality, keyword-rich content and ethical link-building strategies to boost domain authority and organic traffic.',
    image: '/services/link-building.jpg' // Image of backlinks and content marketing
  },
  { 
    step: 'Step 4',
    title: 'SEO Performance Monitoring',
    content: 'Tracking rankings, traffic, and conversions using analytics tools, refining strategies to ensure long-term SEO success.',
    image: '/services/seo-tracking.jpg' // Image of an SEO performance dashboard
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