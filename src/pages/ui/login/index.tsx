import "./index.scss";
import { LoginForm } from "features/user/authentication/login";

export const LoginPage = () => {
  return (
    <main className="login">
      <div className="login__form-container">
        <LoginForm />
      </div>
    </main>
  );
};
