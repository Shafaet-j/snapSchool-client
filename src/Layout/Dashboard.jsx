import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBeer, FaBookOpen, FaHome, FaUser } from "react-icons/fa";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // const isAdmin = false;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  console.log(isInstructor)
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/manageClasses">
                  <FaBookOpen /> Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers">
                  <FaUser /> Manage Users
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaHome /> Back to Home
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to="/dashboard/addClass">
                  <FaBookOpen /> Add Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myClass">
                  <FaUser /> My Class
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaHome /> Back to Home
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/enrolledClass">
                  <FaBookOpen /> Enrolled Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/selectedClass">
                  <FaUser /> Selected Class
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaHome /> Back to Home
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
