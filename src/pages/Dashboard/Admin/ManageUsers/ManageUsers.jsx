import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = (user) => {};
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          alert("made admin");
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
          alert("made admin");
        }
      });
  };

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
                    onClick={() => handleMakeAdmin(user)}
                    className=" text-left btn btn-neutral block"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className=" text-left btn btn-neutral block"
                  >
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user)}>
                    <FaTrash size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
