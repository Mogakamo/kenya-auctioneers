import { object, z } from "zod";

export const createUserSchema = object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  img: z.string({ required_error: "Photo is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: z.string({ required_error: "Please confirm your password" }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export const loginUserSchema = object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email or password"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Invalid email or password"),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
export type LoginUserInput = z.TypeOf<typeof loginUserSchema>;
