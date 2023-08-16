import { FormEventHandler, MouseEventHandler, ReactNode } from "react";

export default interface IButtonProps {
  children: string | ReactNode;
  type: "submit" | "reset" | "button";
  theme: "dark" | "light";
  className?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
