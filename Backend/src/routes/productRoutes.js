import { Router } from "express";
import Product from "../models/productModel.js"; // Your product model
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import crypto from "crypto"; // For hashing the file

// Initialize Router
const router = Router();

// Get the __dirname equivalent for ES modules
const url = import.meta.url;
const __filename = fileURLToPath(url); // Convert filepath to URL
const __dirname = path.dirname(__filename); // Get the folder name

// Set up multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "..", "uploads"); // Ensure correct path to the uploads folder
    console.log("Uploads directory:", uploadDir); // Log to check the folder path

    if (!fs.existsSync(uploadDir)) {
      console.log("Uploads directory does not exist, creating...");
      fs.mkdirSync(uploadDir, { recursive: true }); // Create directory if not exists
    }

    cb(null, uploadDir); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Unique suffix

    // Generate the final filename
    const fileName = file.fieldname + "-" + uniqueSuffix + ext;
    cb(null, fileName); // Set the filename
  },
});

// Initialize multer with storage options
const upload = multer({ storage: storage });

// Get the base URL (useful for deploying to different environments)
const baseUrl = process.env.BASE_URL || "http://localhost:3000"; // Default to localhost if no BASE_URL is provided

// Route to create a product with image upload
router.post("/", upload.single("productImage"), async (req, res) => {
  const { productName, productPrice, productOfferPrice } = req.body;

  try {
    // If no productName is provided, skip product creation
    if (!productName) {
      return res.status(400).json({ error: "Product name is required" });
    }

    // Check if the product already exists in the database based on product name
    const existingProduct = await Product.findOne({ productName });
    if (existingProduct) {
      return res.status(400).json({
        error: `Product with the name "${productName}" already exists.`,
      });
    }

    // Construct the relative path to the image (served by Express)
    const productImage = `/uploads/${req.file.filename}`;

    // Create a new product with the uploaded image path
    const newProduct = await Product.create({
      productName,
      productPrice,
      productOfferPrice,
      productImage, // Store the image path in the database
    });

    // Include full URL of the image in the response
    newProduct.productImage = baseUrl + productImage;

    // Respond with the newly created product
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Route to get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();

    // Map over the products and prepend the full image URL
    const productsWithFullImageUrl = allProducts.map((product) => {
      product.productImage = baseUrl + product.productImage;
      return product;
    });

    res.status(200).json({ allProducts: productsWithFullImageUrl });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a single product by ID
router.get("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const fetchedProduct = await Product.findById(productId);
    if (!fetchedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    fetchedProduct.productImage = baseUrl + fetchedProduct.productImage;
    res.status(200).json({ fetchedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete all products
router.delete("/deleteAll", async (req, res) => {
  try {
    // Delete all products from the database
    const result = await Product.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete" });
    }

    // Respond with the count of deleted products
    res.status(200).json({
      message: `${result.deletedCount} products deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting products" });
  }
});

// Route to delete a product by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ deletedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update a single product by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, productOfferPrice, productImage } =
    req.body;

  console.log({ productName, productPrice, productOfferPrice, productImage });

  // Create an update object with the fields to be updated
  const updateData = {};

  if (productName) updateData.productName = productName;
  if (productPrice) updateData.productPrice = productPrice;
  if (productOfferPrice) updateData.productOfferPrice = productOfferPrice;
  if (productImage) updateData.productImage = productImage; // Only update productImage if provided

  console.log(updateData, "updatedData");

  try {
    // Perform the update using findOneAndUpdate
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true } // Return the updated document
    );

    // If product not found, return 404
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Ensure productImage is always a full URL
    if (updatedProduct.productImage) {
      updatedProduct.productImage = baseUrl + updatedProduct.productImage;
    }

    // Return the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
