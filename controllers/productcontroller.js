const Product = require("../models/productmodel");

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Add a product
exports.addProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const newProduct = new Product({ name, price, description, category });
  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
};
