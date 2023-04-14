import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createConversation } from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", verifyToken, createConversation);

export default router;
