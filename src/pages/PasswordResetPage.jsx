import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

export default function PasswordResetPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { resetPassword } = use(AuthContext);
  const navigate = useNavigate();

  const handlePasswordResetEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      setLoading(true);
      await resetPassword(email);

      toast.success("Password reset email send successfully!");
      navigate("/login");
      window.open("https://mail.google.com/", "_blank");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handlePasswordResetEmail}
      >
        <h2 className="fieldset-legend text-center text-2xl font-bold">
          Reset Password
        </h2>

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

        <p>
          Go to{" "}
          <Link to={"/login"} className="font-bold hover:underline">
            login
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
          Send
        </button>
      </form>
    </section>
  );
}
