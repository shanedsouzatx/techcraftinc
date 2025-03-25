"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Code, Globe, Laptop, ShoppingBag, Star, Users } from "lucide-react"

export default function AgencyStatistics() {
  return (
    <div className="w-full bg-[#f1f1f1] text-[#211D44] py-16 px-4 md:px-8 lg:px-16">
      <div className=" ">
        {/* Section 1: Our Achievements */}
    <div className="bg-[#F4BAFF] max-w-9xl mx-auto py-11 ">

        <StatisticsSection title="Our Achievements" subtitle="We take pride in our work and the results we deliver">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 mt-10">
            <StatCard
              icon={<Laptop className="w-10 h-10 text-[#D5A2E3]" />}
              value={120}
              label="Stunning Websites Designed"
              delay={0.1}
            />
            <StatCard
              icon={<Award className="w-10 h-10 text-[#D5A2E3]" />}
              value={80}
              label="Unique Brand Identities Created"
              delay={0.2}
            />
            <StatCard
              icon={<Code className="w-10 h-10 text-[#D5A2E3]" />}
              value={50}
              label="Innovative Mobile Apps Delivered"
              delay={0.3}
            />
            <StatCard
              icon={<ShoppingBag className="w-10 h-10 text-[#D5A2E3]" />}
              value={30}
              label="Scalable Online Stores Launched"
              delay={0.4}
            />
          </div>
        </StatisticsSection>
    </div>

        {/* Section 2: Who We've Worked With */}
        <StatisticsSection
          title="Who We've Worked With"
          subtitle="Trusted by businesses around the world"
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <WorldMap />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <StatCard
                icon={<Users className="w-10 h-10 text-[#D5A2E3]" />}
                value={200}
                label="Happy Clients Worldwide"
                delay={0.1}
              />
              <StatCard
                icon={<Globe className="w-10 h-10 text-[#D5A2E3]" />}
                value={10}
                label="Countries Reached"
                delay={0.2}
              />
              <StatCard
                icon={<Code className="w-10 h-10 text-[#D5A2E3]" />}
                value={15}
                label="Different Industries"
                delay={0.3}
              />
              <ClientSatisfaction />
            </div>
          </div>
        </StatisticsSection>

        {/* Section 3: Why Choose Us */}
        <StatisticsSection title="Why Choose Us?" subtitle="Experience, expertise, and excellence" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <FeatureCard title="5+ Years" description="Of Industry Experience" delay={0.1} />
            <FeatureCard title="20+ Experts" description="In Design, Development & Marketing" delay={0.2} />
            <FeatureCard title="Fast Turnaround" description="& Scalable Solutions" delay={0.3} />
            <FeatureCard title="Award-Winning" description="Designs & Best-in-Class Support" delay={0.4} />
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#A95385] to-[#D5A2E3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </StatisticsSection>
      </div>
    </div>
  )
}

export function StatisticsSection({ title, subtitle, children, className = "" }:any) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={className}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A95385] to-[#D5A2E3] inline-block text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="text-[#D5A2E3]/80 mt-2 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </motion.section>
  )
}

export function StatCard({ icon, value= 125, label = 'Team Mates', delay=2}:any) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      let start = 0
      const duration = 2000 // 2 seconds
      const increment = Math.ceil(value / (duration / 16)) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [controls, isInView, value])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay || 0,
          },
        },
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(213, 162, 227, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#211D44]/50 border border-[#A95385]/20 rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#211D44]/70 transition-all duration-300"
    >
      <div className="mb-4 p-3 bg-[#A95385]/10 rounded-full">{icon}</div>
      <h3 className="text-4xl font-bold text-white mb-2">{count}+</h3>
      <p className="text-[#D5A2E3]/80">{label}</p>
    </motion.div>
  )
}

export function ClientSatisfaction() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.4,
          },
        },
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(213, 162, 227, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#211D44]/50 border border-[#A95385]/20 rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#211D44]/70 transition-all duration-300"
    >
      <div className="mb-4 p-3 bg-[#A95385]/10 rounded-full">
        <Star className="w-10 h-10 text-[#D5A2E3]" />
      </div>
      <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
      <p className="text-[#D5A2E3]/80">Positive Feedback & 5-Star Ratings</p>
      <div className="flex mt-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </motion.div>
  )
}

export function FeatureCard({ title, description, delay }:any) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay || 0,
          },
        },
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(213, 162, 227, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="bg-gradient-to-br from-[#A95385]/20 to-[#D5A2E3]/10 border border-[#A95385]/20 rounded-xl p-6 flex flex-col items-center text-center hover:from-[#A95385]/30 hover:to-[#D5A2E3]/20 transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#D5A2E3]/80">{description}</p>
    </motion.div>
  )
}

export function WorldMap() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Simplified world map with dots representing client locations
  const locations = [
    { x: "20%", y: "30%" }, // North America
    { x: "30%", y: "40%" }, // South America
    { x: "48%", y: "25%" }, // Europe
    { x: "55%", y: "35%" }, // Africa
    { x: "65%", y: "30%" }, // Asia
    { x: "75%", y: "55%" }, // Australia
    { x: "25%", y: "35%" }, // Additional location
    { x: "52%", y: "28%" }, // Additional location
    { x: "60%", y: "40%" }, // Additional location
    { x: "70%", y: "35%" }, // Additional location
  ]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.1,
          },
        },
      }}
      className="bg-[#211D44]/50 border border-[#A95385]/20 rounded-xl p-6 h-full flex flex-col items-center justify-center"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Global Reach</h3>
      <div className="relative w-full aspect-[2/1] bg-[#211D44] rounded-lg border border-[#A95385]/30 overflow-hidden">
        {/* Simplified world map background */}
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=400&width=800')] bg-no-repeat bg-center bg-contain"></div>

        {/* Location dots */}
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                },
              },
            }}
            className="absolute w-3 h-3 rounded-full bg-[#A95385]"
            style={{ left: loc.x, top: loc.y }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
              className="absolute inset-0 bg-[#D5A2E3] rounded-full"
            />
          </motion.div>
        ))}
      </div>
      <p className="text-[#D5A2E3]/80 mt-4">Worked with clients from 10+ countries</p>
    </motion.div>
  )
}

