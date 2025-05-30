import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuthStatus() {
  const [user, setUser] = useState<User | null>(() => auth.currentUser);
  const [loading, setLoading] = useState<boolean>(!auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      },
      (error) => {
        console.error("Auth error:", error);
        setUser(null);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
