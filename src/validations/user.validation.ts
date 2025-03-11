import { z } from "zod";

export const CreateUser = z.object({
  name: z.string({ message: "Name is required" }),
  password: z
    .string({ message: "Password is required" })
    .min(3, { message: "Passwor must be at least 3 chars" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email must valid" }),
  phone: z.string({ message: "Phone is required" }),
  address: z.string({ message: "Address is requied" }).optional(),
});

export type CreateUsertype = z.infer<typeof CreateUser>;
