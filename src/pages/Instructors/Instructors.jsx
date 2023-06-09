import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";
import ins from "../../assets/instructor.jpg";
import { FaArrowRight } from "react-icons/fa";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <>
      <section
        className=" h-[35vh] relative "
        style={{
          backgroundImage: `url(${ins})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" container mx-auto">
          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-80 text-left">
            <h2 className=" text-4xl font-bold text-white mb-3">
              Our Instructors
            </h2>
            <p className=" text-white font-bold flex items-center gap-3">
              Home
              <span>
                <FaArrowRight />
              </span>
              Instructor
            </p>
          </div>
        </div>
      </section>
      <section className=" container mx-auto">
        {/* <h1 className=" lg:text-5xl font-bold">Our Instructors</h1> */}
        <div className=" grid grid-cols-3">
          {instructors.map((instructor) => (
            <Instructor instructor={instructor}></Instructor>
          ))}
        </div>
      </section>
    </>
  );
};

export default Instructors;
