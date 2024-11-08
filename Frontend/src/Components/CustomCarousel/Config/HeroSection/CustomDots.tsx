import React from "react";
import { CustomDotProps } from "../../types/HeroSection/HeroSectionCarouselType";
import { FaCircle } from "react-icons/fa";
const CustomDots: React.FC<CustomDotProps> = ({ onClick, ...rest }) => {
  const { active } = rest;

  return (
    <button
      className={`relative flex items-center justify-center 
        rounded-full text-Secondary-2 ${
          active ? "border-[2px] border-BG" : "border-Text2"
        }`}
      onClick={onClick}
    >
      <FaCircle className="" />
    </button>
  );
};

export default CustomDots;
