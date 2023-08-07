import React from "react";
import { Outlet } from "react-router-dom";
import Header from "widgets/header";
import Footer from "widgets/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
