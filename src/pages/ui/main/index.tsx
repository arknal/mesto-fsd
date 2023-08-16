import React from "react";
import Profile from "widgets/profile";
import Toolbar from "widgets/toolbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import routes from "shared/lib/routes";

const MainPage = () => {
  const location = useLocation();

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
};

export default MainPage;
