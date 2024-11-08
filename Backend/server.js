import express from "express";

// Express App
const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

// Listening Requests
app.listen(3000, () => {
  console.log("Backend Connected ✌️");
});
