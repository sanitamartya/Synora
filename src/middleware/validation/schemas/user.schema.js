import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(3, "Name must contain at least 3 characters")
      .max(100, "Name cannot exceed 100 characters"),

    email: z.string().trim().email("Invalid email address"),
  }),
});
