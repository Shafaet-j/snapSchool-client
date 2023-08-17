import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

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
      <h1 className=" lg:text-5xl text-3xl font-bold mb-10 dark:text-slate-300">
        Our Popular <span className=" text-primary">Instructors</span>{" "}
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-7">
        {popularInstructors.map((popularInstructor) => (
          <InstructorCard
            popularInstructor={popularInstructor}
            key={popularInstructor._id}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
