import z from "zod";

export const LoginSchema = z.object({
  account: z.string(),
  password: z.string().min(6),
});
