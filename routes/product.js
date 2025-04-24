const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add a new product
router.post('/', async (req, res) => {
  const { name, price, description, image, category, inventory } = req.body;

  const newProduct = new Product({
    name,
    price,
    description,
    image,
    category,
    inventory
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;