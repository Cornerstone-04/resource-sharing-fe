import { uploadToCloudinary } from "@/lib/cloudinary";
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export async function uploadAvatar(file: File): Promise<string | null> {
  try {
    const user = auth.currentUser;
    if (!user || !user.email) throw new Error("Not authenticated");

    const uploadedUrl = await uploadToCloudinary(file);

    await updateDoc(doc(db, "users", user.email), {
      avatarUrl: uploadedUrl,
    });

    return uploadedUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}
