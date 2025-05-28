import { fetchUserData } from "@/lib/fetchUserData";
import type { UserData } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useUserData() {
  return useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: fetchUserData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
