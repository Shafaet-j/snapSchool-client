import React from "react";

const Instructor = ({ instructor }) => {
  const { name, email, image } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-6">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className=" mt-5 text-left space-y-3">
        <h2 className="card-title">{name}</h2>
        <p className=" text-lg font-semibold"> Email: {email}</p>
        <div className="">
          <button className="btn capitalize font-semibold text-lg btn-primary">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
