import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export const db = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("✅ Mongodb connected successfully")
    } catch (err) {
        console.error("❌ Connection failed:", err.message);
        process.exit(1);
    }

}