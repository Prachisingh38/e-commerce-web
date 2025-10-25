const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Sample products
const products = [
  { _id: "1", name: "Smartphone XYZ", price: 150000, description: "6.5 inch display, 128GB storage", image: "/images/smartphone.png" },
  { _id: "2", name: "Laptop ABC", price: 45000, description: "Intel i5, 8GB RAM, 512GB SSD", image: "/images/laptop.jpg" },
  { _id: "3", name: "Wireless Headphones", price: 3500, description: "Bluetooth 5.0, Noise Cancelling", image: "/images/wirelessheadphone.jpg" },
  { _id: "4", name: "Smart Watch", price: 10000, description: "Heart rate monitor, 7 days battery", image: "/images/smartwatch.jpg" },
  { _id: "5", name: "Digital Camera", price: 30000, description: "24MP, 4K video recording", image: "/images/digitalcamera.jpg" },
  { _id: "6", name: "Bluetooth Speaker", price: 2500, description: "Portable, 10 hours playtime", image: "/images/bluetoothspeaker.jpg" },
];

// API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Serve React frontend
app.use(express.static(path.join(__dirname, "client/build")));
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
