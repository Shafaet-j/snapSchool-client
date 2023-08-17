import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";
import ins from "../../assets/bg8.png";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
      <Helmet>
        <title>SnapSchool | Instructors</title>
      </Helmet>
      <section
        className=" h-[35vh] relative w-full flex items-center"
        style={{
          backgroundImage: `url(${ins})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-left ml-8 lg:ml-[210px]">
          <h2 className=" lg:text-5xl text-3xl font-bold text-accent mb-3">
            Our Instructors
          </h2>
          <p className=" text-accent font-bold flex items-center gap-3">
            <Link to="/">Home</Link>
            <span>
              <FaArrowRight />
            </span>
            Instructors
          </p>
        </div>
      </section>
      <section className=" container mx-auto py-20">
        <p className=" text-primary font-extrabold text-base mb-5">
          SKILLED INSTRUCTOR
        </p>
        <h1 className=" lg:text-4xl font-extrabold tex-accent dark:text-slate-300">
          Introduce Our Instructors
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <Instructor
              key={instructor._id}
              instructor={instructor}
            ></Instructor>
          ))}
        </div>
      </section>
    </>
  );
};

export default Instructors;
