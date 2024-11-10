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
import { products } from "../GenericTypes/ProductCardTypes";
import { BsCurrencyDollar } from "react-icons/bs";
import GloableChip from "../Utils/GloableChip";

type carouselAllTypes = {
  carouselContent?: carouselContentType[];
  cardDetails?: products[];
  responsiveBreakPoints: responsiveBreakPointsType;
  infinite: infiniteType;
  customLeftArrow: ReactElement;
  customRightArrow: ReactElement;
  customDots?: ReactElement;
  showDots?: showDots;
  dotListClassName?: dotListClassName;
};

export default function CustomCarousel({
  carouselContent,
  cardDetails,
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
        {carouselContent && carouselContent.length > 0
          ? carouselContent.map((eachBannerDetails) => {
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
            })
          : cardDetails?.map((eachCardDetails) => {
              return (
                <>
                  <div className="flex mt-10 justify-around items-center group/add-to-cart">
                    <div className="w-full relative">
                      <div className="w-[270px] h-[250px] bg-[#eaeaea] relative">
                        <img
                          src={eachCardDetails.productImage}
                          alt=""
                          className="px-9 py-10 h-full w-full object-contain"
                        />
                        <GloableChip />
                        <a
                          href="#"
                          className="group-hover/add-to-cart:visible invisible w-full bg-Button py-2 text-Primary text-center absolute bottom-0 transition-all duration-300 ease-in-out opacity-0 group-hover/add-to-cart:opacity-100 group-hover/add-to-cart:h-10 h-0 "
                        >
                          Add To Cart
                        </a>
                      </div>
                      <div className="mt-4 font-semibold">
                        <p>{eachCardDetails.productName}</p>
                        <div className="flex gap-3">
                          <p className="text-Secondary-2 flex items-center">
                            <BsCurrencyDollar fontSize={15} />
                            {eachCardDetails.productPrice}
                          </p>
                          <p className="text-Primary1 flex items-center line-through opacity-50">
                            <BsCurrencyDollar fontSize={15} />
                            {eachCardDetails.productOfferPrice + 50}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
      </Carousel>
    </div>
  );
}
