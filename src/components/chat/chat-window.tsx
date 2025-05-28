import MessageInput from "./message-input";
import MessageList from "./message-list";


export default function ChatWindow() {
  return (
    <div  className="w-full h-full mx-auto flex flex-col overflow-hidden">
      <div className="bg-kw-primary text-white p-4 text-lg font-semibold">
        Chat with John Doe
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-muted">
        <MessageList/>
      </div>
      <div className="p-4 border-t bg-background">
        <MessageInput />
      </div>
    </div>
  );
}