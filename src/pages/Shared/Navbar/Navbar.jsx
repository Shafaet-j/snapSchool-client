import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
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

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  z-10 sticky top-0 bg-white">
      <>
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden btn-primary">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className=" text-3xl font-bold text-primary">SnapSchool</a>
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
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
