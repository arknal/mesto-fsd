import { useState, ChangeEvent, FormEvent, FC } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormField,
  FormError,
  FormTitle,
  Input,
  Button,
} from "shared/ui";
import routes from "shared/lib/routes";

interface IFormState {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, email: e.target.value });
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, password: e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle theme="light" center>
        Вход
      </FormTitle>
      <FormField>
        <Input
          required
          value={formState.email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          theme="light"
          placeholder="Электронная почта"
        />
        <FormError>Error</FormError>
      </FormField>
      <FormField>
        <Input
          required
          theme="light"
          value={formState.password}
          onChange={handlePasswordChange}
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <FormError></FormError>
      </FormField>

      <Button type="submit" theme="light" className="login__btn">
        Войти
      </Button>
      <Link to={routes.register} className="login__link">
        Нет аккаунта? Зарегистрироваться
      </Link>
    </Form>
  );
};
