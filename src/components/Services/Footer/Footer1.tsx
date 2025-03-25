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

// Custom FooterLink component with hover effects
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative inline-block hover:text-[#8B3791] transition-colors">
      <span>{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#48128A] to-[#8B3791] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        whileHover={{ height: "2px" }}
      />
    </Link>
  )
}

export default function Footer1() {
 
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
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
    <>
      <footer className="!bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50 ">
  <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image src="/services/logo2.png" alt="TechCraft Logo" width={200} height={320} />
            </motion.div>
        </div>

        <p
          className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400"
        >
          We craft compelling, high-impact content that drives engagement, boosts SEO, and strengthens brand presence. Lets build your digital success story together .
        </p>

        <ul className="mt-5 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <motion.a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#48128A] transition text-[#8B3791] dark:text-teal-500 dark:hover:text-teal-500/75"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">Facebook</span>
              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </li>

          <li>
            <motion.a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#48128A] transition text-[#8B3791] dark:text-teal-500 dark:hover:text-teal-500/75"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">Instagram</span>
              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </li>

          <li>
            <motion.a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#48128A] transition text-[#8B3791] dark:text-teal-500 dark:hover:text-teal-500/75"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">Twitter</span>
              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>
          </li>

          <li>
            <motion.a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#48128A] transition text-[#8B3791] dark:text-teal-500 dark:hover:text-teal-500/75"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </li>

          <li>
            <motion.a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#48128A] transition text-[#8B3791] dark:text-teal-500 dark:hover:text-teal-500/75"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">Behance</span>
              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099.984.297 1.377.544.394.247.689.594.885 1.039.197.445.296.989.296 1.583 0 .693-.148 1.286-.492 1.731-.295.446-.787.841-1.377 1.138.836.248 1.475.693 1.869 1.287.394.594.64 1.336.64 2.177 0 .693-.148 1.286-.394 1.781-.246.495-.639.89-1.082 1.188-.443.297-.984.544-1.574.692-.59.148-1.18.198-1.77.198H1V5.35h6.443zm-.394 5.54c.541 0 .984-.148 1.328-.396.344-.247.492-.693.492-1.287 0-.346-.05-.643-.197-.841-.148-.247-.295-.395-.492-.494-.197-.1-.443-.148-.689-.198-.246 0-.492-.05-.787-.05H3.82v3.266h3.229zm.148 5.838c.295 0 .59-.05.836-.099a1.72 1.72 0 00.688-.297 1.76 1.76 0 00.492-.544c.098-.247.197-.544.197-.89 0-.693-.197-1.188-.59-1.534-.394-.297-.935-.445-1.574-.445H3.82v3.809h3.377zm9.443-5.048c.541 0 1.033.099 1.426.297.394.198.738.445.984.742.246.297.443.643.59 1.04.147.396.246.791.246 1.237 0 .148 0 .297-.049.445 0 .148-.049.247-.049.346H14.77c0 .346.05.643.148.94.098.297.246.544.443.742.197.198.394.347.689.446.246.099.59.148.885.148.394 0 .787-.099 1.082-.247.295-.198.492-.445.639-.841h2.361c-.148.495-.345.94-.64 1.336-.294.396-.639.693-1.033.94-.394.248-.836.447-1.328.546-.492.099-.984.148-1.475.148-.738 0-1.377-.099-1.968-.297-.59-.198-1.082-.495-1.524-.891-.443-.396-.738-.891-.984-1.435-.197-.544-.295-1.188-.295-1.93 0-.693.098-1.336.295-1.93.197-.594.541-1.09.984-1.534.443-.396.935-.742 1.524-.94.59-.198 1.279-.297 2.066-.297zm-.049 1.93c-.639 0-1.131.148-1.475.494-.344.297-.59.742-.64 1.287h4.033c0-.198-.05-.396-.098-.594-.05-.198-.148-.347-.246-.495-.148-.148-.295-.247-.541-.346-.246-.1-.492-.149-.837-.149l-.196.003zm-5.458-5.292h5.015v1.534h-5.015V8.32z" />
              </svg>
            </motion.a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-2xl font-medium bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <FooterLink href="#">Company History</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Meet the Team</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Employee Handbook</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Careers</FooterLink>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-2xl font-medium bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <FooterLink href="#">Web Development</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Web Design</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Marketing</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Google Ads</FooterLink>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-2xl font-medium bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <FooterLink href="#">FAQs</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Support</FooterLink>
            </li>

            <li>
              <div className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <FooterLink href="#">Live Chat</FooterLink>

                <span className="relative flex size-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                  ></span>
                  <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-2xl font-medium bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <FooterLink
                href="mailto:john@doe.com"
              >
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900 shadow-sm dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="flex-1 text-gray-700 dark:text-gray-300">john@doe.com</span>
                </div>
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="tel:0123456789"
              >
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900 shadow-sm dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="flex-1 text-gray-700 dark:text-gray-300">0123456789</span>
                </div>
              </FooterLink>
            </li>

            <li>
              <FooterLink href="#">
                <div className="flex items-start gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900 shadow-sm dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <address className="-mt-0.5 flex-1 text-gray-700 not-italic dark:text-gray-300">
                    213 Lane, London, United Kingdom
                  </address>
                </div>
              </FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:inline">All rights reserved.</span>
&nbsp;
          <FooterLink href="#">Terms & Conditions</FooterLink>

          <span>&middot;</span>
          <span>&middot;</span>
          <span>&middot;</span>
          <span>&middot;</span>
          <span>&middot;</span>

          <FooterLink href="#">Privacy Policy</FooterLink>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
          &copy; 2025 Tech Craft Inc
        </p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}