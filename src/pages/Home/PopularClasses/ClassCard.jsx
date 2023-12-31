import React from "react";
import { FaChair } from "react-icons/fa";
import { motion } from "framer-motion";
const ClassCard = ({ popularClass, index }) => {
  const { name, image, price, available_seat, instructor_name } = popularClass;

  return (
    <div className=" overflow-hidden">
      <motion.div
        initial={{ y: "-50%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: index / 10 }}
        className="card   bg-base-100 shadow-xl p-0 pb-7 dark:bg-slate-800 dark:text-slate-300 rounded-md"
      >
        <figure>
          <img
            className=" h-80 object-cover w-full hover:scale-110 duration-300"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" p-4 space-y-4 text-left">
          <div className=" flex justify-between">
            <div className=" flex items-center gap-5">
              <FaChair />
              <span className="text-[#6f6b80] dark:text-slate-300">
                {available_seat + " "}Seat available
              </span>
            </div>
            <p className=" font-bold dark:text-slate-300">{instructor_name}</p>
          </div>
          <h2 className="card-title">{name}</h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <hr className="border-t-2 border-gray-200"></hr>
          <p className=" font-bold text-2xl">
            <span className=" text-primary">${price}.00</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassCard;
