import { FC } from "react";
import { Link } from "react-router-dom";
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

interface IFormState {
  email: string;
  password: string;
  confirmationPassword: string;
}

export const SignupForm: FC = () => {
  const { control, handleSubmit, formState } = useForm<SignupFormSchema>({
    defaultValues: {
      email: "",
      password: "",
      confirmationPassword: "",
    },
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data);
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
        {`Войти ${formState.isValid}`}
      </Button>
      <Link to={routes.login} className="login__link">
        Уже зарегистрированы? Войти
      </Link>
    </Form>
  );
};
