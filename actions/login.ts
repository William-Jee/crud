"use server";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { z } from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const valid = LoginSchema.safeParse(value);
  if (!valid.success) return { error: "no valid" };
  const { account, password } = valid.data;
  try {
    await signIn("credentials", {
      account,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    // return undefined;
  } catch (error) {
    // throw error;
    // if (isRedirectError(error)) {
    //   throw error;
    // }
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "登录信息错误" };

        default:
          return { error: "unknow err" };
      }
    }
    throw error;
  }
};

export const scoalLogin = (provider = "github") => {
  signIn(provider, { redirectTo: DEFAULT_LOGIN_REDIRECT });
};
