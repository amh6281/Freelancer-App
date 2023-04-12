import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);

export default router;
