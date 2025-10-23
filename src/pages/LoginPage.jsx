import React from "react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="fieldset-legend text-center text-2xl font-bold">
          Login
        </h2>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <p>
          Don't have account?{" "}
          <Link to={"/register"} className="font-bold hover:underline">
            SignUp
          </Link>
        </p>
        <button className="btn  custom-bg-color-primary mt-4">Login</button>
      </fieldset>
    </section>
  );
}
