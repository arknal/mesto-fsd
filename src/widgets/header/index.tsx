import "./index.scss";

import { Menu } from "./ui/";

export const Header = () => {
  return (
    <header className="header">
      <img src="./header__logo.svg" alt="Логотип" className="header__logo" />
      <Menu />
    </header>
  );
};
