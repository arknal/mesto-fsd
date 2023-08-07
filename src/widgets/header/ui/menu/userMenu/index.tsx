import { FC } from "react";
import { NavLink } from "react-router-dom";
import routes from "shared/lib/routes";
import profileIcon from "shared/assets/images/profile-icon.svg";

import { toggleLinkState, toggleProfileLinkState } from "../helpers";

interface IUserMenuProps {
  isMenuActive: boolean;
}

export const UserMenu: FC<IUserMenuProps> = ({ isMenuActive }) => {
  return (
    <nav className="menu__nav">
      <NavLink to={routes.main} className={toggleLinkState}>
        Главная
      </NavLink>
      <NavLink to={routes.about} className={toggleLinkState}>
        О проекте
      </NavLink>
      <NavLink to={routes.profile} className={toggleProfileLinkState}>
        Аккаунт
        <img src={profileIcon} alt="" className="menu__profile-icon" />
      </NavLink>
    </nav>
  );
};
