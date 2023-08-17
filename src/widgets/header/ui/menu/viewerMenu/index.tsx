import { FC } from "react";
import { routes, NavigationLink } from "shared";

const ViewerMenu: FC = () => {
  return (
    <nav className="menu__nav">
      <NavigationLink to={routes.login}>Войти</NavigationLink>
      <NavigationLink to={routes.signup}>Регистрация</NavigationLink>
      <NavigationLink to={routes.about}>О проекте</NavigationLink>
    </nav>
  );
};

export default ViewerMenu;
