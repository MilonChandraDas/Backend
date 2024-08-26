import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// DB connection
const connectDB = async () => {
  try {
    const conntionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`MOngoDB connection successfully ${process.env.PORT} `);
  } catch (error) {
    console.log(`MongoDB connection failed ${error}`);
    process.exit(1);
  }
};

export default connectDB;
