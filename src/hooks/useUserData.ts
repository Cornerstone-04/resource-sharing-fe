import { useUser } from "@/hooks/useUser";
import { fetchUserData } from "@/lib/fetchUserData";
import { useQuery } from "@tanstack/react-query";
import type { UserData } from "@/types";

export function useUserData() {
  const { user, loading: userLoading } = useUser();

  return useQuery<UserData>({
    queryKey: ["userData", user?.uid],
    queryFn: () => {
      if (!user) throw new Error("User not signed in");
      return fetchUserData(user); // pass the Firebase user object
    },
    enabled: !!user && !userLoading,
    staleTime: 5 * 60 * 1000,
  });
}
