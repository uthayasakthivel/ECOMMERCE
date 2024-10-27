// Custom left arrow component
import { IoIosArrowRoundBack } from "react-icons/io";
import { CustomArrowProps } from "../../types/HeroSection/HeroSectionCarouselType";

const CustomLeftArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 border-0 bg-black bg-opacity-50 min-w-[43px] min-h-[43px] opacity-100 cursor-pointer flex items-center justify-center transition-all duration-500 rounded-full p-2"
    >
      <IoIosArrowRoundBack color="white" fontSize="2rem" />
    </button>
  );
};

export default CustomLeftArrow;