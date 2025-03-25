"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai"
import { FaPhoneAlt } from "react-icons/fa"
import { ChevronDown, ChevronRight, Phone, Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar2() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false) // New state for mobile services
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const pathname = usePathname()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300)
  }

  return (
    <div
      className={cn(
        "w-full transition-all sticky duration-500 relative fixed top-0 z-[999] ",
        isScrolled
          ? "fixed sticky top-0 left-0 right-0  backdrop-blur-sm shadow-lg z-50 py-7  animate-in duration-300"
          : "relative",
      )}
    >
      {/* Main Navigation */}
      <div className="border-b relative overflow-hidden top-0 py-5 bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 "
      >
        {/* Gradient backgrounds */}
        <div
          className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-[#9D4973] via-[#DCA6E4]/10 to-[#282353] rounded-full blur-[100px] opacity-70 animate-pulse"
          style={{ animationDuration: "8s" }}
        /> 
        <div
          className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#282353] via-[#D9A4E3]/10 to-[#9D4973] rounded-full blur-[100px] opacity-70 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#DCA6E4] via-[#D9A4E3]/10 to-[#282353] rounded-full blur-[100px] opacity-40 animate-pulse"
          style={{ animationDuration: "12s" }}
        />

        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-[999] opacity-100 brightness-125  transition-all duration-500 hover:scale-105 py-4 relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image src="/services/logo2.png" alt="TechCraft Logo" width={250} height={370} />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center  flex-grow">
            <div className="flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <div ref={menuRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <motion.button
                  className="group flex items-center space-x-1 text-base font-medium transition-all duration-300 relative"
                  // whileHover={{ y: -2 }}
                >
                  <span className=" font-semibold ">Services</span>
                  <motion.div animate={isServicesOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-4 w-4 transition-transform duration-500" />
                  </motion.div>
                  {/* <div
                    className="absolute -top-7 -left-1 w-full h-[5px] bg-gradient-to-r from-[#5114AE] to-[#802FCE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-md"
                    style={{
                      boxShadow: "0 2px 10px rgba(126, 67, 199, 0.3)",
                      transition: "all 0.5s ease",
                    }}
                  /> */}
                  <div className="absolute bottom-[-5px] text-black -left-1  w-full h-[3px] bg-gradient-to-l from-[#48128A] to-[#8B3791] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right rounded-t-md" />
                </motion.button>
              </div>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/about-us">About us</NavLink>
              <NavLink href="/contact-us">Contact</NavLink>
            </div>
          </div>

          {/* Right side - Phone and Button */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              className="flex items-center cursor-pointer space-x-2 p-2 px-3 bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white rounded-full relative overflow-visible hover:border-2 hover:bg-none hover:text-black hover:border-black "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                if (window.Tawk_API) {
                  window.Tawk_API.maximize()
                }
              }}
            >
              <AiOutlineMessage size={20} />
              <span className="text-sm font-semibold">LIVE CHAT</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 text-black transition-all duration-300  border-2 border-radius-50% border-[#48128A] p-1 px-3 rounded-full hover:bg-gradient-to-b from-[#48128A] to-[#8B3791] hover:text-white relative overflow-visible "
              whileHover={{ scale: 1.05}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              > */}
                <FaPhoneAlt size={17} />
              {/* </motion.div> */}
              <Link href="tel:+18583650790" className="font-semiboldrelative text-black group  hover:text-white     ">
                (667) 423-5532
                {/* <span className="absolute bottom-1  left-0 w origin-left"></span> */}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative overflow-hidden transition-all duration-300 hover:border-[#7E43C7] hover:text-[#7E43C7]"
            >
              <Menu
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
                )}
              />
              <AiOutlineClose
                className={cn(
                  "absolute inset-0 h-6 w-6 m-auto transition-all duration-300",
                  isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
                )}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu - Fixed Position */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            className="fixed left-0 right-0 z-[100] bg-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 bg-white z-50 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-[#7E43C7]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium hover:text-[#7E43C7]"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)} // Changed to use the new state
                  >
                    <span>Services</span>
                    <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && ( // Changed to use the new state
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-[50vh] overflow-y-auto pb-2" // Added max height and scroll
                      >
                        <MobileMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {[
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/about-us", label: "About us" },
                  { href: "/contact-us", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-[#7E43C7]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-4">
                  <Link href="tel:+16674235532" className="flex items-center space-x-2 text-[#AE96D0]">
                    <Phone className="h-5 w-5" />
                    <span className="text-lg font-medium">(667) 423-5532</span>
                  </Link>
                  <Button className="rounded-full bg-gradient-to-r from-[#5114AE] to-[#802FCE] hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                    Get A Quote
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MegaMenu() {
  return (
    <div className="w-full bg-white/95 backdrop-blur-md shadow-2xl border-b border-purple-100 overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto">
        {/* Gradient backgrounds */}
        <div
          className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-[#9D4973] via-[#DCA6E4]/10 to-[#282353] rounded-full blur-[100px] opacity-50 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#282353] via-[#D9A4E3]/10 to-[#9D4973] rounded-full blur-[100px] opacity-50 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#DCA6E4] via-[#D9A4E3]/10 to-[#282353] rounded-full blur-[100px] opacity-40 animate-pulse"
          style={{ animationDuration: "12s" }}
        />
{/* ?2nd gradient */}
<div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#9D4973]/30 via-[#DCA6E4]/10 to-[#282353]/50 rounded-full blur-[100px] opacity-50 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          // className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#282353] via-[#D9A4E3]/10 to-[#9D4973] rounded-full blur-[100px] opacity-50 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        {/* <div
          className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-r from-[#DCA6E4] via-[#D9A4E3]/10 to-[#282353] rounded-full blur-[100px] opacity-40 animate-pulse"
          style={{ animationDuration: "12s" }}
        /> */}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-4">
            {/* Featured Section */}
            {/* <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <motion.h3 className="text-xl font-bold relative inline-block" whileHover={{ scale: 1.05 }}>
                  <span className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] bg-clip-text text-transparent">
                    Built to Win
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#5114AE] to-[#802FCE]"></div>
                </motion.h3>
                <p className="text-base text-gray-600">
                  Transforming business with our future-ready tech solutions. Get custom products for accelerated
                  digital transformation across industries globally.
                </p>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(126, 67, 199, 0.3)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://peivast.com/wp-content/uploads/featured_ucd-scaled.jpg"
                    alt="TechCraft Logo"
                    width={400}
                    height={250}
                    className="w-full h-[150px] object-cover"
                  />
                </motion.div>
              </motion.div>
            </div> */}
  <motion.div
              className="md:col-span-1 space-y-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCategory
                title="Writing"
                links={[
                  { href: "/services/website-content-writing", label: "Website Content Writing" },
                  { href: "/services/seo-blog-writing", label: "SEO Blog Writing" },
                  { href: "/services/script-writing", label: "Script Writing" },
                  { href: "/services/copy-writing", label: "CopyWriting " },
                  { href: "/services/article-writing", label: "Article Writing" },
                ]}
              />
            </motion.div>

          
            {/* Service Categories - Each in its own column */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCategory
                title="Graphic Designing"
                links={[
                  { href: "/services/branding", label: "Branding" },
                  { href: "/services/logo-designing", label: "Logo Designing" },
                  { href: "/services/web-designing", label: "Web Designing" },
                  { href: "/services/3d-graphic-designing", label: "3D Graphic Designing" },
                  { href: "/services/events-and-social-media-design", label: "Event and Social Media Design" },
                  { href: "/services/logo-animation", label: "Logo Animation" },
                ]}
              />
            </motion.div>

            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ServiceCategory
                title="Digital Marketing"
                links={[
                  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
                  { href: "/services/search-engine-optimization", label: "Search Engine Optimization" },
                  { href: "/services/content-writing", label: "Content Writing" },
                  { href: "/services/social-media-management", label: "Social Media Management" },
                  { href: "/services/search-engine-marketing", label: "Search Engine Marketing" },
                  { href: "/services/email-marketing", label: "Email Marketing" },
                ]}
              />
            </motion.div>

            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ServiceCategory
                title="Video Editing/Animation"
                links={[
                  { href: "/services/3d-animation", label: "3D Animation" },
                  { href: "/services/2d-animation", label: "2D Animation" },
                  { href: "/services/explainer-videos", label: "Explainer videos" },
                  { href: "/services/white-board", label: "White Board" },
                  { href: "/services/cgi-animation", label: "CGI animation" },
                  { href: "/services/video-editing", label: "Video Editing" },
                ]}
              />
            </motion.div>

            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ServiceCategory
                title="Development"
                links={[
                  { href: "/services/application-development", label: "Application Development" },
                  { href: "/services/wordpress-website-development", label: "WordPress Website Development" },
                  { href: "/services/custom-website-development", label: "Custom Website Development" },
                  { href: "/services/shopify-website-development", label: "Shopify Website Development" },
                  { href: "/services/ecommerce-website-development", label: "E-Commerce Website Development" },
                  { href: "/services/mobile-application-development", label: "Mobile Application Development" },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCategory({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="space-y-4">
      <ServiceHeading title={title} />
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ServiceLink href={link.href} label={link.label} />
          </motion.div>
        ))}
      </ul>
    </div>
  )
}

function MobileMenu() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  
  const serviceCategories = [
    {
      title: "Graphic Designing",
      links: [
        { href: "/services/branding", label: "Branding" },
        { href: "/services/logo-designing", label: "Logo Designing" },
        { href: "/services/web-designing", label: "Web Designing" },
      ],
    },
    {
      title: "Digital Marketing",
      links: [
        { href: "/services/social-media-marketing", label: "Social Media Marketing" },
        { href: "/services/search-engine-optimization", label: "Search Engine Optimization" },
        { href: "/services/content-writing", label: "Content Writing" },
      ],
    },
    {
      title: "Video Editing/Animation",
      links: [
        { href: "/services/3d-animation", label: "3D Animation" },
        { href: "/services/2d-animation", label: "2D Animation" },
        { href: "/services/explainer-videos", label: "Explainer videos" },
      ],
    },
    {
      title: "Development",
      links: [
        { href: "/services/application-development", label: "Application Development" },
        { href: "/services/wordpress-website-development", label: "WordPress Website Development" },
        { href: "/services/custom-website-development", label: "Custom Website Development" },
      ],
    },
    {
      title: "Writing",
      links: [
        { href: "/services/website-content-writing", label: "Website Content Writing" },
        { href: "/services/seo-blog-writing", label: "SEO Blog Writing" },
        { href: "/services/script-writing", label: "Script Writing" },
      ],
    },
  ]

  return (
    <div className="space-y-4 pl-4 py-2">
      {serviceCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
          className="border-b border-gray-100 pb-2"
        >
          <button 
            className="flex items-center justify-between w-full py-2"
            onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
          >
            <ServiceHeading title={category.title} size="small" />
            <motion.div 
              animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-4 w-4 text-[#7E43C7]" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {expandedCategory === category.title && (
              <motion.ul 
                className="space-y-2 mt-2 ml-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {category.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: linkIndex * 0.05 }}
                  >
                    <ServiceLink href={link.href} label={link.label} />
                  </motion.div>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced ServiceHeading component for eye-catching headings
function ServiceHeading({
  title,
  className = "",
  size = "normal",
}: { title: string; className?: string; size?: "normal" | "small" }) {
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className={cn("font-bold relative z-10", size === "normal" ? "text-xl" : "text-lg")}>
        <span className="bg-gradient-to-r from-[#5114AE] via-[#7E43C7] to-[#802FCE] bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <motion.div
        className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full"
        whileHover={{ height: "5px", boxShadow: "0 2px 10px rgba(126, 67, 199, 0.5)" }}
      />
    </motion.div>
  )
}

// Enhanced ServiceLink component with more advanced hover effects
function ServiceLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Link
        href={href}
        className="group flex items-center text-base text-gray-600 hover:text-[#7E43C7] transition-all duration-300"
      >
        <motion.div
          whileHover={{ rotate: 45, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex-shrink-0 mr-2"
        >
          <ChevronRight className="h-4 w-4 text-[#7E43C7]" />
        </motion.div>
        <span className="relative overflow-hidden">
          {label}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#5114AE] to-[#802FCE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            whileHover={{ height: "2px" }}
          />
        </span>
      </Link>
    </motion.li>
  )
}

// Enhanced NavLink component with more advanced hover effects
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + "/")

  return (
    <Link
      href={href}
      className={cn(
        "group relative text-md font-bold transition-colors duration-300",
        isActive ? "text-black" : "hover:text-black",
      )}
    >
      <motion.span
        className="relative z-10"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      {/* <motion.div
        className={cn(
          "",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
        style={{
          boxShadow: isActive ? "0 2px 10px rgba(126, 67, 199, 0.5)" : "none",
        }}
        whileHover={{ boxShadow: "0 2px 15px rgba(126, 67, 199, 0.8)" }}
      /> */}
      <motion.div
        className={cn(
          "absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-[#48128A] to-[#8B3791] transform transition-all duration-500 origin-right rounded-t-md",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
        whileHover={{ boxShadow: "0 -2px 15px rgba(0, 0, 0, 0.8)" }}
      />
    </Link>
  )
}

