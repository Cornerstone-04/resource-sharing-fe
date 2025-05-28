import { auth, db } from "@/lib/firebase";
import type { UserData } from "@/types";
import { doc, getDoc } from "firebase/firestore";



export async function fetchUserData(): Promise<UserData> {
  const currentUser = auth.currentUser;
  if (!currentUser || !currentUser.email) {
    throw new Error("No user is currently signed in.");
  }

  const docRef = doc(db, "users", currentUser.email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("User data not found.");
  }

  return docSnap.data() as UserData;
}
