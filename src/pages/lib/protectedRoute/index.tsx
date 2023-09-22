import { Navigate } from "react-router-dom";
import { routes, useAppSelector } from "shared";
import { ReactNode } from "react";
import { selectIsAuthorized } from "entities/user";

interface IProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = (props: IProtectedRouteProps) => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  return <>{isAuthorized ? props.children : <Navigate to={routes.login} />}</>;
};
