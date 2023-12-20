import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import useAuth from "../../../hooks/useAuth";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const {
    data: popularClasses = [],
    refetch,
    isLoading,
  } = useQuery(["class"], async () => {
    const res = await fetch(
      "https://snapschool-server-shafaet-j.vercel.app/class"
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

  return (
    <div className=" container mx-auto mb-10 px-5">
      <div className=" overflow-hidden mb-16">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=" lg:text-5xl text-3xl font-bold  dark:text-slate-300"
        >
          Our <span className=" text-primary">Popular</span> Courses
        </motion.h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
        {popularClasses.slice(0, 6)?.map((popularClass, index) => (
          <ClassCard
            key={popularClass._id}
            popularClass={popularClass}
            index={index}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
