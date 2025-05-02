import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// @route   GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/products
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const newProduct = new Product({ name, description, price, imageUrl });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
