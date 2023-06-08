import React from "react";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isIntructorLoading] = useInstructor();
  const location = useLocation();

  if (loading && isIntructorLoading) {
    return <h3>loading..</h3>;
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
