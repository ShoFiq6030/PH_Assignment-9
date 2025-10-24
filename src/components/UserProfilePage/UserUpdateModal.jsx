import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

export default function UserUpdateModal({ setOpenModal, handleProfileUpdate }) {
  const [error, setError] = useState("");
  const { user } = use(AuthContext);

  // ✅ Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    // cleanup listener on unmount
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpenModal]);

  return (
    <div className="flex justify-center items-center bg-gray-400/70 absolute top-0 left-0 w-full h-full z-10">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleProfileUpdate}
      >
        <h2 className="fieldset-legend text-center text-2xl font-bold">
          Update Info
        </h2>
        {/* name  */}
        <label className="label">Name</label>
        <input
          type="name"
          name="name"
         
          className="input"
          placeholder="Name"
          required
        />
        {/* email  */}
        <label className="label">Picture Url</label>
        <input
          type="text"
          name="photoURL"
        
          className="input"
          placeholder="Photo URL"
          required
        />
        {/* password  */}
        {/* <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        /> */}
        {error && <p className="text-red-500">{error}</p>}

        <button className="btn  custom-bg-color-primary mt-4" type="submit">
          Update Profile
        </button>
        <button
          className="btn bg-red-300 mt-4 "
          onClick={() => {
            setOpenModal(false);
            // close on escape key press
          }}
        >
          close
        </button>
      </form>
    </div>
  );
}
