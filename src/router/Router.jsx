import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";

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
    ],
  },
]);

export default router;
