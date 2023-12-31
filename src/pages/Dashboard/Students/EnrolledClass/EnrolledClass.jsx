import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import Modal from "../../../../Components/Modal";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const EnrolledClass = () => {
  const { user } = useAuth();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedCourse,setSelectedCourse] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    data: enrollItems = [],
    refetch,
    isLoading,
  } = useQuery(["enroll"], async () => {
    const res = await fetch(
      `https://snapschool-server-shafaet-j.vercel.app/enroll/${user.email}`
    );
    return res.json();
  });

  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://snapschool-server-shafaet-j.vercel.app/enroll/${email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
              <>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.instructor_name}</td>
                  <td>{item.instructor_email}</td>
                  <td>{item.name}</td>
                  <td className=" font-bold text-lg">$ {item.price}</td>
                  <td className=" flex items-center gap-5">
                    <button
                      onClick={() => handleDelete(item.email)}
                      className=" btn"
                    >
                      <FaTrash size={25} />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        
                        setSelectedCourse(item)
                        setSelectedPrice(item.price);
                        setIsOpen(true);
                      }}
                      className=" btn"
                    >
                      pay
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        price={selectedPrice}
        course={selectedCourse}
        closeModal={closeModal}
        isOpen={isOpen}
      ></Modal>
    </section>
  );
};

export default EnrolledClass;
