import React, { useEffect } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  paddingY?: string;
}

const OutlineButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  width = "w-44",
  paddingY = "py-4",
}) => {
  const handleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } 
  };

  return (
    <button
      className={` text-black text-base border-radius-50%  font-semibold  border-2 border-radius-50% rounded-full cursor-pointer py-3 w-full md:w-44 md:py-4 border-2 border-[#48128A] hover:border-none bg-transparent hover:bg-gradient-to-b from-[#48128A] to-[#8B3791]  hover:text-white transition-colors duration-300 `}
      onClick={handleChat}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
