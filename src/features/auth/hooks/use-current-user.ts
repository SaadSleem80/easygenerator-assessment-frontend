import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/auth.api";
import { authStorage } from "../utils/auth-storage";

export const USER_QUERY_KEY = ["auth", "user"];

export function useCurrentUser() {
  return useQuery({
    queryKey: USER_QUERY_KEY,

    queryFn: async () => {
      try {
        const user = await getCurrentUser();

        authStorage.setUser(user);

        return user;
      } catch (error: any) {
        if (error.response?.status === 401) {
          authStorage.clear();
          return null;
        }

        throw error;
      }
    },

    retry: false,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
  });
}
