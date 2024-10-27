import { ArrowProps, DotProps } from "react-multi-carousel";

export type carouselContentType = {
  logo: string;
  logoAltText: string;
  caption: string;
  image: string;
  imageAltText: string;
  shopNowLink: string;
  content: string;
};

export type responsiveBreakPointsType = {
  superLargeDesktop: {
    breakpoint: { max: number; min: number };
    items: number;
  };
  desktop: { breakpoint: { max: number; min: number }; items: number };
};

export type infiniteType = boolean;

export interface CustomArrowProps extends ArrowProps {
  //   myOwnStuff: string;
}

export interface CustomDotProps extends DotProps {
  //   onMove: any;
}

export type showDots = boolean;

export type dotListClassName = string;
