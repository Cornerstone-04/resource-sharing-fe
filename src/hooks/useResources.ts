import { useQuery } from "@tanstack/react-query";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import type { ResourceType } from "@/types";

async function fetchResources(): Promise<ResourceType[]> {
  const snapshot = await getDocs(collection(db, "resources"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ResourceType[];
}

export function useResources() {
  return useQuery<ResourceType[]>({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });
}
