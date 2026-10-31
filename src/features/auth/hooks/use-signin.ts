import { toast } from "@/components/ui/toast";
import { signIn } from "@/features/auth/services/auth.api";
import { authStorage } from "@/features/auth/utils/auth-storage";
import { getApiError } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useSignIn() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signIn,

    onSuccess: (data) => {
      authStorage.setUser(data);

      navigate("/");
    },

    onError: (error) => {
      toast.add({
        title: getApiError(error),
        type: "error",
        priority: "high",
      });
    },
  });
}
