import { z } from "zod";

export const LoginUser = z.object({
  password: z
    .string({ message: "Password is required" })
    .min(3, { message: "Passwor must be at least 3 chars" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email must valid" }),
});

export type LoginUsertype = z.infer<typeof LoginUser>;
