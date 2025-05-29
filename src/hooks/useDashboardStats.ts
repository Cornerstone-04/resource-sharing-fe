import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import type { BorrowerType } from "@/types";

export function useDashboardStats() {
  const [uploaded, setUploaded] = useState(0);
  const [borrowed, setBorrowed] = useState(0);
  const [saved, setSaved] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const user = auth.currentUser;
        if (!user || !user.email) return;

        const resourcesRef = collection(db, "resources");

        // Fetch uploaded by current user
        const uploadedQuery = query(
          resourcesRef,
          where("owner", "==", user.email)
        );
        const uploadedSnapshot = await getDocs(uploadedQuery);
        setUploaded(uploadedSnapshot.size);

        // Borrowed = resources where current user is in the borrowers array
        const borrowedQuery = query(resourcesRef, where("borrowers", "!=", []));
        const borrowedSnapshot = await getDocs(borrowedQuery);
        const borrowedCount = borrowedSnapshot.docs.filter((doc) => {
          const borrowers = doc.data().borrowers || [];
          return borrowers.some((b: BorrowerType) => b.email === user.email);
        }).length;
        setBorrowed(borrowedCount);

        // Saved = if you're using a users collection to track saved resources
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const savedList = userDoc.exists()
          ? userDoc.data().savedResources || []
          : [];
        setSaved(savedList.length);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { uploaded, borrowed, saved, loading, error };
}
