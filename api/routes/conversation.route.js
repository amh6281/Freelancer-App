import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
