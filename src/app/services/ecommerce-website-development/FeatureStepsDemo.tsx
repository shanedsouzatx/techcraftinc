import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Custom eCommerce Store Development',
    content: 'We design and develop a fully functional, user-friendly online store tailored to your business needs, ensuring seamless navigation and a great shopping experience.',
    image: '/services/ecommerce-development.jpg' // Image of website development in progress
  },
  { 
    step: 'Step 2',
    title: 'Secure Payment & Performance Optimization',
    content: 'We integrate secure payment gateways, optimize site speed, and ensure mobile responsiveness to provide a smooth and secure shopping experience.',
    image: '/services/payment-security.jpg' // Image of secure checkout process
  },
  { 
    step: 'Step 3',
    title: 'SEO & Marketing for Sales Growth',
    content: 'Our team implements SEO strategies and digital marketing tools to drive traffic, increase conversions, and grow your eCommerce business.',
    image: '/services/seo-marketing.jpg' // Image of marketing analytics dashboard
  }
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