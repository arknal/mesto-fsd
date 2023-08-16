import { FC } from "react";
import routes from "shared/lib/routes";
import profileIcon from "shared/assets/images/profile-icon.svg";
import { NavigationLink } from "shared/ui";

export const UserMenu: FC = () => {
  return (
    <nav className="menu__nav">
      <NavigationLink to={routes.main}>Главная</NavigationLink>
      <NavigationLink to={routes.about}>О проекте</NavigationLink>
      <NavigationLink
        to={routes.profile}
        className="menu__profile-link"
        classNameActive="menu__profile-link_active"
      >
        Аккаунт
        <img src={profileIcon} alt="" className="menu__profile-icon" />
      </NavigationLink>
    </nav>
  );
};
