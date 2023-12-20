import React from "react";
import bg5 from "../../../assets/bg5.png";
import bg6 from "../../../assets/bg6.png";
import bg7 from "../../../assets/bg7.png";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";
import bg4 from "../../../assets/bg4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Banner.css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className=" mb-16">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[95vh] w-full object-cover -scale-x-100"
              src={bg4}
              alt=""
            />
            {/* <div className="absolute inset-0 overlay"></div> */}

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full px-5">
              <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto lg:gap-20 gap-5 justify-items-center">
                <div className="text-left lg:space-y-6 space-y-3">
                  <div className=" overflow-hidden">
                    <motion.p
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className=" text-base font-extrabold text-primary mt-5"
                    >
                      BETTER LEARNING FUTURE WITH US
                    </motion.p>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-accent font-extrabold lg:text-7xl text-4xl text-left"
                    >
                      Exploring The World In
                      <span className=" text-primary"> Frames</span>
                    </motion.h1>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.h3
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className=" lg:text-xl font-medium mt-7 text-[#6f6b80]"
                    >
                      Empower yourself with the knowledge and skills gained
                      through online education! The key to your future!
                    </motion.h3>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.div
                      initial={{ x: "-50%" }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className=""
                    >
                      <button className="px-6 py-3 rounded-md btn btn-primary font-bold text-white">
                        <Link to="/signup">Get Started today</Link>
                      </button>
                    </motion.div>
                  </div>
                </div>

                <div className=" relative">
                  <img className="  mr-0 w-80 lg:w-full" src={bg5} alt="" />
                  <img
                    className="hidden lg:block lg:absolute lg:top-0 lg:-right-[180px]"
                    src={bg6}
                    alt=""
                  />
                  <img
                    className="hidden lg:block lg:absolute lg:top-0"
                    src={bg7}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[95vh] w-full object-cover" src={bg2} alt="" />
            <div className="absolute inset-0 overlay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lg:text-7xl w-full font-bold">
              <div className=" overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Capturing Moments, Creating Memories
                </motion.h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[95vh] w-full object-cover" src={bg3} alt="" />
            <div className="absolute inset-0 overlay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lg:text-7xl w-full font-bold">
              Unlocking the Art of Photography
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
