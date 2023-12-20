import React from "react";
import offer from "../../../assets/offer.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${offer})`,
      }}
      className="featured-item bg-fixed text-white my-20 h-[70vh]"
    >
      <div className="flex justify-center items-center bg-[#073579] bg-opacity-90 h-[70vh]">
        <div className=" overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="md:ml-10 space-y-4"
          >
            <p className=" tracking-widest">ARE YOU READY FOR THIS OFFER</p>
            <p className=" text-5xl font-bold">50% Offer For Very First 50</p>
            <p className=" text-3xl font-bold">Student’s & Mentors</p>
            <Link to="/classes">
              <button className="btn mt-4 btn-primary">
                Become a Student
                <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
