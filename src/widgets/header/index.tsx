import "./index.scss";

import { Menu } from "./ui/";

function Header() {
  return (
    <header className="header">
      <img src="./header__logo.svg" alt="Логотип" className="header__logo" />
      <Menu />
    </header>
  );
}

export default Header;
