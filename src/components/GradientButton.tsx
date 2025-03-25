import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  paddingY?: string;
}

const GradientButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="text-base font-semibold  border-2 border-radius-50% rounded-full  cursor-pointer py-3 w-full md:w-44 md:py-4 bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white  relative overflow-visible hover:bg-transparent hover:bg-none hover:text-black hover:border-2 hover:border-[#48128A] "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
