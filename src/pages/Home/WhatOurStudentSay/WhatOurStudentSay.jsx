import React from "react";
import bg2 from "../../../assets/testimonial_bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

const WhatOurStudentSay = () => {
  return (
    <section
      className=" h-[60vh] flex items-center w-full overflow-hidden dark:bg-slate-950"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <div className=" mx-auto container">
        <div className="">
          <h2 className="text-2xl lg:text-5xl font-bold text-white mb-10">
            What Our Students <br /> Say About Us
          </h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <p className=" text-lg text-white">
                “ when an unknown printer took a galley of type and <br />{" "}
                scrambled to make a type specimen book. <br /> It has survived
                not only five centuries, but also the leap into electronic.”
              </p>
              <div className="divider border-3"></div>
              <h3 className=" text-xl font-bold text-white">Taha</h3>
            </SwiperSlide>
            <SwiperSlide>
              <p className=" text-lg text-white">
                “ when an unknown printer took a galley of type and <br />{" "}
                scrambled to make a type specimen book. <br /> It has survived
                not only five centuries, but also the leap into electronic.”
              </p>
              <div className="divider border-3"></div>
              <h3 className=" text-xl font-bold text-white">Tasin</h3>
            </SwiperSlide>
            <SwiperSlide>
              <p className=" text-lg text-white">
                “ when an unknown printer took a galley of type
                and <br /> scrambled to make a type specimen book. <br /> It has
                survived not only five centuries, but also the leap into
                electronic.”
              </p>
              <div className="divider border-3"></div>
              <h3 className=" text-xl font-bold text-white">Tafsir</h3>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className=" w-1/2">sdkfh</div> */}
      </div>
    </section>
  );
};

export default WhatOurStudentSay;
