// This file defines the routes for managing goals in the application.

import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";
import { protect } from "../middleware/authMiddleware.js";

const goalRouter = express.Router();

// Define the routes for goal management

goalRouter.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get("/", getGoals);
// router.post("/", setGoal);

goalRouter.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

export { goalRouter };
