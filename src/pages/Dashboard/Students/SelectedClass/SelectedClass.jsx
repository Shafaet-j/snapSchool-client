import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: payments = [],
    refetch,
    isLoading,
  } = useQuery(["payments"], async () => {
    const res = await fetch(
      `https://snapschool-server-shafaet-j.vercel.app/payments/${user.email}`
    );
    return res.json();
  });

  return (
    <section>
      <h2 className=" lg:text-5xl font-bold mb-10">
        Total purchased Course: {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>TransactionId</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className=" text-green-700 font-bold">
                  {payment.payment.transactionId}
                </td>
                <td className=" font-bold">{payment.payment.email}</td>
                <td className="font-bold">$ {payment.payment.price}</td>
                <td className=" text-green-700 font-bold">
                  {payment.payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SelectedClass;
