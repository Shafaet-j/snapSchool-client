import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import useAuth from "../../../hooks/useAuth";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";

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

  // const [popularClasses, setPopularClasses] = useState([]);
  // useEffect(() => {
  //   fetch("https://snapschool-server-shafaet-j.vercel.app/class")
  //     .then((res) => res.json())
  //     .then((data) => setPopularClasses(data));
  // }, []);



  return (
    <div className=" container mx-auto mb-10 px-5">
      <h1 className=" lg:text-5xl font-bold mb-10">
        Our <span className=" text-primary">Featured</span> Classes
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
        {popularClasses.slice(0, 6).map((popularClass, index) => (
          <ClassCard key={index} popularClass={popularClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
