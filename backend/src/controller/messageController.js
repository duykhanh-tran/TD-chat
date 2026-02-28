import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import {
  emitNewMessage,
  updateConversationAfterCreateMessage,
} from "../utils/messageHelper.js";
import { io } from "../socket/index.js";

const isConversationParticipant = (conversation, userId) =>
  conversation?.participants?.some(
    (participant) => participant.userId.toString() === userId.toString(),
  );

export const sendDirectMessage = async (req, res) => {
  try {
    const { recipientId, content, conversationId } = req.body;
    const senderId = req.user._id;

    if (!recipientId) {
      return res.status(400).json({ message: "Thieu recipientId" });
    }

    if (!content) {
      return res.status(400).json({ message: "Thieu noi dung" });
    }

    let conversation = null;

    if (conversationId) {
      conversation = await Conversation.findById(conversationId);

      if (!conversation || !isConversationParticipant(conversation, senderId)) {
        return res.status(404).json({ message: "Conversation khong ton tai" });
      }

      const hasRecipient = isConversationParticipant(conversation, recipientId);
      if (conversation.type !== "direct" || !hasRecipient) {
        return res.status(400).json({ message: "Conversation direct khong hop le" });
      }
    }

    if (!conversation) {
      conversation = await Conversation.findOne({
        type: "direct",
        participants: { $size: 2 },
        "participants.userId": { $all: [senderId, recipientId] },
      });
    }

    if (!conversation) {
      conversation = await Conversation.create({
        type: "direct",
        participants: [
          { userId: senderId, joinedAt: new Date() },
          { userId: recipientId, joinedAt: new Date() },
        ],
        lastMessageAt: new Date(),
        unreadCounts: new Map(),
      });
    }

    const message = await Message.create({
      conversationId: conversation._id,
      senderId,
      content,
    });

    updateConversationAfterCreateMessage(conversation, message, senderId);

    await conversation.save();

    emitNewMessage(io, conversation, message);

    return res.status(201).json({ message });
  } catch (error) {
    console.error("Loi xay ra khi gui tin nhan truc tiep", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};

export const sendGroupMessage = async (req, res) => {
  try {
    const { conversationId, content } = req.body;
    const senderId = req.user._id;
    const conversation = req.conversation;

    if (!content) {
      return res.status(400).json({ message: "Thieu noi dung" });
    }

    const message = await Message.create({
      conversationId,
      senderId,
      content,
    });

    updateConversationAfterCreateMessage(conversation, message, senderId);

    await conversation.save();
    emitNewMessage(io, conversation, message);

    return res.status(201).json({ message });
  } catch (error) {
    console.error("Loi xay ra khi gui tin nhan nhom", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};
