import express from "express";
import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../../controllers/users/userController.js";
import { protect } from "../../middleware/authMiddleware.js";

export const router = express.Router();

router.route("/login").post(loginUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/").post(registerUser);
