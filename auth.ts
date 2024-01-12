import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ token, session }) {
      console.log({ session, token });
      return session;
    },
    async jwt({ token }) {
      console.log(token);
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
