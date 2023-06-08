import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className=" container mx-auto">
      <h1>Our Instructors</h1>
      <div className=" grid grid-cols-3">
        {instructors.map((instructor) => (
          <Instructor instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
