import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  carouselContentType,
  dotListClassName,
  infiniteType,
  showDots,
} from "./types/HeroSection/HeroSectionCarouselType";
import { responsiveBreakPointsType } from "./types/HeroSection/HeroSectionCarouselType";
import { ReactElement } from "react";

type carouselAllTypes = {
  carouselContent: carouselContentType[];
  responsiveBreakPoints: responsiveBreakPointsType;
  infinite: infiniteType;
  customLeftArrow: ReactElement;
  customRightArrow: ReactElement;
  customDots: ReactElement;
  showDots: showDots;
  dotListClassName: dotListClassName;
};

export default function CustomCarousel({
  carouselContent,
  responsiveBreakPoints,
  infinite,
  customLeftArrow,
  customRightArrow,
  customDots,
  showDots,
  dotListClassName,
}: carouselAllTypes) {
  return (
    <div className="">
      <Carousel
        infinite={infinite}
        responsive={responsiveBreakPoints}
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        showDots={showDots}
        dotListClass={dotListClassName}
        customDot={customDots}
      >
        {carouselContent.map((eachBannerDetails) => {
          return (
            <>
              <div className="flex gap-9 justify-around items-center bg-Text2 text-Text">
                <div className="flex flex-col gap-5 pt-14 pl-[64px] pb-[47px]">
                  {/* Logo and Caption Section */}
                  <div className="flex gap-6 items-center">
                    <img src={eachBannerDetails.logo} alt="" />
                    <p>{eachBannerDetails.caption}</p>
                  </div>

                  {/* Main Content Section */}
                  <h2 className="font-inter text-48">
                    {eachBannerDetails.content}
                  </h2>

                  {/* Call to Action Section */}
                  <div className="flex flex-col gap-5 relative w-fit">
                    <Link to="/shop_now" className="after:content-['_↗'] ">
                      Shop Now
                    </Link>
                    <span className="absolute left-0 bottom-[-4px] h-[1px] w-full text-Text bg-Secondary"></span>
                  </div>
                </div>

                {/* Banner Image Section */}
                <div>
                  <img src={eachBannerDetails.image} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}
