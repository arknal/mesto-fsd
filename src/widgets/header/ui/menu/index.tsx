import { useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import profileIcon from "shared/assets/images/profile-icon.svg";
import routes from "shared/lib/routes";
import "./index.scss";
import { UserMenu } from "widgets/header/ui/menu/userMenu";
import ViewerMenu from "widgets/header/ui/menu/viewerMenu";

export const Menu = () => {
  useEffect(() => {
    return () => document.body.classList.remove("page_scroll_lock");
  });

  const [isMenuActive, setIsMenuActive] = useState(false);

  const isAuthorized = true;
  return (
    <div className="menu">
      <span
        className={
          isMenuActive ? "menu__burger menu__burger_active" : "menu__burger"
        }
        onClick={() => {
          document.body.classList.toggle("page_scroll_lock");
          setIsMenuActive(!isMenuActive);
        }}
      />
      <div className="menu__nav-wrapper">
        {isAuthorized ? (
          <UserMenu isMenuActive={isMenuActive} />
        ) : (
          <ViewerMenu />
        )}
      </div>
    </div>
  );
};