import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import type { ResourceType } from "@/types";

export function useAllResources() {
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(collection(db, "resources"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedResources: ResourceType[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            author: data.author || "",
            courseCode: data.courseCode,
            department: data.department,
            level: data.level,
            format: data.format || "PDF",
            type: data.type,
            fileUrl: data.fileUrl || "",
            image: data.image || "",
            owner: data.owner || "Unknown",
            ownerPhone: data.ownerPhone || "",
            location: data.location || "",
            meetup: data.meetup || "",
            description: data.description || "",
            available: data.available ?? true,
            borrowers: data.borrowers || [],
            createdAt: data.createdAt,
          };
        });
        setResources(fetchedResources);
        setIsLoading(false);
      },
      (err) => {
        console.error("Error fetching resources:", err);
        setError(err);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { resources, isLoading, error };
}
