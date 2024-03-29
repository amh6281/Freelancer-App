import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// middleware
//cors 에러
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// json 형식 사용
app.use(express.json());
// cookie
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

// error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "잘못된 접근입니다.";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
