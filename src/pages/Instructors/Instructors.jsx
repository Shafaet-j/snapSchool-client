import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";
import ins from "../../assets/instructor.jpg";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {

  const {
    data: instructors = [],
    refetch,
    isLoading,
  } = useQuery(["instructor"], async () => {
    const res = await fetch(
      "https://snapschool-server-shafaet-j.vercel.app/users/instructor"
    );
    return res.json();
  });


  // const {loading} = useAuth()
  // const [instructors, setInstructors] = useState([]);
  // useEffect(() => {
  //   fetch("https://snapschool-server-shafaet-j.vercel.app/users/instructor")
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);

  if (isLoading) {
    return (
      <div className="  absolute top-[30%] right-[50%]">
        <PuffLoader></PuffLoader>
      </div>
    );
  }


  return (
    <>
      <section
        className=" h-[35vh] relative "
        style={{
          backgroundImage: `url(${ins})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" container mx-auto">
          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-80 text-left">
            <h2 className=" text-5xl font-bold text-white mb-3">
              Our Instructors
            </h2>
            <p className=" text-white font-bold flex items-center gap-3">
              Home
              <span>
                <FaArrowRight />
              </span>
              Instructors
            </p>
          </div>
        </div>
      </section>
      <section className=" container mx-auto">
        {/* <h1 className=" lg:text-5xl font-bold">Our Instructors</h1> */}
        <div className=" grid grid-cols-3">
          {instructors.map((instructor) => (
            <Instructor instructor={instructor}></Instructor>
          ))}
        </div>
      </section>
    </>
  );
};

export default Instructors;
