'use client'
import type React from "react"
import { Brain, Cpu, Link } from "lucide-react"
import { useRef } from "react"

type Service = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}
const services: Service[] = [
    {
      id: "ai",
      title: "MONITORING AND ANALYSIS",
      icon: <Brain className="h-9 w-9 text-black" />,
      description:
        "We track the performance and results of the website and marketing campaigns live. We use innovative analytics to monitor key metrics to evaluate what's working and where adjustments are needed.",
    },
    {
      id: "iot",
      title: "STRATEGY DEVELOPMENT",
      icon: <Cpu className="h-9 w-9 text-black" />,
      description:
        "We begin by immersing ourselves in your business to understand your objectives, market position, and intended audience. Then, we gather insights through research to develop a strategy that suits your business goals.",
    },
    {
      id: "cloud",
      title: "OPTIMIZATION AND GROWTH",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-black"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      description:
        "Insights gained from ongoing analysis inform our optimization efforts. We fine-tune strategies and tactics to enhance performance and ensure your digital marketing efforts yield the best results and drive growth for your business.",
    },
    {
      id: "BLOCKCHAIN",
      title: "IMPLEMENTATION",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-black"
        >
          <rect width="8" height="8" x="14" y="14" rx="2" />
          <rect width="8" height="8" x="2" y="14" rx="2" />
          <rect width="8" height="8" x="8" y="2" rx="2" />
          <path d="M7 14v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
        </svg>
      ),
      description:
        "Armed with a solid strategy, we move to implement the strategized digital marketing tactics. This includes website development, SEO, content creation, and PPC campaigns, among others, tailored to your business niche.",
    },
    {
      id: "BRANDING",
      title: "BRAND IDENTITY AND DESIGN",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-black"
        >
          <path d="M7 3h10l5 9-5 9H7l-5-9Z" />
          <path d="M10 12h4" />
        </svg>
      ),
      description:
        "We create visually compelling and strategically sound brand identities that communicate your message effectively. From logos to full brand guidelines, we ensure consistency and impact across all platforms.",
    },
    {
      id: "CONTENT",
      title: "CONTENT MARKETING",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-black"
        >
          <path d="M4 13h16" />
          <path d="M4 9h16" />
          <path d="M4 17h16" />
        </svg>
      ),
      description:
        "Our content marketing strategies focus on creating valuable, relevant, and engaging content that attracts and retains your target audience, driving traffic and increasing brand awareness.",
    },
    {
      id: "ADVERTISING",
      title: "PAID ADVERTISING (PPC)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-black"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9v6" />
          <path d="M9 9v6" />
          <path d="M12 9v6" />
        </svg>
      ),
      description:
        "We optimize and manage PPC campaigns across platforms like Google Ads, Facebook Ads, and LinkedIn Ads, ensuring maximum ROI through data-driven targeting and performance analysis.",
    },
  ];
  

export default function StickySection1() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -300,
        behavior: 'smooth'
      })
    }
  }
  
  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="-z-50 !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1743028029/Portfolio_Logos-13_kfxubq.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="relative  text-white overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
          {/* Left sticky section */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex flex-col justify-center">
            <div className="w-full md:pl-7 block">
              <video
                src="/services/gif2.mp4"
                className="w-[800px] object-contain h-[800px]"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right scrollable section */}
          <div
            ref={scrollContainerRef}
            className="lg:w-1/2 p-8 overflow-y-auto max-h-screen relative"
            style={{ 
              scrollbarWidth: "thin", 
              scrollbarColor: " transparent",
              msOverflowStyle: "auto"
            }}
          >
            {/* Scroll indicator at top with improved background */}
            <div className="sticky top-0 left-0 right-0 h-20 b-gradient-to-b from-[#48128A] via-[#48128A] to-transparent pointer-events-none z-10 flex justify-center items-start">
              <button 
                onClick={scrollUp}
                className="animate-pulse bg-[#48128A] hover:b-[#48128A]/90 rounded-full p-2 backdrop-blur-md shadow-lg transition-all duration-300 pointer-events-auto mt-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </button>
            </div>
            
            <div className="space-y-16 py-16 mt-4">
              {services.map((service, index) => {
                // Calculate opacity based on position
                let opacity = "opacity-100";
                if (index === 0) opacity = "opacity-90 hover:opacity-100";
                if (index > services.length - 3) opacity = "opacity-75 hover:opacity-100";
                
                return (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    className={`hover:translate-x-1 ${opacity}`}
                  />
                );
              })}
              
              {/* Extra space at bottom to encourage scrolling */}
            </div>
            
            {/* Custom scrollbar indicator */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 h-32 w-1 bg-white/10 rounded-full hidden lg:block">
              <div className="w-1 bg-white/40 rounded-full transition-all duration-300"
                   style={{
                     height: scrollContainerRef.current ? 
                       `${(scrollContainerRef.current.scrollTop / (scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight)) * 100}%` : 
                       '0%',
                     maxHeight: '100%'
                   }}>
              </div>
            </div>
            
            {/* Scroll indicator at bottom with improved background */}
            <div className="sticky bottom-0 left-0 right-0 h-20 bggradient-to-t from-[#8B3791] via-[#8B3791] to-transparent pointer-events-none z-10 flex justify-center items-end">
              <button 
                onClick={scrollDown}
                className="animate-pulse bg-[#8B3791] hover:b-[#8B3791]/90 rounded-full p-2 backdrop-blur-md shadow-lg transition-all duration-300 pointer-events-auto mb-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ service, className = "" }: { service: Service, className?: string }) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 p-3 rounded-lg ${className}`}>
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 !text-black p-4 text-[28px] rounded-full shadow-md">{service.icon}</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">{service.title}</h3>
        <p className="opacity-90 text-white/90">{service.description}</p>
        {service.link && (
          <Link href={service.link} className="inline-flex items-center mt-4 text-purple-200 hover:text-white hover:underline transition-colors">
            Learn more
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

