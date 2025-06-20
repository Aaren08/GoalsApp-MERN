import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { goalRouter } from "./routes/goalRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);
app.use(errorHandler); // Custom error handling middleware

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
