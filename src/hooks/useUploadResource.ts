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
  meetup?: string;   // Only for Hardcover
};

export function useUploadResource() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadResource(formData: ResourceFormData, file: File) {
    try {
      setIsLoading(true);
      const user = auth.currentUser;
      if (!user || !user.email) throw new Error("User not authenticated");

      // Upload to Cloudinary
      const uploadedUrl = await uploadToCloudinary(file);

      // Determine correct field (fileUrl for softcopy, image for hardcover)
      const resourceData = {
        ...formData,
        fileUrl: formData.type === "Softcopy" ? uploadedUrl : "",
        image: formData.type === "Hardcover" ? uploadedUrl : "",
        owner: user.displayName || user.email || "Unknown",
        ownerPhone: user.phoneNumber || "Not Provided",
        borrowers: [],
        available: true,
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "resources"), resourceData);

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