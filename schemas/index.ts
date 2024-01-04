import z from "zod";

export const LoginSchema = z.object({
  account: z.string().min(1, { message: "请输入用户名" }),
  password: z.string().min(6),
});
