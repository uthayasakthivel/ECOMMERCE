import Product from "../models/productModel.js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { calculateFileHash } from "../utils/fileUtils.js";

// Middleware to check if the file content already exists (by hashing)
export const checkDuplicateImage = (req, res, next) => {
  if (!req.file) return next(); // Proceed if no file is uploaded yet

  const filePath = req.file.path; // The temporary file uploaded by Multer
  const uploadDir = path.join(__dirname, "..", "uploads");

  // Create a hash of the file content
  const hash = crypto.createHash("sha256"); // Using SHA-256 to hash the file
  const fileStream = fs.createReadStream(filePath);

  // Compute hash and check if the file already exists
  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", async () => {
    const fileHash = hash.digest("hex");

    // Check if the hash of this file already exists in the uploads folder
    const files = fs.readdirSync(uploadDir); // Get all files in the uploads folder
    for (const file of files) {
      const filePath = path.join(uploadDir, file);
      const existingFileHash = await calculateFileHash(filePath);

      if (existingFileHash === fileHash) {
        // File already exists, delete the uploaded file and send error
        fs.unlinkSync(filePath); // Remove the temp file
        return res.status(400).json({
          error: `Image with the same content already exists. Duplicate upload prevented.`,
        });
      }
    }
    next(); // Proceed to the next middleware if no duplicate file content found
  });
};

// Create product with file upload
export const createProduct = async (req, res) => {
  const { productName, productPrice, productOfferPrice } = req.body;

  // Ensure the image was uploaded
  let productImage = null;
  if (req.file) {
    // Get the file path
    productImage = `/uploads/${req.file.filename}`;
  }

  try {
    // If no productName is provided, return an error
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

    // Create a new product with the uploaded image path
    const newProduct = await Product.create({
      productName,
      productPrice,
      productOfferPrice,
      productImage, // Store the image path in the database
    });

    // Respond with the newly created product
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Route to update a product with new image
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, productOfferPrice } = req.body;

  let productImage = null;

  if (req.file) {
    productImage = `/uploads/${req.file.filename}`; // Get new image path if uploaded
  }

  try {
    const updateData = {
      productName,
      productPrice,
      productOfferPrice,
      productImage,
    };

    // Perform the async update
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Route to get all products
export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({ allProducts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Route to get a single product by ID
export const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const fetchedProduct = await Product.findById(productId);
    res.status(200).json({ fetchedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Route to delete a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ deletedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to delete all products
export const deleteAllProducts = async (req, res) => {
  try {
    // Delete all products from the database
    const result = await Product.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete" });
    }

    // Respond with the count of deleted products
    res
      .status(200)
      .json({
        message: `${result.deletedCount} products deleted successfully`,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting products" });
  }
};
