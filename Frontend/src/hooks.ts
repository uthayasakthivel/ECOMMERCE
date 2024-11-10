// src/hooks/useProducts.ts
import { useState, useEffect } from "react";
import { getAllProducts } from "./api/products/productService";
import { products } from "./Components/GenericTypes/ProductCardTypes";

const useProducts = () => {
  const [products, setProducts] = useState<products[] | []>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null); // Explicitly typed as Error or null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err); // Now it is safe to set the error
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { products, loading, error };
};

export default useProducts;
