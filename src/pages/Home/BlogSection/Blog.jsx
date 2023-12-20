import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Blog = ({ image, title, subtitle, index }) => {
  const today = new Date();

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div className=" overflow-hidden">
      <motion.div
        initial={{ y: "-50%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: index / 10 }}
        className="rounded-lg bg-base-100 shadow-xl w-96"
      >
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
      </motion.div>
    </div>
  );
};

export default Blog;
