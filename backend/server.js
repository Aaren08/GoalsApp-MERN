import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { goalRouter } from "./routes/goalRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    ); // Set the path to your index.html file
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to production");
  });
}

app.use(errorHandler); // Custom error handling middleware

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
