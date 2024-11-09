import mongoose, { mongo } from "mongoose";
// const Schema = mongoose.Schema
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    require: true,
    unique: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productOfferPrice: {
    type: Number,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
export default Product;
