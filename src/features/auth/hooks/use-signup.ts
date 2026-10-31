import { toast } from "@/components/ui/toast";
import { signUp } from "@/features/auth/services/auth.api";
import { getApiError } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signUp,

    onSuccess: () => {
      navigate("/sign-in");
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
