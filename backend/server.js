import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/goalRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use("/api/goals", router);
app.use(errorHandler); // Custom error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
