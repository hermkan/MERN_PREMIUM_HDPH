import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/data.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});
app.get('/api/products/', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const params = Number(req.params.id);
  const product = products.find((p) => p._id === params);
  res.json(product);
});
const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);