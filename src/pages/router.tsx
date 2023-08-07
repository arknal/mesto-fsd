import { createBrowserRouter } from "react-router-dom";

import Layout from "./lib/pageLayout";
import ProtectedRoute from "./lib/protectedRoute";

import routes from "shared/lib/routes";

import MainPage from "./ui/main";
import NotFoundPage from "./ui/notfound";
import RegisterPage from "./ui/register";
import LoginPage from "./ui/login";
import ProfilePage from "./ui/profile";

const router = createBrowserRouter([
  {
    path: routes.main,
    element: <Layout />,
    children: [
      {
        path: routes.main,
        element: (
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: routes.feed,
            element: <ProtectedRoute>Feed</ProtectedRoute>,
          },
          {
            path: routes.myCards,
            element: <ProtectedRoute>My Cards</ProtectedRoute>,
          },
        ],
      },
      {
        path: `${routes.card}/:cardId`,
        element: <ProtectedRoute>Current Card</ProtectedRoute>,
      },
      {
        path: routes.profile,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: routes.register,
        element: <RegisterPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.about,
        element: <div>about project</div>,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
