import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data));
  }, []);
  return (
    <section className=" container mx-auto">
      <h1 className=" lg:text-5xl font-bold mb-10">Popular Instructors</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
        {popularInstructors.map((popularInstructor) => (
          <InstructorCard
            popularInstructor={popularInstructor}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
