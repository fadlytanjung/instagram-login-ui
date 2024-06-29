"use client";

import { Controller, useForm } from "react-hook-form";
import Button from "../Button";
import ForgotPassword from "../ForgotPassword";
import LoginWithFacebook from "../LoginWithFacebook";
import TextInput from "../TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string()
    .nonempty("Required")
    .min(5, "Minimum 5 Characters"),
  password: z.string()
    .nonempty("Required"),
});

export default function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: { username: string; password: string }) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[268px] mt-[24px] flex flex-col mb-[10px]"
    >
      <Controller
        name="username"
        control={control}
        render={({
          field: { ref: _, ...fields },
          fieldState: { error },
        })=>(
          <TextInput
            placeholder="Phone number, username, or email"
            className="mb-[10px]"
            type="text"
            {...fields}
            {...error && {
              error: error.message,
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          field: { ref: _, ...fields },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="password"
            className="mb-[10px]"
            type="password"
            {...fields}
            {...error && {
              error: error.message,
            }}
          />
        )}
      />
      <Button className="my-[10px]" type="submit">Log in</Button>
      <LoginWithFacebook />
      <ForgotPassword />
    </form>
  )
}