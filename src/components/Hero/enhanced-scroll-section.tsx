"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function EnhancedScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set initial visibility after component mounts
    setIsVisible(true)

    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far we've scrolled into the section (0 to 1)
      const rawProgress = (scrollY - sectionTop) / (sectionHeight - viewportHeight)
      const progress = Math.max(0, Math.min(1, rawProgress))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger initial calculation
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate text position based on scroll progress
  const textTransform = `translateY(${scrollProgress * 30}vh)`

  // Calculate image scale and opacity based on scroll progress
  const imageScale = 1 + scrollProgress * 0.1
  const imageOpacity = Math.min(1, scrollProgress * 3)

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[150vh] bg-black overflow-hidden transition-opacity duration-1000"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70 z-10"></div>

      {/* Fixed background pattern */}
      <div className="fixed top-0 left-0 w-full h-screen bg-[url('/placeholder.svg?height=1000&width=1000')] opacity-5 bg-repeat z-0"></div>

      {/* Hero image that scales slightly as you scroll */}
      <div
        ref={imageRef}
        className="fixed top-0 left-0 w-full h-screen z-0 transition-transform duration-700 ease-out"
        style={{
          opacity: imageOpacity,
          transform: `scale(${imageScale})`,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-18%20021343-xYU949X4MUM9FsqiSLITDWfGTLxaIk.png"
          alt="ERP Software Development Team"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Text content that moves as you scroll */}
      <div
        ref={textRef}
        className="relative z-20 pt-[15vh] px-4 md:px-6 text-center transition-transform duration-700 ease-out"
        style={{ transform: textTransform }}
      >
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Custom-Built <br /> us
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Custom-developed ERP solutions that go beyond business growth expectations
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 group"
          >
            Consult Our Experts
            <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Content that appears after the parallax section */}
      <div className="relative z-20 bg-white text-black mt-[100vh] pt-24 pb-40 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Why Choose Our ERP Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Customized Development</h3>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your business processes and workflows.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect with your existing systems and third-party applications without disruption.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">
                Solutions that grow with your business, from startup to enterprise level operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

