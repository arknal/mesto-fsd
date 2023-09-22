import "./index.scss";
import { NavigationLink, routes } from "shared";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <nav className="toolbar__nav">
        <NavigationLink to={routes.subscriptions} className="toolbar__link">
          Лента
        </NavigationLink>
        <NavigationLink to={routes.myCards} className="toolbar__link">
          Мои места
        </NavigationLink>
      </nav>
    </div>
  );
};
