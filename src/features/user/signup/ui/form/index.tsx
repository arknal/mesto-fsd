import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormField,
  FormError,
  FormTitle,
  Input,
  Button,
  routes,
} from "shared";

import {
  signupFormSchema,
  type SignupFormSchema,
} from "../../model/signupFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { config } from "shared/lib/config";
import { signupErrorHandler } from "features/user/signup/lib/errorHandler";

interface IFormState {
  email: string;
  password: string;
  confirmationPassword: string;
}

export const SignupForm: FC = () => {
  const { control, handleSubmit, formState, setError } =
    useForm<SignupFormSchema>({
      defaultValues: {
        email: "",
        password: "",
        confirmationPassword: "",
      },
      resolver: zodResolver(signupFormSchema),
    });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    fetch(`${config.API_ENDPOINT}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(signupErrorHandler(res.status));
        }
        return res.json();
      })
      .then(() => {
        alert("Вы успешно зарегистрировались!");
        navigate(routes.login);
      })
      .catch((error) => {
        setError("email", {
          type: "server",
          message: error.message,
        });
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle theme="light" center>
        Регистрация
      </FormTitle>
      <FormField>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
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
      <FormField>
        <Controller
          name="confirmationPassword"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Input
                theme="light"
                type="password"
                placeholder="Подтвердите пароль"
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
        Зарегистрироваться
      </Button>
      <Link to={routes.login} className="login__link">
        Уже зарегистрированы? Войти
      </Link>
    </Form>
  );
};
