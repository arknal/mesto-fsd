import { RouterProvider } from "react-router-dom";
import router from "pages/router";

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
