import { useEffect, useState } from "react";
import GlobalBtn from "../../../Components/Utils/GlobalBtn";
import SectionHeader from "../../../Components/Utils/SectionHeader";
import axios from "axios";
import ProductCard from "../../../Components/Utils/ProductCard";
import { filterByCategoryType } from "../../../Components/GenericTypes/ProductCardTypes";
import JoyStickImage from "../../../assets/joystick.png";

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState<
    filterByCategoryType[]
  >([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const flashSaleProducts = await axios.get<filterByCategoryType[]>(
        "https://api.escuelajs.co/api/v1/products/?categoryId=1"
      );
      const updatedProducts = flashSaleProducts.data.map((product) => ({
        ...product,
        image: JoyStickImage,
      }));

      setFlashSaleProducts(updatedProducts);
    };
    fetchAllProducts();
  }, []);

  const content = {
    heading: "Today’s",
    subHeading: "Flash Sales",
  };

  const btnContent = {
    btnText: "View All Products",
    btnLink: "#",
  };

  return (
    <div className="p-pageSide mt-36">
      <SectionHeader {...content} />
      <ProductCard cardDetails={flashSaleProducts} />
      <div className="mt-14 text-center">
        <GlobalBtn {...btnContent} />
      </div>
    </div>
  );
};

export default FlashSales;
