import asyncHandler from "express-async-handler";

// Get all goals
// @route GET /api/goals
// @access Private

// we added async to the function to handle asynchronous operations from the database or other services.

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    goals: [
      { id: 1, text: "Learn JavaScript" },
      { id: 2, text: "Build a web application" },
      { id: 3, text: "Master Node.js" },
    ],
  });
});

// @ route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field for the goal");
  }

  const newGoal = req.body;
  // Here you would typically save the new goal to a database
  res.status(201).json({
    message: "Goal created successfully",
    goal: newGoal,
  });
});

// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goalId = req.params.id;
  const updatedGoal = req.body;
  // Here you would typically update the goal in a database
  res.status(200).json({
    message: `Goal with ID ${goalId} updated successfully`,
    goal: updatedGoal,
  });
});

// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goalId = req.params.id;
  // Here you would typically delete the goal from a database
  res.status(200).json({
    message: `Goal with ID ${goalId} deleted successfully`,
  });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
