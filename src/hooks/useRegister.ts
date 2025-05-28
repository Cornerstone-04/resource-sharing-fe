import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";
import { useState } from "react";

const user = auth.currentUser;

type UserData = {
  firstName: string;
  lastName: string;
  phone: string;
  studentEmail: string;
};
export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  async function registerUser(email: string, password: string, data: UserData) {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);

      await setDoc(doc(db, "users", email), { email, password, ...data });

      toast.success("Registration successful!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle specific Firebase errors
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email is already in use. Please try another one.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "Password is too weak. Please choose a stronger password."
          );
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return { registerUser, isLoading };
}
