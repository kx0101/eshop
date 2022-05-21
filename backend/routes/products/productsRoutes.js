import express from 'express';
import { getAllProducts, getProduct } from '../../controllers/products/productsController.js';

export const router = express.Router();

router.route('/').get(getAllProducts);

router.route('/:id').get(getProduct);