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
      title: "Monitoring and Analysis",
      icon: <Brain className="h-6 w-6 text-white" />,
      description:
        "We track the performance and results of the website and marketing campaigns live. We use innovative analytics to monitor key metrics to evaluate what's working and where adjustments are needed.",
    },
    {
      id: "iot",
      title: "Strategy Development",
      icon: <Cpu className="h-6 w-6 text-white" />,
      description:
        "We begin by immersing ourselves in your business to understand your objectives, market position, and intended audience. Then, we gather insights through research to develop a strategy that suits your business goals.",
    },
    {
      id: "cloud",
      title: "Optimization and Growth",
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
          className="h-6 w-6 text-white"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      description:
        "Insights gained from ongoing analysis inform our optimization efforts. We fine-tune strategies and tactics to enhance performance and ensure your digital marketing efforts yield the best results and drive growth for your business.",
    },
    {
      id: "blockchain",
      title: "Implementation",
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
          className="h-6 w-6 text-white"
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
      id: "branding",
      title: "Brand Identity & Design",
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
          className="h-6 w-6 text-white"
        >
          <path d="M7 3h10l5 9-5 9H7l-5-9Z" />
          <path d="M10 12h4" />
        </svg>
      ),
      description:
        "We create visually compelling and strategically sound brand identities that communicate your message effectively. From logos to full brand guidelines, we ensure consistency and impact across all platforms.",
    },
    {
      id: "content",
      title: "Content Marketing",
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
          className="h-6 w-6 text-white"
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
      id: "advertising",
      title: "Paid Advertising (PPC)",
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
          className="h-6 w-6 text-white"
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
  

export default function StickyServicesSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#191634]/50 via-[#F6BAF5] to-[#A24D7A]/60 text-black overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left sticky section */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex flex-col justify-center p-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Power your business Growth With An Optimized Website
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Tech Craft features a dedicated team of web development and digital marketing experts focused on
              delivering client satisfaction through innovative design and development. We guarantee results that
              showcase our technical expertise and creativity in website design.
            </p>
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
        <div className="bg-zinc-800 p-4 rounded-lg">{service.icon}</div>
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

