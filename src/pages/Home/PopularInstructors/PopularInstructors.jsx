import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";

const PopularInstructors = () => {
  // const [popularInstructors, setPopularInstructors] = useState([]);

  const {
    data: popularInstructors = [],
    refetch,
    isLoading,
  } = useQuery(["instructor"], async () => {
    const res = await fetch(
      "https://snapschool-server-shafaet-j.vercel.app/users/instructor"
    );
    return res.json();
  });

  if (isLoading) {
    return (
      <div className="  absolute top-[30%] right-[50%]">
        <PuffLoader></PuffLoader>
      </div>
    );
  }

  // useEffect(() => {
  //   fetch("https://snapschool-server-shafaet-j.vercel.app/users/instructor")
  //     .then((res) => res.json())
  //     .then((data) => setPopularInstructors(data));
  // }, []);
  return (
    <section className=" container mx-auto pb-10">
      <div className=" overflow-hidden mb-10">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=" lg:text-5xl text-3xl font-bold  dark:text-slate-300"
        >
          Our Popular <span className=" text-primary">Instructors</span>{" "}
        </motion.h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-7">
        {popularInstructors.map((popularInstructor, index) => (
          <InstructorCard
            popularInstructor={popularInstructor}
            key={popularInstructor._id}
            index={index}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
