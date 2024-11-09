import multer from "multer";
import path from "path";
import fs from "fs";

// Set up multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "..", "uploads");

    if (!fs.existsSync(uploadDir)) {
      console.log("Uploads directory does not exist, creating...");
      fs.mkdirSync(uploadDir, { recursive: true }); // Create directory if not exists
    }

    cb(null, uploadDir); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    // Get the file extension (e.g., .jpg, .png)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Unique suffix

    // Generate the final filename
    const fileName = file.fieldname + "-" + uniqueSuffix + ext;
    cb(null, fileName); // Set the filename
  },
});

// Initialize multer with storage options
const upload = multer({ storage: storage });

export default upload;
