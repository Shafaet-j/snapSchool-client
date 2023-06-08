import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleClass from "./SingleClass";
import { PuffLoader } from "react-spinners";

const Classes = () => {
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["class"], async () => {
    const res = await fetch("http://localhost:5000/class");
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
    <section className=" container mx-auto my-16">
      <h2 className=" lg:text-5xl text-2xl font-bold">All Photography Classes</h2>

      <div className=" grid lg:grid-cols-3 gap-5 my-10 mx-4">
        {classes.map((data) => (
          <SingleClass data={data}></SingleClass>
        ))}
      </div>
    </section>
  );
};

export default Classes;
