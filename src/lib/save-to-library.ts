import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";

export async function saveResourceToLibrary(resourceId: string, currentUserId: string) {
  try {
    await updateDoc(doc(db, "resources", resourceId), {
      savers: arrayUnion(currentUserId),
    });
  } catch (error) {
    console.error("Error saving resource:", error);
  }
}