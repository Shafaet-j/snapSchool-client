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
        <img className=" rounded-t-xl h-80 w-full object-cover" src={data.image} alt="Shoes" />
      </figure>
      <div className="grid grid-cols-2 text-left p-3 gap-5 justify-items-stretch items-center">
        <h2 className="card-title">{data.name}</h2>
        <div className=" flex items-center justify-between">
          <p className=" font-semibold text-base">
            Available Seat: {data.available_seat}
          </p>
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
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
