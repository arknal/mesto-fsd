import "./index.scss";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

interface INavLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
  classNameActive?: string;
}
const toggleLinkState = (
  { isActive }: { isActive: boolean },
  additional?: string,
  additionalActive?: string,
) =>
  isActive
    ? `navlink ${additional || ""} ${additionalActive || "navlink_active"}`
    : `navlink ${additional || ""}`;

export const NavigationLink: FC<INavLinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={(state) =>
        toggleLinkState(state, props.className, props.classNameActive)
      }
    >
      {props.children}
    </NavLink>
  );
};
