import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[a-zA-Z]/, "At least one letter (A-Z or a-z)")
    .regex(/[^a-zA-Z0-9]/, "At least one special character"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
