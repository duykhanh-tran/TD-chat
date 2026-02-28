import { useState } from "react";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useChatStore } from "@/stores/useChatStore";
import type { Conversation } from "@/types/chat";
import { SidebarTrigger } from "../ui/sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { Separator } from "../ui/separator";
import UserAvatar from "./UserAvatar";
import StatusBadge from "./StatusBadge";
import GroupChatAvatar from "./GroupChatAvatar";
import { useSocketStore } from "@/stores/useSocketStore";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ChatWindowHeader = ({ chat }: { chat?: Conversation }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { conversations, activeConversationId, deleteConversation } = useChatStore();
  const { user } = useAuthStore();
  const { onlineUsers } = useSocketStore();

  const selectedChat =
    chat ?? conversations.find((conversation) => conversation._id === activeConversationId);

  if (!selectedChat) {
    return (
      <header className="md:hidden sticky top-0 z-10 flex items-center gap-2 px-4 py-2 w-full">
        <SidebarTrigger className="-ml-1 text-foreground" />
      </header>
    );
  }

  let otherUser = null;

  if (selectedChat.type === "direct") {
    const otherUsers = selectedChat.participants.filter((p) => p._id !== user?._id);
    otherUser = otherUsers.length > 0 ? otherUsers[0] : null;

    if (!user || !otherUser) return null;
  }

  const handleDeleteConversation = async () => {
    if (!selectedChat || isDeleting) {
      return;
    }

    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa cuộc trò chuyện này không?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setIsDeleting(true);
      await deleteConversation(selectedChat._id);
      toast.success("Đã xóa cuộc trò chuyện");
    } catch (error) {
      console.error("Lỗi khi xóa cuộc trò chuyện:", error);
      toast.error("Xóa cuộc trò chuyện thất bại. Vui lòng thử lại.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <header className="sticky top-0 z-10 px-4 py-2 flex items-center bg-background">
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger className="-ml-1 text-foreground" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        <div className="p-2 w-full flex items-center gap-3">
          <div className="relative">
            {selectedChat.type === "direct" ? (
              <>
                <UserAvatar
                  type="sidebar"
                  name={otherUser?.displayName || "Moji"}
                  avatarUrl={otherUser?.avatarUrl || undefined}
                />
                <StatusBadge
                  status={
                    onlineUsers.includes(otherUser?._id ?? "") ? "online" : "offline"
                  }
                />
              </>
            ) : (
              <GroupChatAvatar
                participants={selectedChat.participants}
                type="sidebar"
              />
            )}
          </div>

          <h2 className="font-semibold text-foreground">
            {selectedChat.type === "direct"
              ? otherUser?.displayName
              : selectedChat.group?.name}
          </h2>

          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={isDeleting}
                >
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={(event) => {
                    event.preventDefault();
                    void handleDeleteConversation();
                  }}
                >
                  <Trash2 className="size-4" />
                  Xoa cuoc tro chuyen
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatWindowHeader;
