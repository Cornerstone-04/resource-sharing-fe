import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { type ResourceType } from "@/types";
import { useUser } from "@/hooks/useUser";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Props {
  resource: ResourceType;
}

export default function RequestToBorrowButton({ resource }: Props) {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [requested, setRequested] = useState(
    resource.borrowers?.some((b) => b.id === user?.uid) || false
  );

  const handleRequest = async () => {
    if (!user) {
      toast.error("Please log in to request this material.");
      return;
    }

    setIsLoading(true);

    try {
      const borrowerData = {
        id: user.uid,
        name: user.displayName || user.email || "Anonymous",
        avatar: user.photoURL || "",
      };

      await updateDoc(doc(db, "resources", resource.id), {
        borrowers: arrayUnion(borrowerData),
      });

      setRequested(true);
      toast.success(
        `Request sent to borrow "${resource.title}! We're still finalizing the borrowing feature, and it will be available very soon."`
      );
    } catch (error) {
      console.error("Failed to request borrow:", error);
      toast.error("Failed to send borrow request.");
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
