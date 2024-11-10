// src/api/products/productAPI.js
import axios from "axios";

const API_URL = "http://localhost:3000/backend/api/products";

export const fetchAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.allProducts;
};
