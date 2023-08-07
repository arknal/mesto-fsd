import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Обязательное поле" }).email({
    message: "Невалидный адрес электронной почты",
  }),
  password: z
    .string()
    .min(6, { message: "Минимальная длина пароля 6 символов" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
