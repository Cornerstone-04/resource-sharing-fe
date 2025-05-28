import { auth } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "sonner";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  async function loginUser(email: string, password: string) {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login successful!");
      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle specific Firebase errors
        if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  }
  return { loginUser, isLoading };
}
