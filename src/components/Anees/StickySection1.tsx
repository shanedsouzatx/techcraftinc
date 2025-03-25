import type React from "react"
import { Brain, Cpu, Link } from "lucide-react"

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
  return (
    <section className="relative bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left sticky section */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex flex-col justify-center ">
          {/* <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              POWER YOUR BUSINESS GROWTH WITH AN OPTIMIZED WEBSITE
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Tech Craft features a dedicated team of web development and digital marketing experts focused on
              delivering client satisfaction through innovative design and development. We guarantee results that
              showcase our technical expertise and creativity in website design.
            </p>
          </div> */}
           <div
          className="w-full md:pl-7 block"
        >
          <video
            src="/services/gif2.mp4"
            className="w-[500px] object-contain h-[500px] "
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        </div>

        {/* Right scrollable section */}
        <div
          className="lg:w-1/2 p-8 overflow-y-auto max-h-screen"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="space-y-16" style={{ paddingBottom: "2rem" }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 !text-black p-4 text-[28px] rounded-[100%] ">{service.icon}</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="opacity-90">{service.description}</p>
        {service.link && (
          <Link href={service.link} className="inline-flex items-center mt-4 text-blue-400 hover:underline">
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

