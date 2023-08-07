import { EventHandler, FC, FormEvent, ReactNode } from "react";
import "./index.scss";

interface IProps {
  onSubmit?: EventHandler<FormEvent>;
  children: ReactNode;
  className?: string;
}

export const Form: FC<IProps> = (props) => {
  return (
    <form
      className={`form${props.className ? " " + props.className : ""}`}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export * from "./ui";
