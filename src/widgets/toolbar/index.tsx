import "./index.scss";
import { NavLink } from "react-router-dom";
import routes from "shared/lib/routes";
import { NavigationLink } from "shared/ui";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <nav className="toolbar__nav">
        <NavigationLink to={routes.feed} className="toolbar__link">
          Мир
        </NavigationLink>
        <NavigationLink to={routes.subscriptions} className="toolbar__link">
          Лента
        </NavigationLink>
        <NavigationLink to={routes.myCards} className="toolbar__link">
          Мои места
        </NavigationLink>
        <NavigationLink to={routes.liked} className="toolbar__link">
          Понравившееся
        </NavigationLink>
      </nav>
    </div>
  );
};

export default Toolbar;
