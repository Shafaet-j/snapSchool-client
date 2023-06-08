import React from "react";

const SingleClass = ({ data }) => {
  console.log(data);
  return (
    <div
      className={` ${
        data.available_seat > 1
          ? "card   bg-base-100 shadow-xl p-0 pb-7 rounded-xl"
          : "border-2 border-red-500 rounded-xl"
      }`}
    >
      <figure>
        <img className=" rounded-t-xl" src={data.image} alt="Shoes" />
      </figure>
      <div className="grid grid-cols-2 text-left p-3 gap-5 justify-items-stretch items-center">
        <h2 className="card-title">{data.name}</h2>
        <p className=" font-semibold text-base">
          Available Seat: {data.available_seat}
        </p>
        <p className=" font-semibold text-base">
          Email: {data.instructor_email}
        </p>
        <p className=" font-semibold text-base">Name: {data.instructor_name}</p>
        <p className=" font-bold text-2xl">Price: ${data.price}</p>
        <button className=" btn">Enroll</button>
      </div>
    </div>
  );
};

export default SingleClass;
