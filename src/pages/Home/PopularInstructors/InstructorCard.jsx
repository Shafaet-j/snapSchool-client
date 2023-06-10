import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const InstructorCard = ({ popularInstructor }) => {
  const { name, email, image } = popularInstructor;
  return (
    <Slide direction="up" triggerOnce>
      <div className="card w-96 bg-base-100 shadow-xl my-6">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className=" mt-5 text-left space-y-3">
          <h2 className="card-title">{name}</h2>
          <p className=" text-lg font-semibold"> Email: {email}</p>
          <div className="">
            <Link to="/classes">
              <button className="btn capitalize font-semibold text-lg btn-primary">
                See Classes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default InstructorCard;
