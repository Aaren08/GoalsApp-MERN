import asyncHandler from "express-async-handler";
import model from "../model/goalModel.js";

// Get all goals
// @route GET /api/goals
// @access Private

// we added async to the function to handle asynchronous operations from the database or other services.

const getGoals = asyncHandler(async (req, res) => {
  const goals = await model.find({
    user: req.user.id,
  });

  res.status(200).json(goals);
});

// @ route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field for the goal");
  }

  const goal = await model.create({
    text: req.body.text,
  });

  res.status(201).json(goal);
});

// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await model.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await model.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal deletion failed: Goal not found");
  }

  const deletedGoal = await model.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedGoal);
});

export { getGoals, setGoal, updateGoal, deleteGoal };
