import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormField,
  FormError,
  FormTitle,
  Input,
  Button,
} from "shared/ui";
import { routes } from "shared";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "features/user/authentication/login/model/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormState {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { control, handleSubmit, formState } = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle theme="light" center>
        Вход
      </FormTitle>
      <FormField>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState, formState }) => (
            <>
              <Input
                theme="light"
                placeholder={"Электронная почта"}
                name={field.name}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={fieldState.invalid ? "input_invalid" : ""}
              />
              <FormError>{fieldState.error?.message}</FormError>
            </>
          )}
        />
      </FormField>
      <FormField>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Input
                theme="light"
                type="password"
                placeholder="Пароль"
                name={field.name}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={fieldState.invalid ? "input_invalid" : ""}
              />
              <FormError>{fieldState.error?.message}</FormError>
            </>
          )}
        />
      </FormField>

      <Button
        type="submit"
        theme="light"
        className="login__btn"
        disabled={!formState.isValid && formState.isSubmitted}
      >
        Войти
      </Button>
      <Link to={routes.signup} className="login__link">
        Нет аккаунта? Зарегистрироваться
      </Link>
    </Form>
  );
};
