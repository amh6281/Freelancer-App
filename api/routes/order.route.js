import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  getOrders,
  paymentIntent,
  confirm,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, paymentIntent);
router.put("/", verifyToken, confirm);

export default router;
