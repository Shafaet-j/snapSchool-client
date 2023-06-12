import React from "react";
import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Banner.css";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className=" mb-16">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img className="h-[80vh] w-full object-cover -scale-x-100" src={bg1} alt="" />
            <div className="absolute inset-0 overlay"></div>
            <Fade duration={3000}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full">
                <h1 className="text-white font-bold lg:text-7xl text-4xl">Exploring the World in <span className=" text-primary">Frames</span> </h1>
                <h3 className=" lg:text-xl font-semibold text-white mt-7">Explore Your Skills With Varieties of Courses</h3>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[80vh] w-full object-cover" src={bg2} alt="" />
            <div className="absolute inset-0 overlay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lg:text-7xl w-full font-bold">
              Capturing Moments, Creating Memories
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="h-[80vh] w-full object-cover" src={bg3} alt="" />
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
