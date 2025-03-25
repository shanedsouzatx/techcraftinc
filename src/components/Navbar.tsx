"use client";
import React, { useRef, useState, useEffect } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  AiOutlineMessage,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Image from "next/image";
import Logo from "../../public/assets/images/tech-craft-logo.png";
import { useRouter } from "next/navigation";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button')
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between fixed top-7 md:top-10 left-0 right-0 mx-auto z-50 shadow-2xl rounded-full py-3 px-4 md:px-6 bg-white w-[95%] md:w-auto md:max-w-6xl",
          className
        )}  
        data-aos="fade-down"
      >
        <Link
          href="/"
          className="flex items-center cursor-pointer"
          // onClick={() => router.push("/")}
        >
          <Image src={Logo} alt="TechCraftLogo" width={170} height={170} />
        </Link>

        <div className="hidden md:flex">
          <Menu setActive={setActive}>
            <Link href="/">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>
            <Link href="/services">
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="text-sm font-semibold grid grid-cols-2 gap-6 p-4">
                  <Link href="/logo-design" className="hover:text-[#5114AE]">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824856/menu01_ofcjvf.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Logo Design
                    </div>
                  </Link>
                  <Link
                    href="/website-development"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824910/menu03_x8mnvy.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Web Application Development
                    </div>
                  </Link>
                  <Link href="/web-design" className="hover:text-[#5114AE]">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824910/menu03_x8mnvy.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Web Design
                    </div>
                  </Link>

                  <Link
                    href="/mobile-application"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720825050/menu09_oqo3ah.png"
                          alt="Mobile-app-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Mobile Application Development
                    </div>
                  </Link>
                  <Link href="/branding" className="hover:text-[#5114AE]">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824989/menu07_oxkpqj.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Branding
                    </div>
                  </Link>
                  <Link
                    href="/wordpress-development"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720825050/menu09_oqo3ah.png"
                          alt="Mobile-app-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Word Press Development
                    </div>
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824935/menu04_vylpis.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Search Engine Optimization
                    </div>
                  </Link>
                  <Link
                    href="/video-animation"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720825004/menu08_p8oupv.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                          objectFit="contain"
                        />
                      </div>
                      Video Animation
                    </div>
                  </Link>
                  <Link
                    href="/social-media-marketing"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824962/menu06_y5a4ii.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Social Media Marketing
                    </div>
                  </Link>
                  <Link
                    href="/ecommerce-solutions"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824953/menu05_gzrsx5.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Ecommerce Web Solutions
                    </div>
                  </Link>
                  <Link
                    href="/creative-copywriting"
                    className="hover:text-[#5114AE]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] rounded-full h-14 w-14 flex justify-center items-center">
                        <Image
                          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720824895/menu02_u5lryc.png"
                          alt="Logo-design-icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      Creative Copywriting
                    </div>
                  </Link>
                </div>
              </MenuItem>
            </Link>
            <Link href="/portfolio">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Portfolio"
              ></MenuItem>
            </Link>
            <Link href="/pricing">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Pricing"
              ></MenuItem>
            </Link>
            <Link href="/about-us">
              <MenuItem
                setActive={setActive}
                active={active}
                item="About Us"
              ></MenuItem>
            </Link>
            <Link href="/contact-us">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
              ></MenuItem>
            </Link>
          </Menu>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div
            className="flex items-center cursor-pointer space-x-2 p-2 px-3 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full relative overflow-visible button-animation"
            onClick={() => {
              if (window.Tawk_API) {
                window.Tawk_API.maximize();
              }
            }}
          >
            <AiOutlineMessage size={20} />
            <span className="text-sm font-semibold">LIVE CHAT</span>
          </div>
          <div className="flex items-center space-x-2 text-[#5114AE]">
            <FaPhoneAlt size={17} />
            <Link href="tel:+18583650790" className="font-semibold">
              (667) 423-5532
            </Link>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar} className="focus:outline-none">
            {sidebarOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-full bg-black bg-opacity-50 z-50">
          <div 
            ref={sidebarRef}
            className="bg-[#E9E9E9] h-full w-3/4 max-w-[300px] border-r border-slate-300"
          >
            <div className="flex flex-col">
              <div className="py-6 pl-4" onClick={() => router.push("/")}>
                <Image
                  src={Logo}
                  alt="TechCraftLogo"
                  width={150}
                  height={150}
                />
              </div>

              <ul>
                <li className="py-2 border-t border-gray-300 px-6 text-slate-600">
                  <Link href="/" className="text-sm">
                    Home
                  </Link>
                </li>
                <li className="py-2 border-t border-gray-300 text-slate-600">
                  <div className="flex justify-between items-center px-6">
                    <Link href="/services" className="text-sm">
                      Services
                    </Link>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      aria-controls="services-submenu"
                    >
                      {servicesOpen ? (
                        <TiArrowSortedUp size={18} color="#333" />
                      ) : (
                        <TiArrowSortedDown size={18} color="#333" />
                      )}
                    </button>
                  </div>
                  <div
                    id="services-submenu"
                    ref={submenuRef}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      servicesOpen ? "max-h-96" : "max-h-0"
                    }`}
                    style={{
                      maxHeight: servicesOpen
                        ? `${submenuRef.current?.scrollHeight}px`
                        : "0px",
                    }}
                  >
                    <ul className="mt-2 bg-white">
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/logo-design"
                          className="text-xs font-medium text-slate-600"
                        >
                          Logo Design
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/web-design"
                          className="text-xs font-medium text-slate-600"
                        >
                          Web Design
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/website-development"
                          className="text-xs font-medium text-slate-600"
                        >
                          Web Application Development
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/wordpress-development"
                          className="text-xs font-medium text-slate-600"
                        >
                          WordPress Web Development
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/mobile-application"
                          className="text-xs font-medium text-slate-600"
                        >
                          Mobile Application Development
                        </Link>
                      </li>

                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/creative-copywriting"
                          className="text-xs font-medium text-slate-600"
                        >
                          Creative Copywriting
                        </Link>
                      </li>

                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/digital-marketing"
                          className="text-xs font-medium text-slate-600"
                        >
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/ecommerce-solutions"
                          className="text-xs font-medium text-slate-600"
                        >
                          Ecommerce Web Solutions
                        </Link>
                      </li>
                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/video-animation"
                          className="text-xs font-medium text-slate-600"
                        >
                          Video Animation
                        </Link>
                      </li>

                      <li className="py-2 px-6 border-t border-gray-300">
                        <Link
                          href="/branding"
                          className="text-xs font-medium text-slate-600"
                        >
                          Branding
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-2 border-t border-gray-300 px-6 text-slate-600">
                  <Link href="/portfolio" className="text-sm">
                    Portfolios
                  </Link>
                </li>
                <li className="py-2 border-t border-gray-300 px-6 text-slate-600">
                  <Link href="/pricing" className="text-sm">
                    Pricing
                  </Link>
                </li>
                <li className="py-2 border-t border-gray-300 px-6 text-slate-600">
                  <Link href="/about-us" className="text-sm">
                    About Us
                  </Link>
                </li>
                <li className="py-2 border-t border-gray-300 px-6 text-slate-600">
                  <Link href="/contact-us" className="text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
