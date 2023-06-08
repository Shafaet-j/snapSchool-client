import { useQuery } from "@tanstack/react-query";
import React from "react";

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
    return <h3>loading...</h3>;
  }

  return (
    <section className=" container mx-auto my-16">
      <h2 className=" text-5xl font-bold">All Photography Classes</h2>
      <h3>{classes.length}</h3>
    </section>
  );
};

export default Classes;
