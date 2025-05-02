import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/DB';
import productRoutes from './routes/productRoutes'; // your routes

dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
