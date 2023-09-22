import { memo } from "react";
import { Profile, Toolbar } from "widgets";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { routes } from "shared";

export const MainPage = memo(() => {
  const location = useLocation();

  console.log("main render");
  if (location.pathname === routes.main) {
    return <Navigate to={routes.feed} />;
  }
  return (
    <main className="content">
      <Profile />
      <Toolbar />
      <Outlet />
    </main>
  );
});
