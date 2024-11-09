import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./src/routes/productRoutes.js"; // Your product routes
import path from "path";
import url from "url";

// Express App
const app = express();

// Dotenv Config (ensure you have a .env file with your MongoDB URI)
dotenv.config();

// For Accepting JSON structured data
app.use(express.json());

// MiddleWare (for logging requests, if needed)
app.use((req, res, next) => {
  console.log("Middleware check: Request received");
  next();
});

// Routes
app.use("/backend/api/products", productRoutes); // Product routes

// Serve static files (uploads folder should be publicly accessible)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB Database
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("DB Connected Successfully");

    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Backend connected at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });
