import { FC, MouseEventHandler, ReactNode } from "react";
import "./index.scss";
import { createClassName } from "shared/utils/helpers";

interface IIconButtonProps {
  children: ReactNode;
  type: "button" | "submit";
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IIconButtonProps> = (props) => {
  return (
    <button
      className={createClassName(["icon-button"], props.className)}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
