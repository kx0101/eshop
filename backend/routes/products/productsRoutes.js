import express from "express";
import {
  getAllProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../../controllers/products/productsController.js";
import { protect, admin } from "../../middleware/authMiddleware.js";

export const router = express.Router();

router.route("/").get(getAllProducts).post(protect, admin, createProduct);

router.route("/top").get(getTopProducts);

router
  .route("/:id")
  .get(getProduct)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

router.route("/:id/reviews").post(protect, createProductReview);
