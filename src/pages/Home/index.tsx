import HeroSectionCarousel from "../../Components/CustomCarousel/HeroSectionCarousel";
import FlashSales from "../../Sections/HomePage/FlashSales";
import HomeMenu from "../../Sections/HomePage/Menu/HomeMenu";

const HomePage = () => {
  return (
    <div>
      <div className="p-pageSide grid grid-cols-12">
        <HomeMenu />
        <div className="col-span-1"></div>
        <HeroSectionCarousel />
      </div>
      <FlashSales />
    </div>
  );
};

export default HomePage;
