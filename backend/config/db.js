import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionToMongoDB = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${connectionToMongoDB.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};
