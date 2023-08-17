import { useEffect, useState } from "react";

import "./index.scss";

import UserMenu from "./userMenu";
import ViewerMenu from "./viewerMenu";

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
        {isAuthorized ? <UserMenu /> : <ViewerMenu />}
      </div>
    </div>
  );
};
