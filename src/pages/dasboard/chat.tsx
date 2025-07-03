import { MessageCircle, Clock, Bell, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const [pulse, setPulse] = useState(false);
  const [notifyMe, setNotifyMe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ maxHeight: "calc(100vh - 114px)" }}
      className="h-screen w-full"
    >
      <div className="w-full h-full mx-auto flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-kw-primary text-white p-4 text-lg font-semibold">
          Chat with John Doe
        </div>

        {/* Coming Soon Content */}
        <div className="flex-1 flex items-center justify-center bg-muted p-8">
          <div className="text-center max-w-md space-y-6">
            {/* Animated Icon */}
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div
                className={`absolute inset-0 bg-kw-primary/20 rounded-full ${
                  pulse ? "animate-ping" : ""
                }`}
              ></div>
              <div className="relative bg-kw-primary rounded-full w-24 h-24 flex items-center justify-center">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-kw-primary" />
                Coming Soon!
                <Sparkles className="w-6 h-6 text-kw-primary" />
              </h2>
              <p className="text-muted-foreground text-lg">
                We're putting the finishing touches on our chat feature
              </p>
            </div>

            {/* Feature Preview */}
            <div className="bg-background rounded-lg p-4 shadow-sm border border-border space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                What to expect:
              </div>
              <ul className="text-sm text-foreground space-y-1 text-left">
                <li>• Real-time messaging</li>
                <li>• Emoji reactions & stickers</li>
                <li>• Read receipts & typing indicators</li>
              </ul>
            </div>

            {/* Notify Button */}
            <div className="pt-4">
              <button
                onClick={() => setNotifyMe(!notifyMe)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto ${
                  notifyMe
                    ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800"
                    : "bg-kw-primary text-white hover:bg-kw-primary/90"
                }`}
              >
                <Bell
                  className={`w-4 h-4 ${notifyMe ? "animate-pulse" : ""}`}
                />
                {notifyMe ? "We’ll notify you!" : "Notify me when ready"}
              </button>

              {notifyMe && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-2 animate-fade-in">
                  ✓ You'll be the first to know when chat goes live!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Input Area - Disabled */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex items-center gap-2 opacity-50">
            <button className="p-2 rounded-md bg-muted cursor-not-allowed">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-md bg-muted cursor-not-allowed">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex-1 relative">
              <input
                className="w-full px-4 py-2 border border-border rounded-md bg-muted cursor-not-allowed text-muted-foreground placeholder:text-muted-foreground"
                placeholder="Chat feature coming soon..."
                disabled
              />
            </div>
            <button className="p-2 bg-muted rounded-md cursor-not-allowed">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
