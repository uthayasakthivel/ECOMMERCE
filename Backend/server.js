import express from "express";
import dotenv from "dotenv";

// Express App
const app = express();

// Dotenv Config
dotenv.config();

// MiddleWare
app.use((req, res, next) => {
  console.log("check dummy middleware");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

// PORT Number
const port = process.env.PORT;

// Listening Requests
app.listen(port || 3000, () => {
  console.log(`Backend Connected ✌️ at port ${port}`);
});
