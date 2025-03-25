/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Meteors } from "./ui/meteors";
import { motion } from "framer-motion";

export function OurServiceCard({
  title,
  para,
  id,
}: {
  title: string;
  para: string;
  id: number;
}) {
  return (
    <motion.div 
      className="cursor-pointer relative md:mt-10 !text-black flex justify-center"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="w-full relative !w-[360px] h-[300px]">
        {/* Main content container with improved styling */}
        <div className="absolute inset-0 bg-white px-6 py-8 overflow-hidden rounded-[20px] flex flex-col justify-start items-start z-10 border border-purple-100 shadow-lg">
          {/* Card number indicator */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#48128A] to-[#8B3791] flex items-center justify-center text-white font-bold z-30">
            {id}
          </div>
          
          {/* Title with stronger styling and higher z-index */}
          <h1 className="font-bold text-xl bg-gradient-to-r from-[#48128A] to-[#8B3791] bg-clip-text text-transparent mb-4 mt-4 relative z-30">
            {title}
          </h1>

          {/* Paragraph with improved readability and higher z-index */}
          <p className="font-normal text-[0.92rem] text-gray-800 font-semibold mb-4 relative z-30">
            {para}
          </p>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#48128A] to-[#8B3791] opacity-70 z-20"></div>

          {/* Meteor effect with lower z-index */}
          <div className="z-10 opacity-50 absolute inset-0">
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
