import dotend from "dotenv";
import connectDB from "./db/index.js";

dotend.config({
  path: "./.env",
});

connectDB();
