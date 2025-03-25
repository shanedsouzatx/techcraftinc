"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function TextOverImageScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current || !imageContainerRef.current) return

      const scrollY = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const scrollPosition = scrollY - sectionTop

      // Only apply effects when section is in view
      if (scrollY >= sectionTop && scrollPosition <= window.innerHeight) {
        // Move text down as user scrolls
        textRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`

        // Reveal image with a slight parallax effect
        imageContainerRef.current.style.opacity = `${Math.min(scrollPosition / 100, 1)}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-[150vh] -top-11 opacity-100 brightness-100 ">
      {/* Fixed image container that will be revealed */}
      <div ref={imageContainerRef} className="fixed  left-0 w-full h-screen z-0">
        <Image
          src="/all/branding1.jpg"
          alt="ERP Software Development"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text content that will scroll over the image */}
      <div ref={textRef} className="relative z-10 pt-20 pb-10 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ERP Software <br /> Development Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Custom-developed ERP solutions that go beyond business growth expectations
          </p>
          <Button
            variant="outline"
            className="border-white text-black hover:bg- hover:text-black transition-colors"
          >
            Consult Our Experts <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content that appears after the parallax section */}
      <div className="relative z-10 bg-white text-black mt-[100vh] pt-20 pb-40 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our ERP Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customized Development</h3>
              <p>Tailored solutions designed specifically for your business processes and workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p>Connect with your existing systems and third-party applications without disruption.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

