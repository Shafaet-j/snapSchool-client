import React from "react";

const Instructor = ({ instructor }) => {
  const { Name, Email, Image } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-6">
      <figure>
        <img src={Image} alt="Shoes" />
      </figure>
      <div className=" mt-5 text-left space-y-3">
        <h2 className="card-title">{Name}</h2>
        <p>{Email}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Classes</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
