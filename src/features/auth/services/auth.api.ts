import type { SignInFormData } from "@/features/auth/schemas/sign-in.schema";
import type { SignUpFormData } from "@/features/auth/schemas/sign-up.schema";
import type { User } from "@/features/auth/types/auth.types";
import { api } from "@/lib/axios";

export const signUp = async (data: SignUpFormData) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

export const signIn = async (data: SignInFormData) => {
  const response = await api.post("/auth/login", data);

  return response.data.data;
};

export const signOut = async () => {
  await api.post("/auth/logout");
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get("/users/me");

  return response.data.data;
};
