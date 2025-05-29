// components/dashboard/SaveButton.tsx
import { useState } from "react";
import { toast } from "sonner";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { db } from "@/lib/firebase";
import type { ResourceType } from "@/types";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

export default function SaveButton({ resource }: { resource: ResourceType }) {
  const { user } = useUser();
  const [isSaving, setIsSaving] = useState(false);

  const alreadySaved = resource?.savers?.includes(user?.uid || "");

  async function handleSave() {
    if (!user?.uid) {
      toast.error("You must be logged in to save resources.");
      return;
    }

    try {
      setIsSaving(true);
      await updateDoc(doc(db, "resources", resource.id), {
        savers: arrayUnion(user.uid),
      });
      toast.success("Resource saved!");
    } catch (error) {
      toast.error("Failed to save resource.");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Button
      variant={alreadySaved ? "outline" : "secondary"}
      onClick={handleSave}
      disabled={isSaving || alreadySaved}
      className="w-full"
    >
      {alreadySaved ? (
        <>
          <BookmarkCheck className="w-4 h-4 mr-2" />
          Saved
        </>
      ) : (
        <>
          <Bookmark className="w-4 h-4 mr-2" />
          Save to Library
        </>
      )}
    </Button>
  );
}
