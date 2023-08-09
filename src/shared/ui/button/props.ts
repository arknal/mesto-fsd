import { FormEventHandler, MouseEventHandler } from "react";

export default interface IButtonProps {
  children: string;
  type: "submit" | "reset" | "button";
  theme: "dark" | "light";
  className?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
