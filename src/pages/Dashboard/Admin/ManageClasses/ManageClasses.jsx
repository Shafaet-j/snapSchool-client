import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Row from "./Row";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

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

  const handleApproved = (id, status) => {
    // console.log("clicked", id, status);

    axiosSecure
      .put(`/class/status/${id}`, { status: "approved" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully Updated.");
          refetch();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleReject = (id, status) => {
    // console.log("clicked", id, status);

    axiosSecure
      .put(`/class/status/${id}`, { status: "rejected" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully Updated.");
          refetch();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <section className=" container mx-auto px-3">
      <Helmet>
        <title>SnapSchool | Dashboard | ManageClasses</title>
      </Helmet>
      <h2 className=" text-5xl font-bold mb-7">
        Total Classes:{classes.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-xs lg:text-base">
          {/* head */}
          <thead>
            <tr>
              <th>Course Image</th>
              <th>Course name</th>
              <th>Instructor Name</th>
              <th>Email</th>
              <th>Avaiable seat</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass) => (
              <Row
                handleReject={handleReject}
                handleApproved={handleApproved}
                singleClass={singleClass}
                key={singleClass._id}
              ></Row>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageClasses;
