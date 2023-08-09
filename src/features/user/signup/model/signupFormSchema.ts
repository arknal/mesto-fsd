import { z } from "zod";

export const signupFormSchema = z
  .object({
    email: z.string().min(1, { message: "Обязательное поле" }).email({
      message: "Невалидный адрес электронной почты",
    }),
    password: z
      .string()
      .min(5, { message: "Минимальная длина пароля 5 символов" }),
    confirmationPassword: z
      .string()
      .min(5, { message: "Минимальная длина пароля 5 символов" }),
  })
  .refine((data) => data.password === data.confirmationPassword, {
    message: "Пароли не совпадают",
    path: ["confirmationPassword"],
  });

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
