import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import routes from "shared/lib/routes";
import { toggleLinkState } from "widgets/header/ui/menu/helpers";

const ViewerMenu: FC = () => {
  return (
    <nav className="menu__nav">
      <NavLink to={routes.login} className={toggleLinkState} data-title="Войти">
        Войти
      </NavLink>
      <NavLink
        to={routes.register}
        className={toggleLinkState}
        data-title="Регистрация"
      >
        Регистрация
      </NavLink>
      <NavLink
        to={routes.about}
        className={toggleLinkState}
        data-title="О проекте"
      >
        О проекте
      </NavLink>
    </nav>
  );
};

export default ViewerMenu;
