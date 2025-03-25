import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import PricingModal from "./Modal/PricingModal";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import Link from "next/link";
const PricingCard = ({
  title,
  price,
  items,
  all,
  key,
}: {
  title: string;
  price: string;
  items: string[];
  all?: boolean;
  key: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-[350px]  bg-gradient-to-t from-white via-white to-[#BCBEC0]/70 hover:bg-gradient-to-b from-[#BCBEC0]/70 via-white to-white rounded-lg py-6 px-3 mt-4 relative"
      data-aos={`${key % 2 === 0 ? "flip-right" : "flip-left"}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      style={{ transition: 'all 0.3s ease-in-out' }}
    >
      {/* Heading */}
      <h2 className="font-bold text-2xl mb-6">{title}</h2>

      {/* Original Price */}
      <h2 className="text-slate-800 font-semibold">Original Price</h2>

      {/* Pricing Scroll */}
      <div className="w-full overflow-y-scroll max-h-44 my-5">
        <ul>
          {items.map((item, i) => (
            <li
              className="flex items-center gap-2 py-1 border-b border-gray-200"
              key={i}
            >
              <FaRegCheckCircle size={15} color="#802FCE" />
              <span className="text-sm text-slate-500 font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ribbon Tag */}
      <div className="absolute top-24 right-0 bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white py-1 px-4 transform -translate-y-1/2">
        <span className="text-xs font-semibold">{price}</span>
      </div>

      {/* More Feature */}
      {!all && (
        <div className="mb-4">
          <h5 className="text-[#5114AE] font-semibold text-lg ">
            More Features
          </h5>
          <span className="text-slate-600 text-xs">
            <b className="text-[#333]">$25</b> for{" "}
            <b className="text-[#333]">24</b> hours Rush Delivery
          </span>
        </div>
      )}

      {/* Contact Links */}
      <div className="flex items-center justify-between mt-2">
        <Link href="tel:+18583650790" className="text-sm bg-gradient-to-b from-[#48128A] to-[#8B3791]   text-transparent bg-clip-text font-bold">
          (667) 423-5532
        </Link>
        <div
          className="pr-10"
          onClick={() => {
            if (window.Tawk_API) {
              window.Tawk_API.maximize();
            }
          }}
        >
          <span className="text-sm font-semibold text-slate-700">
            Click Here to
          </span>
          <br />
          <span className="text-sm bg-gradient-to-b from-[#48128A] to-[#8B3791] text-transparent bg-clip-text font-bold">Live Chat</span>
        </div>
      </div>

      {/* Order Button */}
      <div className="flex justify-center">
        <button
          className="text-sm font-medium uppercase cursor-pointer py-3 px-8 mt-10 hover:bg-gradient-to-b hover:from-[#48128A] hover:to-[#8B3791] bg-none text-black hover:text-white border-2 border-black hover:border-none rounded-full relative overflow-visible"
          onClick={() => openModal(setIsModalOpen)}
        >
          Order Now
        </button>
      </div>

      <PricingModal
        isOpen={isModalOpen}
        onClose={() => closeModal(setIsModalOpen)}
        cardTitle={`${title} - ${price}`}
      />
    </div>
  );
};

export default PricingCard;
