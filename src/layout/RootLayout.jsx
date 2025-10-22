import React from "react";
import Navbar from "./../components/common/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
