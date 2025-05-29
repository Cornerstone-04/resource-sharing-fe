import ChatWindow from "@/components/chat/chat-window";

export default function ChatPage() {
  return (
    <div
      style={{ maxHeight: "calc(100vh - 114px)" }}
      className="h-screen w-full"
    >
      <ChatWindow />
    </div>
  );
}
