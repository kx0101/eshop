import express from 'express';
import { addOrderItems } from '../../controllers/orders/ordersController.js';
import { protect } from '../../middleware/authMiddleware';

export const router = express.Router();

router.route('/').post(protect, addOrderItems);