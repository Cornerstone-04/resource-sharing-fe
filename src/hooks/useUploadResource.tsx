import { auth, db } from "@/lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "sonner";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { useState } from "react";

type ResourceFormData = {
  title: string;
  courseCode: string;
  author?: string;
  department: string;
  level: string;
  format: string;
  description?: string;
  type: "Softcopy" | "Hardcover";
  location?: string; // Only for Hardcover
  meetup?: string; // Only for Hardcover
};

export function useUploadResource() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadResource(formData: ResourceFormData, file: File) {
    try {
      setIsLoading(true);
      const user = auth.currentUser;
      if (!user || !user.email) throw new Error("User not authenticated");

      // Upload to Cloudinary instead of Firebase
      const fileUrl = await uploadToCloudinary(file);

      // Save metadata in Firestore
      await addDoc(collection(db, "resources"), {
        ...formData,
        fileUrl,
        owner: user.email,
        borrowers: [],
        available: true,
        createdAt: Timestamp.now(),
      });

      toast.success("Resource uploaded successfully!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }
  return { uploadResource, isLoading };
}
