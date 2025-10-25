import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

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
    } catch (err) {
      console.log(err.massage);
      setError(err.massage);
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

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        <p>
          go to{" "}
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
