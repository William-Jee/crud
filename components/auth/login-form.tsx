"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "../ui/form";
import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper>
      <Form></Form>
    </CardWrapper>
  );
};

export default LoginForm;
