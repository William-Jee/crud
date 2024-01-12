"use client";

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { AlignCenter, Github, Twitch } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

interface ICardWrapper {
  children: React.ReactNode;
  title?: string;
  backUrl?: string;
}
export const CardWrapper = ({ children, title = "Sign In" }: ICardWrapper) => {
  return (
    <div>
      <Card className="w-[400px] ">
        <CardHeader className="w-full">
          <div className=" flex w-full items-center justify-center gap-x-4">
            {" "}
            🔐 {title}
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <div className="w-full flex justify-center items-center gap-x-4">
            <Button size={"lg"} variant={"secondary"}>
              <Github
                className="w-4 h-4"
                onClick={() => {
                  signIn("github", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
                }}
              />
            </Button>
            <Button size={"lg"} variant={"secondary"}>
              <Twitch className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
