import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export default function RegistrationPage() {
  const { createUser } = use(AuthContext);
  const handelSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handelSignUp}
      >
        <h2 className="fieldset-legend text-center text-2xl font-bold">
          Sign Up
        </h2>
        {/* name  */}
        <label className="label">Name</label>
        <input type="name" name="name" className="input" placeholder="Name" />
        {/* email  */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        {/* password  */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <p>
          already have account?{" "}
          <Link to={"/login"} className="font-bold hover:underline">
            Login
          </Link>
        </p>

        <button className="btn  custom-bg-color-primary mt-4" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
