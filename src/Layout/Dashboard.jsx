import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBeer, FaBookOpen, FaHome, FaUser } from "react-icons/fa";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  const isAdmin = false;
  const isConstructor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
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
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
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
            </>
          ) : isConstructor ? (
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
