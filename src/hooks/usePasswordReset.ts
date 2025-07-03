import { auth } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "sonner";
import { useState } from "react";

export function usePasswordReset() {
  const [isResetting, setIsResetting] = useState(false);

  async function sendResetEmail(email: string) {
    if (!email.trim()) {
      toast.warning("Please enter your email first.");
      return;
    }

    try {
      setIsResetting(true);
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent. Check your email.");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else {
          toast.error("Failed to send reset email. Please try again.");
        }
      }
    } finally {
      setIsResetting(false);
    }
  }

  return { sendResetEmail, isResetting };
}
