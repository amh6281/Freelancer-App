import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, paymentIntent } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, paymentIntent);

export default router;
