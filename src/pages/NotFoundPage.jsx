import React from "react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center ">
      <img src={"/App-Error.png"} alt="not-found" />
      <Link to="/" className="btn custom-bg-color-primary">
        Home
      </Link>
    </div>
  );
}
