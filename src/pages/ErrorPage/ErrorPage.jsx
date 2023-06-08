import React from "react";
import errorbg from '../../assets/error.png'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" container mx-auto">
      <img
        className=" lg:w-full h-[60vh] object-contain mx-auto"
        src={errorbg}
        alt=""
      />
      <Link to="/">
        <button className="mt-7 btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
