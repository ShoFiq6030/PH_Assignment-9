import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import Category from "../components/HomePage/Category";
import CategoryPage from "../pages/CategoryPage";
import CategoryWiseSkillsPage from "./../pages/CategoryWiseSkillsPage";
import SkillsDetailsPage from "../pages/SkillsDetailsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PrivateRoute from "../provider/PrivateRoute";
import UserProfilePage from "../pages/UserProfilePage";
import PasswordResetPage from "../pages/PasswordResetPage";
import Loading from "../components/common/Loading";
import NotFoundPage from "./../pages/NotFoundPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        loader: () => fetch("/data/categories.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
        loader: () => fetch("/data/categories.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/category/:category",
        element: <CategoryWiseSkillsPage />,
      },
      {
        path: "/skills/:skillId",
        element: (
          <PrivateRoute>
            <SkillsDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/profile/:userId",
        element: <UserProfilePage />,
      },
      {
        path: "/blogs",
        element: (
          <div className="flex justify-center items-center min-h-screen">
            <h2>Coming Soon...</h2>
          </div>
        ),
      },
      {
        path: "/password-reset",
        element: <PasswordResetPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
