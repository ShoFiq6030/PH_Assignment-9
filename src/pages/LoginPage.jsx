import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();

  const { login } = use(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      setError("");
      setLoading(true);
      const userCredential = await login(email, password);
      const user = userCredential.user;
      console.log("Login successful:", user);
      toast.success("Login successful!");
      redirect("/");
    } catch (err) {
      console.error("Error logging in:", err.code, err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }

    // e.target.reset();
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleLogin}
      >
        <h2 className="fieldset-legend text-center text-2xl font-bold">
          Login
        </h2>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          required
        />
        <p>
          Don't have account?{" "}
          <Link to={"/register"} className="font-bold hover:underline">
            SignUp
          </Link>
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <button
          className={`btn   mt-4 ${
            loading ? "bg-gray-300" : "custom-bg-color-primary"
          }`}
          type="submit"
          disabled={loading}
        >
          Login
        </button>
      </form>
    </section>
  );
}
