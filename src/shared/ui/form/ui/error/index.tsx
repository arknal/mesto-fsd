import { FC } from "react";
import "./index.scss";

interface IProps {
  children?: string;
}

export const FormError: FC<IProps> = (props) => {
  return <span className="form__error">{props.children}</span>;
};
