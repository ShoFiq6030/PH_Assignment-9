import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logout } = use(AuthContext);
  const navigation = useNavigate();

  // console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout successful!");
      navigation("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/category">Category</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* mobile menu  */}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="font-semibold  text-xl">
          SkillExplorer
        </Link>
      </div>
      {/* desktop menu  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user && (
          <>
            <Link to={`/profile/${user.uid}`} className="mr-4">
              <img
                src={
                  user.photoURL ||
                  "https://res.cloudinary.com/dutnq2gdm/image/upload/v1745864054/user-1699635_640_mgcjmz.png"
                }
                alt={user.displayName}
                title={user.displayName || user.email}
                className={`w-10 h-10 object-cover rounded-full border-2  `}
              />
            </Link>
          </>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn custom-bg-color-primary "
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn custom-bg-color-primary ">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
