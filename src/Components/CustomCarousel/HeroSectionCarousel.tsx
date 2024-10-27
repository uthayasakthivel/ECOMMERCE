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

  const customLeftArrow: React.ReactElement = <CustomLeftArrow />;
  const customRightArrow: React.ReactElement = <CustomRightArrow />;
  const customDots: React.ReactElement = <CustomDots />;
  const showDots = true;
  const dotListClassName = "custom-dot-list-style";

  const Value = {
    carouselContent,
    responsiveBreakPoints,
    infinite,
    customLeftArrow,
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
