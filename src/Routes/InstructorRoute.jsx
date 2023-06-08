import React from "react";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isIntructorLoading] = useInstructor();
  const location = useLocation();

  if (loading && isIntructorLoading) {
    return (
      <div className="  absolute top-[30%] right-[50%]">
        <PuffLoader></PuffLoader>
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
