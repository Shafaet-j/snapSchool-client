import React from "react";
import { Link } from "react-router-dom";

const Instructor = ({ instructor }) => {
  const { name, email, image } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-10 dark:bg-slate-800 dark:text-slate-300">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className=" mt-5 text-left space-y-3">
        <h2 className="card-title">{name}</h2>
        <p className=" text-lg font-semibold"> Email: {email}</p>
        <div className="">
          <Link to='/classes'>
            <button className="btn capitalize font-semibold text-lg btn-primary">
              See Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
