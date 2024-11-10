import CustomCarousel from "../CustomCarousel";
import CustomLeftArrow from "../CustomCarousel/Config/HeroSection/CustomLeftArrow";
import CustomRightArrow from "../CustomCarousel/Config/HeroSection/CustomRightArrow";
import { products } from "../GenericTypes/ProductCardTypes";
const ProductCard = ({ cardDetails }: { cardDetails: products[] }) => {
  const responsiveBreakPoints = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
  };

  const infinite = true;

  const CustomArrowStyles =
    "absolute top-5 transform -translate-y-1/2 z-50 border-0  min-w-[43px] min-h-[43px] opacity-100 cursor-pointer flex items-center justify-center transition-all duration-500 rounded-full p-2  ";

  const customLeftArrowStyles = " right-14";

  const customRightArrowStyles = "right-4 ";

  const customArrowIconStyles = {
    fontSize: "2rem",
  };

  const customLeftArrow: React.ReactElement = (
    <CustomLeftArrow
      customLeftArrowStyles={customLeftArrowStyles}
      customArrowStyles={CustomArrowStyles}
      customArrowIconStyles={customArrowIconStyles}
    />
  );
  const customRightArrow: React.ReactElement = (
    <CustomRightArrow
      customRightArrowStyles={customRightArrowStyles}
      customArrowStyles={CustomArrowStyles}
      customArrowIconStyles={customArrowIconStyles}
    />
  );
  const dotListClassName = "custom-dot-list-style";

  const Value = {
    cardDetails,
    responsiveBreakPoints,
    infinite,
    customLeftArrow,
    customRightArrow,
    dotListClassName,
  };

  return (
    <div>
      <CustomCarousel {...Value} />
    </div>
  );
};

export default ProductCard;
