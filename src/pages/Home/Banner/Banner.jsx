import React from "react";
import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className=" min-h-screen">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img className=" h-[80vh] w-full object-cover" src={bg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[80vh] w-full object-cover" src={bg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[80vh] w-full object-cover" src={bg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
