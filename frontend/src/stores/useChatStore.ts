import { chatService } from "@/services/chatService";
import type { ChatState } from "@/types/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./useAuthStore";
import { useSocketStore } from "./useSocketStore";

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      conversations: [],
      messages: {},
      activeConversationId: null,
      convoLoading: false,
      messageLoading: false,
      loading: false,

      setActiveConversation: (id) => set({ activeConversationId: id }),
      reset: () => {
        set({
          conversations: [],
          messages: {},
          activeConversationId: null,
          convoLoading: false,
          messageLoading: false,
          loading: false,
        });
      },
      fetchConversations: async () => {
        try {
          set({ convoLoading: true });
          const { conversations } = await chatService.fetchConversations();

          set((state) => ({
            conversations,
            convoLoading: false,
            activeConversationId: conversations.some(
              (conversation) => conversation._id === state.activeConversationId,
            )
              ? state.activeConversationId
              : null,
          }));
        } catch (error) {
          console.error("Loi xay ra khi fetchConversations:", error);
          set({ convoLoading: false });
        }
      },
      fetchMessages: async (conversationId) => {
        const { activeConversationId, messages } = get();
        const { user } = useAuthStore.getState();

        const convoId = conversationId ?? activeConversationId;

        if (!convoId) return;

        const current = messages?.[convoId];
        const nextCursor =
          current?.nextCursor === undefined ? "" : current?.nextCursor;

        if (nextCursor === null) return;

        set({ messageLoading: true });

        try {
          const { messages: fetched, cursor } = await chatService.fetchMessages(
            convoId,
            nextCursor,
          );

          const processed = fetched.map((message) => ({
            ...message,
            isOwn: message.senderId === user?._id,
          }));

          set((state) => {
            const prev = state.messages[convoId]?.items ?? [];
            const merged = prev.length > 0 ? [...processed, ...prev] : processed;

            return {
              messages: {
                ...state.messages,
                [convoId]: {
                  items: merged,
                  hasMore: !!cursor,
                  nextCursor: cursor ?? null,
                },
              },
            };
          });
        } catch (error) {
          console.error("Loi xay ra khi fetchMessages:", error);
        } finally {
          set({ messageLoading: false });
        }
      },
      sendDirectMessage: async (recipientId, content, imgUrl) => {
        try {
          const { activeConversationId } = get();
          await chatService.sendDirectMessage(
            recipientId,
            content,
            imgUrl,
            activeConversationId || undefined,
          );

          set((state) => ({
            conversations: state.conversations.map((conversation) =>
              conversation._id === activeConversationId
                ? { ...conversation, seenBy: [] }
                : conversation,
            ),
          }));
        } catch (error) {
          console.error("Loi xay ra khi gui direct message", error);
        }
      },
      sendGroupMessage: async (conversationId, content, imgUrl) => {
        try {
          await chatService.sendGroupMessage(conversationId, content, imgUrl);
          set((state) => ({
            conversations: state.conversations.map((conversation) =>
              conversation._id === get().activeConversationId
                ? { ...conversation, seenBy: [] }
                : conversation,
            ),
          }));
        } catch (error) {
          console.error("Loi xay ra khi gui group message", error);
        }
      },
      addMessage: async (message) => {
        try {
          const { user } = useAuthStore.getState();
          const { fetchMessages } = get();

          message.isOwn = message.senderId === user?._id;

          const convoId = message.conversationId;
          let prevItems = get().messages[convoId]?.items ?? [];

          if (prevItems.length === 0) {
            await fetchMessages(message.conversationId);
            prevItems = get().messages[convoId]?.items ?? [];
          }

          set((state) => {
            if (prevItems.some((item) => item._id === message._id)) {
              return state;
            }

            const currentMessageState = state.messages[convoId];

            return {
              messages: {
                ...state.messages,
                [convoId]: {
                  items: [...prevItems, message],
                  hasMore: currentMessageState?.hasMore ?? true,
                  nextCursor: currentMessageState?.nextCursor ?? undefined,
                },
              },
            };
          });
        } catch (error) {
          console.error("Loi xay ra khi add message:", error);
        }
      },
      updateConversation: (conversation) => {
        set((state) => {
          const exists = state.conversations.some((c) => c._id === conversation._id);
          if (!exists) {
            return state;
          }
          const updatedConversations = state.conversations.map((current) =>
            current._id === conversation._id ? { ...current, ...conversation } : current,
          );

          updatedConversations.sort((a, b) => {
            const aTime = new Date(a.lastMessageAt ?? a.updatedAt).getTime();
            const bTime = new Date(b.lastMessageAt ?? b.updatedAt).getTime();
            return bTime - aTime;
          });

          return { conversations: updatedConversations };
        });
      },
      removeConversation: (conversationId) => {
        set((state) => {
          const nextMessages = { ...state.messages };
          delete nextMessages[conversationId];

          return {
            conversations: state.conversations.filter(
              (conversation) => conversation._id !== conversationId,
            ),
            messages: nextMessages,
            activeConversationId:
              state.activeConversationId === conversationId
                ? null
                : state.activeConversationId,
          };
        });
      },
      deleteConversation: async (conversationId) => {
        try {
          await chatService.deleteConversation(conversationId);
          get().removeConversation(conversationId);
        } catch (error) {
          console.error("Loi xay ra khi xoa conversation", error);
          throw error;
        }
      },
      markAsSeen: async () => {
        try {
          const { user } = useAuthStore.getState();
          const { activeConversationId, conversations } = get();

          if (!activeConversationId || !user) {
            return;
          }

          const convo = conversations.find(
            (conversation) => conversation._id === activeConversationId,
          );

          if (!convo) {
            return;
          }

          if ((convo.unreadCounts?.[user._id] ?? 0) === 0) {
            return;
          }

          await chatService.markAsSeen(activeConversationId);

          set((state) => ({
            conversations: state.conversations.map((conversation) =>
              conversation._id === activeConversationId && conversation.lastMessage
                ? {
                    ...conversation,
                    unreadCounts: {
                      ...conversation.unreadCounts,
                      [user._id]: 0,
                    },
                  }
                : conversation,
            ),
          }));
        } catch (error) {
          console.error("Loi xay ra khi goi markAsSeen trong store", error);
        }
      },
      addConvo: (convo) => {
        set((state) => {
          const exists = state.conversations.some(
            (conversation) => conversation._id.toString() === convo._id.toString(),
          );

          return {
            conversations: exists
              ? state.conversations
              : [convo, ...state.conversations],
            activeConversationId: convo._id,
          };
        });
      },
      createConversation: async (type, name, memberIds) => {
        try {
          set({ loading: true });
          const conversation = await chatService.createConversation(
            type,
            name,
            memberIds,
          );

          get().addConvo(conversation);

          useSocketStore
            .getState()
            .socket?.emit("join-conversation", conversation._id);
        } catch (error) {
          console.error("Loi xay ra khi goi createConversation trong store", error);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "chat-storage",
      partialize: (state) => ({ conversations: state.conversations }),
    },
  ),
);
