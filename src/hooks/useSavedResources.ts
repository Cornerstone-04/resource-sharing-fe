import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useUser } from "./useUser";
import type { ResourceType } from "@/types";

export function useSavedResources() {
  const { user } = useUser();

  return useQuery<ResourceType[]>({
    queryKey: ["savedResources", user?.uid],
    enabled: !!user?.uid,
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, "resources"));
      const results: ResourceType[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as ResourceType;
        if (data.savers?.includes(user!.uid)) {
          results.push({ ...data, id: doc.id });
        }
      });
      return results;
    },
  });
}
