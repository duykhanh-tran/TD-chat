import express from "express";
import {
  createConversation,
  deleteConversation,
  getConversations,
  getMessages,
  markAsSeen,
} from "../controller/conversationController.js";
import { checkFriendship } from "../middlewares/friendMiddleware.js";

const router = express.Router();

router.post("/", checkFriendship, createConversation);
router.get("/", getConversations);
router.get("/:conversationId/messages", getMessages);
router.patch("/:conversationId/seen", markAsSeen);
router.delete("/:conversationId", deleteConversation);

export default router;
