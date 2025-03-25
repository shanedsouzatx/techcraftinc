"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const BannerSlider = ({ isMargin }: { isMargin?: boolean }) => {
  const imageSrcs = [
    { imgSrc: "/assets/images/1.png", redirectUrl: "https://www.goodfirms.co/company/tech-craft-inc" },
    { imgSrc: "/assets/images/3.png", redirectUrl: "https://clutch.co/profile/tech-craft" },
    { imgSrc: "/assets/images/2.png", redirectUrl: "https://www.trustpilot.com/review/techcraftinc.com" },
    { imgSrc: "/assets/images/4.png", redirectUrl: "https://www.bark.com/en/us/company/tech-craft-inc/3Q92g/" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${isMargin ? "my-10" : ""} bg-[#100D23] overflow-hidden relative w-full py-16 pt-11`}
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
          animate={{ x: isHovered ? undefined : [0, -imageSrcs.length * 200] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...imageSrcs, ...imageSrcs, ...imageSrcs].map((data, index) => (
            <div key={index} className="cursor-pointer flex-shrink-0">
              <Link href={data.redirectUrl} target="_blank" rel="noopener noreferrer">
                <Image src={data.imgSrc} alt={`cl-${index + 1}`} width={240} height={200} className="transition-transform duration-300  hover:scale-110" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BannerSlider;