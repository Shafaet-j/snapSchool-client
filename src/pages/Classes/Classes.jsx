import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleClass from "./SingleClass";
import { PuffLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const {
    data: classes = [],
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
    <section className=" container mx-auto my-16">
      <Helmet>
        <title>SnapSchool | Classes</title>
      </Helmet>
      <h2 className=" lg:text-5xl text-3xl font-bold">
        All <span className=" text-primary">Photography</span> Classes
      </h2>

      <div className=" grid lg:grid-cols-3 gap-5 my-10 mx-4">
        {classes.map((data) => (
          <SingleClass key={data._id} data={data}></SingleClass>
        ))}
      </div>
    </section>
  );
};

export default Classes;
