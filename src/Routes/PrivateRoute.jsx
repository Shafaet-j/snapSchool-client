import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation()
  if(loading){
    return <PuffLoader></PuffLoader>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} ></Navigate>;
};

export default PrivateRoute;
