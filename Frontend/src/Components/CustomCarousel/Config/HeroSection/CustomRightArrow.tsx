import { IoIosArrowRoundForward } from "react-icons/io";
import { CustomArrowProps } from "../../types/HeroSection/HeroSectionCarouselType";

// Custom right arrow component
const CustomRightArrow = ({
  onClick,
  customRightArrowStyles,
  customArrowStyles,
  customArrowIconStyles,
}: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`${customArrowStyles} ${customRightArrowStyles}`}
    >
      <IoIosArrowRoundForward
        color={customArrowIconStyles?.color}
        fontSize={customArrowIconStyles?.fontSize}
      />
    </button>
  );
};

export default CustomRightArrow;
