import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { login, setUser, googleSignin } = use(AuthContext);

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
      setUser(user);
      console.log("Login successful:", user);
      toast.success("Login successful!");
      navigate(`${location.state || "/"}`);
    } catch (err) {
      console.error("Error logging in:", err.code, err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }

    e.target.reset();
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignin();
      const user = result.user;
      setUser(user);
      toast.success("Google Signin successful!");
      navigate(`${location.state || "/"}`);
    } catch (err) {
      console.error("Error with Google Signin:", err.code, err.message);
      setError(err.message);
    }
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
        <Link
          to={"/password-reset"}
          className="font-semibold text-end hover:underline cursor-pointer"
        >
          Forgot Password
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        <p>
          Don't have account?{" "}
          <Link to={"/register"} className="font-bold hover:underline">
            SignUp
          </Link>
        </p>

        <button
          className={`btn   mt-4 ${
            loading ? "bg-gray-300" : "custom-bg-color-primary"
          }`}
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        {/* Google */}
        <button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={handleGoogleSignIn}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </section>
  );
}
