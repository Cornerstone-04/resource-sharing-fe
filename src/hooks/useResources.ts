import { useQuery } from "@tanstack/react-query";
import { db } from "@/lib/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";

export type Resource = {
  id: string;
  title: string;
  courseCode: string;
  format?: string;
  type: "Softcopy" | "Hardcover";
  department: string;
  level: string;
  description?: string;
  fileUrl?: string;
  imageUrl?: string;
  location?: string;
  meetup?: string;
  owner: string;
  createdAt: Timestamp;
};

async function fetchResources(): Promise<Resource[]> {
  const snapshot = await getDocs(collection(db, "resources"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Resource[];
}

export function useResources() {
  return useQuery<Resource[]>({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });
}
