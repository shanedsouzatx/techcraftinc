"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Aurora from "@/components/Hero/Aurora"
type Heroprops = {
    className?:any
    gradient?: boolean | any ,
    blur?: boolean | any ,
    title?: string | any ,
    subtitle?: string | any ,
    image?: any | string ,
    actions?: React.ReactNode | any ,
    titleClassName?: string | any ,
    subtitleClassName?: string | any ,
    actionsClassName?: string | any ,
  } 

const Hero = React.forwardRef<HTMLElement, Heroprops>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      
      <div className=" !bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50 ">
  
  <Aurora 
  colorStops={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
  blend={0.5}
  amplitude={3}
  speed={0.4}
/>
      <section
        ref={ref}
        className={cn(
          "w-full min-h-[80vh] pt-16 overflow-hidden relative mx-auto flex flex-col md:flex-row justify-between px-4 w-full left-0 top-0 ",
          className,
        )}
        {...props}
      >
      
<div className="relative  container flex flex-col md:flex-row items-center justify-between px-5 md:px-0 gap-20 ">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col items-start text-left space-y-4"
      >
        <h1 className={cn("text-2xl !font-bold pb-2 bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  sm:text-3xl md:text-5xl lg:text-7xl ")}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-black ">
            {subtitle}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div className="flex gap-4">
            {actions.map((action:any, index:any) => (
              <Button 
                key={index} 
                variant={action.variant || "default"} 
                onClick={action.onClick}  // Add onClick handler
                asChild
              > 
                <Link href={action.href}>
                  <span>{action.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        )}
      </motion.div>
      
      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex-1 -mr-[200px] "
      >
        <Image 
          src={'https://res.cloudinary.com/dhggagqst/image/upload/v1742849852/Vector-02_lbbsdr.png'} 
          alt="Hero Image" 
          width={400} 
          height={300} 
          className="-mr-[200px] "
        />
      </motion.div>
    </div>
      </section>
      </div>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }
