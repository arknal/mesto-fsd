import { Outlet } from "react-router-dom";
import { Header, Footer } from "widgets";

export const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
