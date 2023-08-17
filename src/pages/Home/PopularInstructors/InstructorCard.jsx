import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const InstructorCard = ({ popularInstructor }) => {
  const { name, email, image } = popularInstructor;
  return (
    <Slide direction="up" triggerOnce>
      <div className=" my-6 dark:text-slate-300 p-0 pb-5 h-[445px]">
        {/* <div className=" border-2 border-l-primary p-6 border-r-primary rotate-45 rounded-full">
          <img
            src={image}
            className=" object-cover rounded-full h-80 w-80 "
            alt="A man"
          />
        </div> */}
        <div className="relative">
          <div className=" relative overflow-hidden group">
            {/* Border created using pseudo-elements */}
            <div className="border-2 border-l-primary border-r-primary absolute top-0 left-0 right-0 bottom-0 rotate-45 group-hover:rotate-180 transition-transform rounded-full duration-500 h-80 w-80"></div>

            <img
              src={image}
              className="object-center rounded-full h-80 w-80 p-5"
              alt="A man"
            />
          </div>
        </div>

        <div className=" mt-5 text-certer space-y-3 px-5">
          <h2 className="">{name}</h2>
          <p className=" text-lg font-semibold"> Email: {email}</p>
          <div className="">
            <Link to="/classes">
              <button className="btn capitalize font-semibold text-lg btn-primary text-white rounded">
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
