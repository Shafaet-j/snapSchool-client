import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Switch } from "@headlessui/react";

const Navbar = () => {
  const { user, logOut, toggleDarkMode, darkMode } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes"> Classes</Link>
      </li>
      <li>
        <Link
          to={
            isAdmin
              ? "/dashboard/manageClasses"
              : isInstructor
              ? "/dashboard/addClass"
              : "/dashboard"
          }
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  z-10 sticky top-0 bg-white dark:bg-slate-950 dark:text-slate-300 dark:border-b-2 dark:border-b-slate-900">
      <>
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl dark:bg-slate-950 dark:text-slate-300"
              >
                {navOptions}
              </ul>
            </div>
            <a className="text-xl lg:text-3xl font-bold text-primary">
              SnapSchool
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className=" navbar-end">
            <ul className=" flex items-center flex-row-reverse gap-4">
              <div onClick={handleLogOut}>
                {user && <NavLink>logOut</NavLink>}
              </div>
              <div>
                {user ? (
                  <>
                    <img
                      id="app-title"
                      className=" rounded-full w-12 h-12 border-2 p-1"
                      src={user.photoURL}
                      alt=""
                    />
                    <ReactTooltip
                      anchorId="app-title"
                      place="bottom"
                      content={user?.displayName}
                    />
                  </>
                ) : (
                  <li className="">
                    <NavLink to="/login">LogIn</NavLink>
                  </li>
                )}
              </div>
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                className={`${
                  darkMode ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
