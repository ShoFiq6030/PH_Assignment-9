import React from "react";
import Navbar from "./../components/common/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col  bg-gray-300">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
