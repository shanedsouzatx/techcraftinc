"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Reset timer when user manually selects a feature
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setProgress(0)
    startTimer()
  }

  // Handle feature selection
  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    resetTimer()
  }

  // Start the timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 100 / (autoPlayInterval / 100)
        } else {
          // Fixed to ensure it goes step by step (1->2->3) instead of skipping
          setCurrentFeature((prevFeature) => {
            const nextFeature = prevFeature + 1;
            return nextFeature < features.length ? nextFeature : 0;
          })
          return 0
        }
      })
    }, 100)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12 md:py-28 bg-gradient-to-b from-[#48128A] to-[#8B3791]", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {title}
        </h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-center gap-6 md:gap-8 p-4 rounded-lg transition-all duration-300 cursor-pointer",
                  // Added white border to selected text - can be removed if not desired
                  index === currentFeature ? "bg-white/5 shadow-lg border border-white/30" : "hover:bg-white/5"
                )}
                initial={{ opacity: 0.5, x: -10 }}
                animate={{ 
                  opacity: index === currentFeature ? 1 : 0.6,
                  x: 0,
                  scale: index === currentFeature ? 1.02 : 1
                }}
                transition={{ duration: 0.4 }}
                onClick={() => handleFeatureClick(index)}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-white border-white text-[#48128A] scale-110 shadow-md shadow-white/20"
                      : index < currentFeature 
                        ? "bg-white/80 border-white/80 text-[#48128A]"
                        : "bg-white/20 border-white/20 text-white"
                  )}
                >
                  {index < currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : index === currentFeature ? (
                    <span className="text-lg font-bold">{index + 1}</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-semibold transition-colors duration-300",
                    index === currentFeature ? "text-white" : "text-white/80"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-lg transition-colors duration-300",
                    index === currentFeature ? "text-white/90" : "text-white/30"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-xl shadow-2xl",
              imageHeight || "h-[200px] md:h-[300px] lg:h-[400px]"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={1000}
                        height={500}
                        priority
                        quality={90}
                      />
                      
                      {/* Gradient overlay without title */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#48128A]/50 to-transparent" />
                      
                      {/* Removed the feature title overlay completely */}
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
            
            {/* Step indicators - improved visibility */}
            <div className="absolute top-4 right-4 flex space-x-3 z-10">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300 shadow-md",
                    index === currentFeature 
                      ? "bg-white scale-125" 
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
