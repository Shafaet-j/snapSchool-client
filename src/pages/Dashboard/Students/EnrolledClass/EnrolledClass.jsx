import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import Modal from "../../../../Components/Modal";

const EnrolledClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    data: enrollItems = [],
    refetch,
    isLoading,
  } = useQuery(["enroll"], async () => {
    const res = await fetch("http://localhost:5000/enroll");
    return res.json();
  });
  console.log(enrollItems);

  return (
    <section className=" container mx-auto my-10">
      <h2 className=" lg:text-5xl font-bold my-10">All enrolled Classes</h2>
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
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {enrollItems.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.instructor_name}</td>
                <td>{item.instructor_email}</td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td className=" flex items-center gap-5">
                  <button className=" btn">Update</button>
                  <button className=" btn">
                    <FaTrash size={25} />{" "}
                  </button>
                </td>
                <td>
                  <button onClick={() => setIsOpen(true)} className=" btn">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}></Modal>
    </section>
  );
};

export default EnrolledClass;
