import { useQuery } from "@tanstack/react-query";
import { db } from "@/lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import type { ResourceType } from "@/types";

export const useFilteredResources = () => {
  return useQuery<ResourceType[]>({
    queryKey: ["resources"],
    queryFn: async () => {
      const q = query(collection(db, "resources"));
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(),
        } as ResourceType;
      });
    },
  });
};
