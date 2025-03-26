import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Storyboarding & 3D Asset Creation',
    content: 'We craft detailed storyboards and transform concepts into high-resolution 3D models, setting the foundation for stunning CGI animation.',
    image: '/cgi/storyboard-3d-modeling.jpg' // Image of CGI storyboarding and 3D modeling
  },
  { 
    step: 'Step 2',
    title: 'Advanced CGI Animation & Motion',
    content: 'Using cutting-edge CGI techniques, motion capture, and physics-based simulations, we animate characters and environments with lifelike realism.',
    image: '/cgi/animation-motion-capture.jpg' // Image of motion capture and CGI character animation
  },
  { 
    step: 'Step 3',
    title: 'Rendering, VFX & Final Composition',
    content: 'We apply hyper-realistic lighting, textures, and cinematic visual effects to produce a seamless, high-quality CGI animation experience.',
    image: '/cgi/rendering-vfx.jpg' // Image of CGI rendering, VFX, and final compositing
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