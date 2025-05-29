import { useState } from "react";
import { SmileIcon, Paperclip, Send } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const addEmoji = (emoji: { native: string }) => {
    setMessage((prev) => prev + emoji.native);
  };

  return (
    <div className="relative">
      {showEmoji && (
        <div className="absolute bottom-14 left-0 z-10">
          <Picker data={data} onEmojiSelect={addEmoji} />
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowEmoji((prev) => !prev)}
        >
          <SmileIcon className="w-5 h-5" />
        </Button>

        <Button variant="ghost" size="icon">
          <Paperclip className="w-5 h-5" />
        </Button>

        <Input
          className="flex-1"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          size="icon"
          className="bg-kw-primary text-white flex justify-center items-center size-10"
        >
          <Send className="size-5" />
        </Button>
      </div>
    </div>
  );
}
