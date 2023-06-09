import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["class"], async () => {
    const res = await fetch(`http://localhost:5000/class/${user.email}`);
    console.log(classes);
    return res.json();
  });

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
                <td>
                  <button className=" btn">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyClass;
