"use client"
import Image from "next/image";
import GradientButton from "../GradientButton";
import OutlineButton from "../OulineButton";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { closeModal } from "@/app/utils/HelperFunction";
import Link from "next/link";
import Aurora from './Aurora';
export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>

<Aurora
  colorStops={["#E6ACF0", "#CC75B8", "#9B4871"]}
  blend={0.5}
  amplitude={3}
  speed={0.4}
/>
      <div className="max-w-7xl pt-7 md:pt-6 overflow-hidden relative mx-auto flex flex-col md:flex-row justify-between px-4 w-full left-0 top-0">
      {/* <div className="absolute top-10 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-[#26214D] via-[#26214D]/10 to-transparent rounded-full blur-[100px] opacity-50" />
      <div className="absolute top-20 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#26214D] via-[#26214D]/10 to-transparent rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#26214D] via-[#26214D]/10 to-transparent rounded-full blur-[100px] opacity-40" /> */}
            <div className="md:w-1/2" data-aos="fade-down">
              <h2 className="text-[#2F2961] font-bold text-2xl lg:text-3xl mb-3 md:mb-5 z-50">
                Exclusivity. Uniqueness. Innovation.
              </h2>
              <h1 className="text-[1.7rem] md:text-5xl text-[#2F2961] font-medium dark:text-white flex flex-col space-y-0 md:space-y-2 z-50">
                <span> You dream it,</span>
                <span>We digitalize It</span>
                <span>Your growth and</span>
                <span> success is our goal!</span>
              </h1>
              <p className="max-w-[320px] md:max-w-2xl text-base md:text-lg mt-3 md:mt-5 dark:text-neutral-200 z-50">
                Drive your brand forward with innovative digital tactics. We
                partner with you to transform your growth and redefine your
                success.
              </p>
            
              {/* ORM ICONS */}
              <div className="flex items-center gap-4 mt-5 z-50">
                <Link href="https://www.trustpilot.com/review/techcraftinc.com">
                  <Image
                    src={'/assets/images/trust.png'}
                    alt="trustpilot"
                    className="w-24 h-auto md:w-[130px] md:h-auto"
                    width={130}
                    height={130}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047150/google_fdnuh4.png"
                    alt="google"
                    className="w-24 h-auto md:w-[130px] md:h-auto"
                    width={130}
                    height={130}
                  />
                </Link>
                {/* <Link href="#" className="mt-4">
                  <Image
                    src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047182/bings-logo_pbyvk7.png"
                    alt="bingads"
                    className="w-24 h-auto md:w-[130px] md:h-auto"
                    width={130}
                    height={130}
                  />
                </Link> */}
              </div>

              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
                <GradientButton
                  text="Let's Get Started"
                  onClick={openModal}
                />
                <OutlineButton text="Chat With Us" />
              </div>
            </div>

            {/* Lottie animation section */}
            <div
              className="hidden md:block pt-20 pl-5 w-[60%] object-contain"
              data-aos="fade-left"
            >
              {/* <HeroLottieAnimation /> */}
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724802024/pngwing.com-5-1-1024x607_iowc2o.png"
                alt="Hero-section-image1"
                width={1024} // Specify the image width
                height={807} // Specify the image height
              />

            </div>

            <Modal
              isOpen={isModalOpen}
              onClose={() => closeModal(setIsModalOpen)}
            />
          </div>
    </>
  )
}


