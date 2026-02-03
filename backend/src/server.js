import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/db.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from  'cookie-parser';
import { protectedRoute } from "./middlewares/authMiddleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// routes
app.use("/api/auth", authRouter);
app.use(protectedRoute);
app.use("/api/users", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server bắt đầu trên cổng ${PORT}`);
  });
});
