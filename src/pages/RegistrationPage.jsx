import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function RegistrationPage() {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const redirect = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handelSignUp = (e) => {
    e.preventDefault();
    setError("");
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    // console.log(name, email, password);

    if (!regex.test(password)) {
      setError(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }
    // console.log(name, email, password);
    try {
      const userDetails = createUser(email, password);
      // console.log("User created successfully:", userDetails);
      toast.success("User created successfully!");
      setUser(userDetails.user);
      redirect("/");
    } catch (err) {
      console.error("Error creating user:", err);
      setError(err.message);
    }
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
        <label className="label">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="name"
          name="name"
          className="input"
          placeholder="Name"
          required
        />
        {/* email  */}
        <label className="label">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />
        {/* photo url  */}
        <label className="label">Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          className="input"
          placeholder="Photo URL"
        />
        {/* password  */}
        <label className="label">
          Password<span className="text-red-500">*</span>
        </label>
        <div className="flex relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          <div
            className="absolute right-1 top-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEyeSlash size={15} />
            ) : (
              <FaRegEye size={15} />
            )}
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <p>
          Already have account?{" "}
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
