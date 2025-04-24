const mongoose = require('mongoose');

// Define a product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },  // Link to image or filename
  category: { type: String },
  inventory: { type: Number, default: 0 }
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;