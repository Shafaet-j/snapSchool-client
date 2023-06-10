import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Row from "./Row";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  return (
    <section className=" container mx-auto">
     <h2 className=" text-5xl font-bold mb-7">Total Classes:{classes.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Course name</th>
              <th>Instructor Name</th>
              <th>Email</th>
              <th>Avaiable seat</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass) => (
              <Row singleClass={singleClass} key={singleClass._id}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageClasses;
