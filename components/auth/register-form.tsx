"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { CardWrapper } from "./card-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { register } from "@/actions/register";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [mes, setMes] = useState<any>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      account: "",
      password: "",
    },
  });
  const submit = async (data: z.infer<typeof LoginSchema>) => {
    const res = await register(data);
    setMes(res);
  };
  const { handleSubmit, control } = form;
  return (
    <>
      <CardWrapper title="注册">
        <Form {...form}>
          <form onSubmit={handleSubmit(submit)}>
            <div className=" space-y-6">
              <FormField
                control={control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>用户名</FormLabel>
                    <FormControl>
                      <Input placeholder="用户名" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input placeholder="密码" {...field} type="password" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                注册
              </Button>
              {mes.success || mes.error || ""}
            </div>
          </form>
        </Form>
        <div className="w-full block">
          {" "}
          <Link href={"/login"}>已有账号，去登录</Link>
        </div>
      </CardWrapper>
    </>
  );
};

export default LoginForm;
