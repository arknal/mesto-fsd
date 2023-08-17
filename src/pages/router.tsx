import { createBrowserRouter } from "react-router-dom";

import { PageLayout, ProtectedRoute } from "./lib";

import { routes, MockMesto } from "shared";

import {
  MainPage,
  NotFoundPage,
  SignupPage,
  LoginPage,
  ProfilePage,
} from "./ui";

import { MestoWidget } from "widgets";

const router = createBrowserRouter([
  {
    path: routes.main,
    element: <PageLayout />,
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
            element: (
              <ProtectedRoute>
                <MestoWidget {...MockMesto} />
              </ProtectedRoute>
            ),
          },
          {
            path: routes.myCards,
            element: <ProtectedRoute>My Cards</ProtectedRoute>,
          },
          {
            path: routes.subscriptions,
            element: <ProtectedRoute>subscriptions</ProtectedRoute>,
          },
          {
            path: routes.liked,
            element: <ProtectedRoute>liked</ProtectedRoute>,
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
        path: routes.signup,
        element: <SignupPage />,
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
