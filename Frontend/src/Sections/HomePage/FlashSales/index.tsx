import GlobalBtn from "../../../Components/Utils/GlobalBtn";
import SectionHeader from "../../../Components/Utils/SectionHeader";
import ProductCard from "../../../Components/Utils/ProductCard";
import useProducts from "../../../hooks";

const FlashSales = () => {
  const { products } = useProducts();
  console.log(products, "products");

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
      <ProductCard cardDetails={products} />
      <div className="mt-14 text-center">
        <GlobalBtn {...btnContent} />
      </div>
    </div>
  );
};

export default FlashSales;
