// Custom left arrow component
import { IoIosArrowRoundBack } from "react-icons/io";
import { CustomArrowProps } from "../../types/HeroSection/HeroSectionCarouselType";

const CustomLeftArrow = ({
  onClick,
  customLeftArrowStyles,
  customArrowStyles,
  customArrowIconStyles,
}: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`${customArrowStyles} ${customLeftArrowStyles}`}
    >
      <IoIosArrowRoundBack
        color={customArrowIconStyles?.color}
        fontSize={customArrowIconStyles?.fontSize}
      />
    </button>
  );
};

export default CustomLeftArrow;
