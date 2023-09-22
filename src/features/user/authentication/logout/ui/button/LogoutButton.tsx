import { Button, useAppDispatch } from "shared";
import { FC, MouseEvent } from "react";
import { logoutThunk } from "features/user/authentication/logout/model/logout";

interface LogoutButtonProps {
  className: string;
}

export const LogoutButton: FC<LogoutButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  function onLogout(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(logoutThunk());
  }
  return (
    <Button
      type="button"
      theme="light"
      className={props.className}
      onClick={onLogout}
    >
      Выйти из аккаунта
    </Button>
  );
};
