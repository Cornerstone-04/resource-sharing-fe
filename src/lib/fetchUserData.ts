import { db } from "@/lib/firebase";
import type { User } from "firebase/auth"; // Firebase's built-in User type
import { doc, getDoc } from "firebase/firestore";
import type { UserData } from "@/types";

export async function fetchUserData(user: User): Promise<UserData> {
  if (!user.email) throw new Error("User is missing email");

  const docRef = doc(db, "users", user.email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) throw new Error("User data not found.");

  return docSnap.data() as UserData;
}
