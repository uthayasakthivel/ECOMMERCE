import HeroSectionCarousel from "../../Components/CustomCarousel/HeroSectionCarousel";
import HomeMenu from "../../Sections/HomePage/Menu/HomeMenu";

const HomePage = () => {
  return (
    <div className="p-pageSide grid grid-cols-12 ">
      <HomeMenu />
      <div className="col-span-1"></div>
      <HeroSectionCarousel />
    </div>
  );
};

export default HomePage;
