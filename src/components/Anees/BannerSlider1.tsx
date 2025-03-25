"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const BannerSlider1 = ({ isMargin }: { isMargin?: boolean }) => {
  const imageSrcs = [
    { imgSrc: "/services/b2.png", redirectUrl: "https://www.goodfirms.co/company/tech-craft-inc" },
    { imgSrc: "/services/b3.png", redirectUrl: "https://clutch.co/profile/tech-craft" },
    { imgSrc: "/services/b4.png", redirectUrl: "https://www.trustpilot.com/review/techcraftinc.com" },
    { imgSrc: "/services/b1.png", redirectUrl: "https://www.bark.com/en/us/company/tech-craft-inc/3Q92g/" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [currentX, setCurrentX] = useState(0);

  return (
    <div
      className={`${isMargin ? "my-10" : ""} bg-gradient-to-t from-white via-white to-[#BCBEC0]/70 overflow-hidden relative w-full py-16 pt-11`}
      data-aos="fade-down"
    >
      <div
        className="flex w-max"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex space-x-10"
          initial={{ x: 0 }}
          animate={{ 
            x: isHovered 
              ? currentX 
              : [currentX, -imageSrcs.length * 200]
          }}
          onUpdate={(latest) => {
            setCurrentX(latest.x as number);
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Changed from 30 to 15 for faster movement
            ease: "linear",
          }}
        >
          {[...imageSrcs, ...imageSrcs, ...imageSrcs].map((data, index) => (
            <div key={index} className="cursor-pointer flex-shrink-0">
              <Link href={data.redirectUrl} target="_blank" rel="noopener noreferrer">
                <Image src={data.imgSrc} alt={`cl-${index + 1}`} width={200} height={160} className="transition-transform duration-300   hover:scale-110" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BannerSlider1;