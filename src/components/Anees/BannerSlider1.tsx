"use client"

import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const BannerSlider = ({ isMargin }: { isMargin?: boolean }) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const controls = useAnimationControls()

  const imageSrcs = [
    { imgSrc: "/services/b2.png", redirectUrl: "https://www.goodfirms.co/company/tech-craft-inc" },
    { imgSrc: "/services/b3.png", redirectUrl: "https://clutch.co/profile/tech-craft" },
    { imgSrc: "/services/b4.png", redirectUrl: "https://www.trustpilot.com/review/techcraftinc.com" },
    { imgSrc: "/services/b1.png", redirectUrl: "https://www.bark.com/en/us/company/tech-craft-inc/3Q92g/" },
  ]

  // Only duplicate as many times as needed to fill the container
  const calculateDuplication = () => {
    if (containerWidth === 0) return [...imageSrcs, ...imageSrcs]

    const itemWidth = 200 // Width of each item
    const itemsNeeded = Math.ceil((containerWidth * 2) / itemWidth)
    const duplicationsNeeded = Math.ceil(itemsNeeded / imageSrcs.length)

    let duplicated : any = []
    for (let i = 0; i < duplicationsNeeded; i++) {
      duplicated = [...duplicated, ...imageSrcs]
    }

    return duplicated
  }

  const duplicatedImages = calculateDuplication()

  useEffect(() => {
    // Get container width for responsive calculations
    const updateWidths = () => {
      const container = document.querySelector(".banner-slider-container")
      if (container) {
        setContainerWidth(container.clientWidth)

        // Calculate total content width
        const contentWidth = duplicatedImages.length * 200
        setContentWidth(contentWidth)

        // Reset animation when content changes
        controls.start({
          x: [-200, -contentWidth / 2],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        })
      }
    }

    updateWidths()
    window.addEventListener("resize", updateWidths)

    return () => window.removeEventListener("resize", updateWidths)
  }, [duplicatedImages.length, controls])

  return (
    <div
      className={`${isMargin ? "my-10" : ""} bg-gradient-to-t from-white via-white to-[#BCBEC0]/70 overflow-hidden relative w-full py-16 pt-11`}
    >
      <div className="banner-slider-container relative w-full overflow-hidden">
        <motion.div className="flex gap-0 w-max min-w-full" animate={controls} initial={{ x: 0 }}>
          {duplicatedImages.map((data : any, index : any) => (
            <div key={index} className="cursor-pointer flex-shrink-0 w-[200px] p-0 m-0">
              <Link href={data.redirectUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Image
                  src={data.imgSrc || "/placeholder.svg"}
                  alt={`cl-${index + 1}`}
                  width={200}
                  height={160}
                  className="transition-transform duration-300 hover:scale-110 w-full"
                  onError={(e) => {
                    // Handle image loading errors
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                  }}
                />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BannerSlider

