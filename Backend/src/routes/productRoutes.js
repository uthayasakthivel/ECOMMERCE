import { Router } from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  checkDuplicateImage,
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  deleteAllProducts,
} from "../controllers/productController.js";

// Initialize Router
const router = Router();

// Route to create a product with image upload
router.post(
  "/",
  upload.single("productImage"),
  checkDuplicateImage,
  createProduct
);

// Route to update a product with new image
router.patch(
  "/:id",
  upload.single("productImage"),
  checkDuplicateImage,
  updateProduct
);

// Route to get all products
router.get("/", getAllProducts);

// Route to get a single product by ID
router.get("/:id", getProductById);

// Route to delete all products
router.delete("/all", deleteAllProducts); // Use the controller here

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
