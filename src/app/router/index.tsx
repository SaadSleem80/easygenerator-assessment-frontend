import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/root-layout";
import ProtectedRoute from "./protected-route";
import GuestRoute from "./guest-route";

import HomePage from "@/features/home/pages/page";
import SigninPage from "@/features/auth/pages/signin/page";
import SignupPage from "@/features/auth/pages/signup/page";
import NotFoundPage from "@/features/errors/pages/page";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <GuestRoute />,
        children: [
          { path: "/sign-in", element: <SigninPage /> },
          { path: "/sign-up", element: <SignupPage /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: "/", element: <HomePage /> }],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
