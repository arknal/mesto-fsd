import React, { FC } from "react";
import "./index.scss";
import { createClassName } from "shared/utils/helpers";
import IButtonProps from "./props";

export const Button: FC<IButtonProps> = ({
  children,
  theme,
  isLoading,
  className,
  ...props
}) => {
  const fullClassName = createClassName(
    ["button", `button_theme_${theme}`],
    className
  );

  return (
    <button className={fullClassName} disabled={isLoading} {...props}>
      {children}
    </button>
  );
};
