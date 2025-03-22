import mongoose from "mongoose";

export default defineEventHandler(async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
});