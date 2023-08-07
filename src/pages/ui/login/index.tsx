import "./index.scss";
import { LoginForm } from "features/user/authentication/login";

const LoginPage = () => {
  return (
    <main className="login">
      <div className="login__form-container">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
