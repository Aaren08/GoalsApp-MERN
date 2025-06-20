import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", getMe);

export { userRouter };
