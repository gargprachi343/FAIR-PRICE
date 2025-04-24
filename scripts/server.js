const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware to enable CORS and handle JSON requests
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/grameen-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB!");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Import and use product routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});