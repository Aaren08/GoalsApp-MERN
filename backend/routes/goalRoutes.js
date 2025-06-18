// This file defines the routes for managing goals in the application.

import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";

const router = express.Router();

// Define the routes for goal management

router.route("/").get(getGoals).post(setGoal);

// router.get("/", getGoals);
// router.post("/", setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

export { router };
