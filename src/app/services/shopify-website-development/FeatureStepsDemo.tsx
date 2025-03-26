import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Custom Shopify & WordPress Design',
    content: 'We create visually stunning, user-friendly Shopify and WordPress websites tailored to your brand, ensuring seamless navigation and an engaging user experience.',
    image: '/services/shopify-wordpress-design.jpg' // Image of a website design process
  },
  { 
    step: 'Step 2',
    title: 'E-Commerce Store Development',
    content: 'From Shopify stores to WordPress WooCommerce setups, we develop powerful, high-performing e-commerce solutions optimized for conversions and scalability.',
    image: '/services/ecommerce-development.jpg' // Image of an online store setup
  },
  { 
    step: 'Step 3',
    title: 'Performance Optimization & SEO',
    content: 'We enhance website speed, security, and SEO to improve search rankings, boost traffic, and increase customer retention on Shopify and WordPress platforms.',
    image: '/services/performance-seo.jpg' // Image of an SEO dashboard or website optimization process
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