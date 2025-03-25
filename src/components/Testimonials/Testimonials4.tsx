"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import {  Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function  TestimonialDesign4()  {
    const testimonials = [
        {
          id: 1,
          name: "James Anderson",
          role: "Founder & CEO",
          company: "Arios Brands",
          image: "/Avatar/ava11.jpg",
          content:
            "“I needed a professional website as an online storefront for my business, and I was looking for a professional service for web development. While searching through the internet I found TechCraft and decided to take their services. I am very satisfied with the results as I have a professional looking website to represent my brand. Thanks for amazing services!”",
        },
        {
          id: 2,
          name: "Jennifer Collins",
          role: "Marketing Director",
          company: "Global Reach Solutions",
          image: "/Avatar/ava1.jpg",
          content:
            "“Amazing! TechCraft have a skilled team of marketers. I have been looking for a digital marketing agency for branding purposes when I learned about TechCraft. I’m still astounded with their expeditious results. Looking forward to collaborate again! I am so happy that I chose you.”",
        },
        {
          id: 3,
          name: "Marcus Thompson",
          role: "E-commerce Lead",
          company: "Retail Edge",
          image: "/Avatar/ava2.jpg",
          content:
            "“TechCraft truly provide what they claim! They professionally communicated with me that made me receive the illustrations that I very much admire. Their creatives are especially worth the admiration for creating an inspirational image for my brand. Thank you, TechCraft!”",
        },
        {
          id: 4,
          name: "Jason Decker",
          role: "Head of Product",
          company: "Tech Pioneers",
          image: "/Avatar/ava3.jpg",
          content:
            "“TechCraft provided me with a great web design. I highly appreciate the customization in the design as per requested. I am glad that I chose to work with the company as they provided me with a website and performance marketing as well. Thanks for great services!”",
        },
        {
          id: 5,
          name: "Daniel Park",
          role: "CEO",
          company: "Nevify Solutions",
          image: "/Avatar/ava10.jpg",
          content:
            "“It was a pleasure working with professionals at TechCraft. As their name suggests, they give premium services and are gurus of their respective fields. Outstanding job as always! I had a fantastic experience. Highly recommended for anyone looking for quality work! Thank you so much TechCraft Inc.”",
        },
        {
          id: 6,
          name: "Jack Brown",
          role: "Brand Strategist",
          company: "Elevate Marketing",
          image: "/Avatar/ava5.jpg",
          content:
            "“Branding was quite difficult for me when I first started my business. Greatest appreciation for TechCraft as they took the responsibility and challenges of online marketing for my brand. Keep up the amazing work! They delivered exactly what I needed, on time and beyond expectations. Impressive!”",
        },
        {
          id: 7,
          name: "William Carter",
          role: "Chief Technology Officer",
          company: "InnovateX",
          image: "/Avatar/ava6.jpg",
          content:
            "“The professionals at TechCraft are knowledgeable and highly skilled. I enjoyed collaborating with the team as I got a lot to learn as well. Thank you for the support and productivity. I highly recommend their services! Outstanding service from start to finish! Their professionalism and dedication are unmatched.”",
        },
        {
          id: 8,
          name: "Olivia Chen",
          role: "Product Development Manager",
          company: "Maricus.D",
          image: "/Avatar/ava7.jpg",
          content:
            "“Greatest appreciation for TechCraft and the team for providing an exceptional application for my brand. It is just how I wanted it to be: highly functional and user-friendly. I feel privileged to have worked with a company that defines innovation and professionalism by giving its best. Highly recommend them!”",
        },
        {
          id: 9,
          name: "Natasha Aniston",
          role: "Startup Founder",
          company: "BrightPath Solutions",
          image: "/Avatar/ava12.jpg",
          content:
            "“Being a beginner in the business world, I contacted TechCraft for online branding, web designing, and SEO services. Despite the tight deadline, they delivered a high-quality website that was mobile-friendly and bug-free. I highly recommend their services for their fast-paced delivery and reliability!”",
        },
      ];
      
  
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  
    const nextTestimonial = () => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  
    const prevTestimonial = () => {
      setDirection(-1)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  
    const variants = {
      enter: (direction:any) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 45 : -45,
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      },
      exit: (direction:any) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? -45 : 45,
        transition: {
          duration: 0.5,
        },
      }),
    }
  
    // Auto-advance carousel
    useEffect(() => {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 14000)
      return () => clearInterval(interval)
    }, [])
  
    return (
      <div
        className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#48128A]  to-[#8B3791]  text-black overflow-hidden"
        ref={containerRef}
      >
        <div className="max-w-6xl mx-auto relative ">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Quote className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-3xl text-white  bg-gradient-to-t from-[#BCBEC0] to-[#FFFFFF] text-transparent bg-clip-text uppercase md:text-4xl font-bold mb-4">CLIENTS SUCCESS STORIES</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our clients achieve extraordinary results. Here are some of their stories.
            </p>
          </motion.div>
  
          {/* Background decorative elements */}
          <motion.div
            className="absolute top-40 text- left-10 w-64 h-64 rounded-full bg-black/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
  
          <div className="relative perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="!bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 backdrop-blur-lg rounded-xl p-8 md:p-12 shadow-2xl relative z-10"
              >
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#9c6dff] text-white flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 0 rgba(156, 109, 255, 0.4)",
                      "0 0 20px rgba(156, 109, 255, 0.6)",
                      "0 0 0 rgba(156, 109, 255, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Sparkles className="h-6 w-6 text-white " />
                </motion.div>
  
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full blur-md"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                      }}
                    />
                    <Image
  src={testimonials[currentIndex].image || "/placeholder.svg"}
  alt={testimonials[currentIndex].name}
  width={320}
  height={320}
  className="rounded-full border-2 border-white relative z-10"
/>

                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Quote className="h-12 w-12 mb-4 text-black/70 " />
                      <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                        {testimonials[currentIndex].content}
                      </p>
                      <div>
                        <h3 className="font-bold text-xl">{testimonials[currentIndex].name}</h3>
                        <p className="text-black/80">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
  
            <div className="flex justify-center text-white mt-12 gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 text-white  hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`h-[24px] w-[24px]  rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-[24px] bg-white" : "w-[5px] h-[5px] bg-white/40"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-[24px] w-[24px] " />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    )
  }