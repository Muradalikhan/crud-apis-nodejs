const mongoose = require("mongoose");

// mongoose.model().find()

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
