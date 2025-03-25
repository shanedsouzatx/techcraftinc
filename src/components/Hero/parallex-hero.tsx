"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current || !imageRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const imageHeight = imageRef.current.offsetHeight

      // Calculate when image should be centered
      const imageCenterPoint = windowHeight / 2 - imageHeight / 2

      // If section is in view
      if (sectionTop <= 0) {
        // Calculate how far we've scrolled into the section
        const scrollProgress = Math.abs(sectionTop)

        // If image hasn't reached center yet
        if (scrollProgress < imageCenterPoint) {
          // Move text at normal speed but keep image fixed at top
          textRef.current.style.transform = `translateY(${scrollProgress}px)`
          imageRef.current.style.transform = "translateY(0)"
          setScrolled(false)
        } else {
          // Once image reaches center, let everything scroll normally
          textRef.current.style.transform = `translateY(${imageCenterPoint}px)`
          imageRef.current.style.transform = `translateY(${scrollProgress - imageCenterPoint}px)`
          setScrolled(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="relative h-[200vh] overflow-hidden bg-black">
      {/* Fixed background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] opacity-10 bg-repeat"></div>

      {/* Text content that will scroll */}
      <div ref={textRef} className="sticky top-0 pt-20 pb-10 px-4 md:px-6 text-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          ERP Software <br /> Development Services
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Custom-developed ERP solutions that go beyond business growth expectations
        </p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors">
          Consult Our Experts <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Image that will be fixed until text scrolls to it */}
      <div
        ref={imageRef}
        className={`relative w-full max-w-6xl mx-auto transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden mx-auto mt-8">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Team working on ERP solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content that appears after scrolling */}
      <div className="relative z-10 bg-white text-black mt-[50vh] pt-20 pb-40 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our ERP Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customized Development</h3>
              <p>Tailored solutions designed specifically for your business processes and workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p>Connect with your existing systems and third-party applications without disruption.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
              <p>Solutions that grow with your business, from startup to enterprise level operations.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p>Dedicated team providing maintenance, updates, and technical assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

