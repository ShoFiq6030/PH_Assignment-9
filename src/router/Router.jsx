import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import Category from "../components/HomePage/Category";
import CategoryPage from "../pages/CategoryPage";
import CategoryWiseSkillsPage from "./../pages/CategoryWiseSkillsPage";
import SkillsDetailsPage from "../pages/SkillsDetailsPage";

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
      },
      {
        path: "/category",
        element: <CategoryPage />,
        loader: () => fetch("/data/categories.json"),
      },
      {
        path: "/category/:category",
        element: <CategoryWiseSkillsPage />,
      },
      {
        path: "/skills/:skillId",
        element: <SkillsDetailsPage />,
      },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
]);

export default router;
