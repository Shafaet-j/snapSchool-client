import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";

const SingleClass = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [enrollButtonText, setEnrollButtonText] = useState("Enroll");
  const handleEnrolled = (data) => {
    // if (!user) {
    //   navigate("/login", { state: { from: location } });
    //   return;
    // }

    const {
      image,
      available_seat,
      instructor_name,
      instructor_email,
      price,
      _id,
      name,
    } = data;
    const enrollItem = {
      enroll: true,
      image,
      available_seat,
      instructor_email,
      instructor_name,
      price,
      _id,
      name,
      email: user?.email,
    };
    if (user && user.email) {
      fetch("https://snapschool-server-shafaet-j.vercel.app/enroll", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrollItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setEnrollButtonText("Enrolled");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course enrolled.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={` ${
        data.available_seat > 1
          ? "card   bg-base-100 shadow-xl p-0 pb-7 rounded-xl dark:bg-slate-800 dark:text-slate-300"
          : "border-2 border-red-500 rounded-xl dark:text-slate-300"
      }`}
    >
      <figure>
        <img
          className=" rounded-t-xl h-80 w-full object-cover"
          src={data.image}
          alt="Shoes"
        />
      </figure>
      <div className="grid grid-cols-2 text-left p-3 gap-5 justify-items-stretch items-center">
        <h2 className="card-title">{data.name}</h2>
        <div className=" flex items-center justify-between">
          <p className=" font-semibold text-base">
            Available Seat: {data.available_seat}
          </p>
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <p className=" font-semibold text-base">
          Email: {data.instructor_email}
        </p>
        <p className=" font-semibold text-base">Name: {data.instructor_name}</p>
        <p className=" font-bold text-2xl">
          Price: <span className=" text-primary">${data.price}.00</span>
        </p>
        <button
          disabled={
            enrollButtonText === "Enrolled" ||
            data.available_seat == 0 ||
            isAdmin ||
            isInstructor
          }
          onClick={() => handleEnrolled(data)}
          className=" btn btn-primary rounded text-white"
        >
          {enrollButtonText}
        </button>
      </div>
      {/* <Modal closeModal={closeModal} isOpen={isOpen}></Modal> */}
    </div>
  );
};

export default SingleClass;
