import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../../controllers/orders/ordersController.js";
import { protect } from "../../middleware/authMiddleware.js";

export const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
