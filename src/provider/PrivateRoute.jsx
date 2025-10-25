import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/common/Loading";

export default function PrivateRoute({ children }) {
  const { user, authLoading } = use(AuthContext);
  console.log(user);
  const location = useLocation();
  if (authLoading) {
    return <Loading />;
  }
  if (user) {
    return <div>{children}</div>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
}
