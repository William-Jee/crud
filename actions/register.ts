"use server";

import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof LoginSchema>) => {
  const validFields = LoginSchema.safeParse(values);
  if (!validFields.success) return { error: "注册信息错误" };
  const { account, password } = validFields.data;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const existUser = await db.user.findUnique({
    where: {
      email: account,
    },
  });
  if (existUser)
    return {
      error: "账号已存在",
    };
  await db.user.create({
    data: {
      email: account,
      password: hashedPassword,
    },
  });
  return { success: "创建成功" };
};
