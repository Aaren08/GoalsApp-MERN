// This file defines the routes for managing goals in the application.

import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";

const goalRouter = express.Router();

// Define the routes for goal management

goalRouter.route("/").get(getGoals).post(setGoal);

// router.get("/", getGoals);
// router.post("/", setGoal);

goalRouter.route("/:id").put(updateGoal).delete(deleteGoal);

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

export { goalRouter };
