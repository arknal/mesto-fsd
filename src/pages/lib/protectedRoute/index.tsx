import { Navigate } from "react-router-dom";
import routes from "shared/lib/routes";
import { ReactNode } from "react";

interface IProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = (props: IProtectedRouteProps) => {
  const isAuthorized = true;

  return <>{isAuthorized ? props.children : <Navigate to={routes.login} />}</>;
};

export default ProtectedRoute;
