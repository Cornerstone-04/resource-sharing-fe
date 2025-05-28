const messages = [
  { id: 1, sender: "me", text: "Hey! Can we meet to exchange the textbook?", timestamp: "2:30 PM" },
  { id: 2, sender: "other", text: "Sure! How about 4 PM at the library?", timestamp: "2:31 PM" },
];

export default function MessageList() {
  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
              msg.sender === "me"
                ? "bg-kw-primary text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            <p>{msg.text}</p>
            <span className="block text-xs mt-1 text-black/50 text-right">{msg.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
