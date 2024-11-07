import CustomCarousel from ".";
import BannerImage1 from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import AppleLogo from "../../assets/1200px-Apple_gray_logo 1.png";
import CustomLeftArrow from "./Config/HeroSection/CustomLeftArrow";
import CustomRightArrow from "./Config/HeroSection/CustomRightArrow";
import CustomDots from "./Config/HeroSection/CustomDots";
const HeroSectionCarousel = () => {
  const carouselContent = [
    {
      logo: AppleLogo,
      logoAltText: "AppleLogo",
      caption: "iPhone 10 Series",
      image: BannerImage1,
      imageAltText: "iPhone 10 Series",
      content: "Up to 10% off Voucher",
      shopNowLink: "https://google.com",
    },
    {
      logo: AppleLogo,
      logoAltText: "AppleLogo",
      caption: "iPhone 11 Series",
      image: BannerImage1,
      imageAltText: "iPhone 10 Series",
      content: "Up to 20% off Voucher",
      shopNowLink: "https://google.com",
    },
    {
      logo: AppleLogo,
      logoAltText: "AppleLogo",
      caption: "iPhone 12 Series",
      image: BannerImage1,
      imageAltText: "iPhone 10 Series",
      content: "Up to 30% off Voucher",
      shopNowLink: "https://google.com",
    },
    {
      logo: AppleLogo,
      logoAltText: "AppleLogo",
      caption: "iPhone 13 Series",
      image: BannerImage1,
      imageAltText: "iPhone 10 Series",
      content: "Up to 40% off Voucher",
      shopNowLink: "https://google.com",
    },
  ];

  const responsiveBreakPoints = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  const infinite = true;

  const CustomArrowStyles =
    "absolute top-1/2 transform -translate-y-1/2 z-50 border-0 bg-black bg-opacity-50 min-w-[43px] min-h-[43px] opacity-100 cursor-pointer flex items-center justify-center transition-all duration-500 rounded-full p-2";

  const customLeftArrowStyles = " left-4 ";

  const customRightArrowStyles = "right-4 ";

  const customArrowIconStyles = {
    color: "#fff",
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
  const customDots: React.ReactElement = <CustomDots />;
  const showDots = true;
  const dotListClassName = "custom-dot-list-style";

  const Value = {
    carouselContent,
    responsiveBreakPoints,
    infinite,
    customLeftArrow,
    customLeftArrowStyles,
    customRightArrow,
    showDots,
    dotListClassName,
    customDots,
  };

  return (
    <div className="col-span-9">
      <CustomCarousel {...Value} />{" "}
    </div>
  );
};

export default HeroSectionCarousel;
