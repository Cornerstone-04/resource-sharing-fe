import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { type ResourceType } from "@/types";

interface Props {
  resource: ResourceType;
}

export default function RequestToBorrowButton({ resource }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [requested, setRequested] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);

    try {
      // Simulate a request submission
      await new Promise((res) => setTimeout(res, 1000));

      setRequested(true);
      toast.success(`Request sent to borrow "${resource.title}"`);
    } catch (error) {
      toast.error("Failed to send request.");
      console.error("Request error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleRequest}
      disabled={isLoading || requested || resource.type !== "Hardcover"}
      className="bg-kw-primary text-white hover:bg-kw-primary/90 w-full"
    >
      {requested ? "Request Sent" : "Request to Borrow"}
    </Button>
  );
}
