import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  return (
    <div className=" container mx-auto mb-10 px-5">
      <h1 className=" lg:text-5xl font-bold mb-10">Popular Classes</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
        {popularClasses.map((popularClass) => (
          <ClassCard popularClass={popularClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
