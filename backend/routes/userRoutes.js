import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);

export { userRouter };
