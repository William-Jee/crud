"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = (value: z.infer<typeof LoginSchema>) => {
  console.log(value);
  const valid = LoginSchema.safeParse(value);
};
