import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
const Blog = ({ image, title, subtitle }) => {
  const today = new Date();

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div className="rounded-lg bg-base-100 shadow-xl w-96">
      <figure>
        <img
          className=" rounded-lg h-[215px] w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className=" flex gap-5 items-center">
          <p className=" flex gap-2 items-center">
            <AiOutlineUser color="#525ee0" size={20} /> Sheikh Nipun
          </p>
          <p className=" flex gap-2 items-center">
            <FaRegCalendarAlt color="#525ee0" size={20} /> {formattedDate}
          </p>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className=" text-left">{subtitle}</p>
      </div>
    </div>
  );
};

export default Blog;
