import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import UpdateClass from "./UpdateClass";

const MyClass = () => {
  const { user } = useAuth();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["class"], async () => {
    const res = await fetch(
      `https://snapschool-server-shafaet-j.vercel.app/class/${user.email}`
    );

    return res.json();
  });

  const [classId, setClassId] = useState(null);
  const [classInfo, setClassInfo] = useState(classes);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className=" container mx-auto">
      MyClass{classes.length}
      <h2 className=" text-5xl font-bold">My classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>{singleClass.instructor_name}</td>
                <td>{singleClass.instructor_email}</td>
                <td>{singleClass.name}</td>
                <td>$ {singleClass.price}</td>
                <td className=" font-bold">{singleClass.status}</td>
                <td>
                  <Link>
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setClassId(singleClass._id);
                      }}
                      className=" btn"
                    >
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateClass
        classInfo={classInfo}
        classId={classId}
        isOpen={isOpen}
        closeModal={closeModal}
      ></UpdateClass>
    </section>
  );
};

export default MyClass;
