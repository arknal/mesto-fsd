import { FC, ReactNode } from "react";
import "./index.scss";

interface IProps {
  children: ReactNode;
}

export const FormField: FC<IProps> = (props) => {
  return <div className="form__field">{props.children}</div>;
};
