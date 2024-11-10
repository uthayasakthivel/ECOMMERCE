// src/api/products/productService.js
import { fetchAllProducts } from "./productAPI";

export const getAllProducts = async () => {
  try {
    const products = await fetchAllProducts();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
