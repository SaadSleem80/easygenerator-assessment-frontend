import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { signOut } from "../services/auth.api";
import { authStorage } from "../utils/auth-storage";
import { USER_QUERY_KEY } from "./use-current-user";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signOut,

    onSettled: () => {
      authStorage.clear();

      queryClient.setQueryData(USER_QUERY_KEY, null);

      navigate("/sign-in", { replace: true });
    },
  });
}
