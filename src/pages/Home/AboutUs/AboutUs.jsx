import React from "react";
import bg1 from "../../../assets/about1.jpg";
import bg2 from "../../../assets/about2.jpg";
import bg3 from "../../../assets/about3.jpg";
import { Link } from "react-router-dom";
import { FaAward, FaCalendarCheck, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className=" container mx-auto py-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto lg:gap-12 gap-5 justify-items-center">
        <div className=" relative">
          <img className="w-80 lg:w-full relative" src={bg1} alt="" />
          <img
            className="hidden lg:block -right-[85px] top-1/2 absolute animate-bounce"
            src={bg2}
            alt=""
            style={{ animationDuration: "2s" }}
          />
          <img
            className="hidden lg:block absolute -left-[150px] bottom-1/2"
            src={bg3}
            alt=""
          />
        </div>

        <div className="lg:text-left lg:space-y-6 space-y-3 px-5">
          <div className=" overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=" text-base font-extrabold text-primary mt-5"
            >
              WHO WE ARE
            </motion.p>
          </div>
          <div className=" overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-accent font-extrabold lg:text-4xl text-2xl lg:text-left  dark:text-slate-300"
            >
              We Offer The Best Carrier
            </motion.h1>
          </div>
          <div className=" gap-14 flex-col flex overflow-hidden">
            <div className=" overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" flex gap-8"
              >
                <span>
                  <FaUserTie
                    className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                    size={55}
                  />
                </span>
                <div>
                  <h2 className=" text-xl font-bold text-accent dark:text-slate-300 text-left">
                    Industry Expert Instructor
                  </h2>
                  <p className="text-[#6f6b80] dark:text-slate-300 text-left">
                    Online learning has become increasingly popular in recent
                    years, offering a flexible and convenient way for learning.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className=" overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" flex gap-8"
              >
                <span>
                  <FaCalendarCheck
                    className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                    size={55}
                  />
                </span>
                <div>
                  <h2 className=" text-xl font-bold text-accent dark:text-slate-300 text-left">
                    Up-to-Date Course Content
                  </h2>
                  <p className="text-[#6f6b80] dark:text-slate-300 text-left">
                    Our platform also features a collaborative learning
                    environment, where you can connect with fellow learners.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className=" overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" flex gap-8"
              >
                <span>
                  <FaAward
                    className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                    size={55}
                  />
                </span>
                <div>
                  <h2 className=" text-xl font-bold text-accent dark:text-slate-300 text-left">
                    Biggest Student Community
                  </h2>
                  <p className="text-[#6f6b80] dark:text-slate-300 text-left">
                    Our courses are designed by industry experts and delivered
                    through interactive online modules with a great community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className=" overflow-hidden">
            <motion.div
              initial={{ x: "-50%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=""
            >
              <button className="px-6 py-3 rounded-md btn btn-primary font-bold text-white">
                <Link to="/signup">Learn more</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
