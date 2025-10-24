import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
  const { user } = use(AuthContext);
  const location =useLocation()

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children}</div>;
}
