import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  price: {
    type: Number,
    require: true,
  },

  description: {
    type: String,
    require:true
  },
});

export default mongoose.model("Product", ProductSchema);
