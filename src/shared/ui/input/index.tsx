import { ChangeEventHandler, FC } from "react";
import "./index.scss";
import { createClassName } from "shared/utils/helpers";

interface IProps {
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  name?: string;
  placeholder?: string;
  theme?: "light" | "dark";
  className?: string;
}

export const Input: FC<IProps> = ({ placeholder, className, ...props }) => {
  const createdClassName = createClassName(
    [`input input_theme_${props.theme}`],
    className,
  );
  return (
    <span className="input__float-label">
      <input className={createdClassName} {...props} placeholder="" />
      <label htmlFor={props.name}>{placeholder}</label>
    </span>
  );
};
