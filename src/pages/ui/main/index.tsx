import React from "react";
import { Profile, Toolbar } from "widgets";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { routes } from "shared";

export const MainPage = () => {
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
