import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { PuffLoader } from "react-spinners";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const [disabled, setDisabled] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your User has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisabled([...disabled, user._id]);
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${user.name} is now an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisabled([...disabled, user._id]);
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${user.name} is now an Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  if (isLoading) {
    return (
      <div className="  absolute top-[30%] right-[50%]">
        <PuffLoader></PuffLoader>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h2>Total users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" space-y-3">
                  <button
                    disabled={disabled.includes(user._id)}
                    onClick={() => handleMakeAdmin(user)}
                    className=" text-left btn btn-neutral block"
                  >
                    Admin
                  </button>
                  <button
                    disabled={disabled.includes(user._id)}
                    onClick={() => handleMakeInstructor(user)}
                    className=" text-left btn btn-neutral block"
                  >
                    Instructor
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>
                    <FaTrash size={25} />
                  </button>
                </td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
