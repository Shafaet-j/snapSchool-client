import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const Row = ({ singleClass, handleApproved, handleReject }) => {
  const [disabled, setDisabled] = useState(false);
  const {
    available_seat,
    instructor_email,
    instructor_name,
    name,
    price,
    status,
  } = singleClass;
  return (
    <tr>
      <th>{name}</th>
      <th>{instructor_name}</th>
      <th>{instructor_email}</th>
      <td>{available_seat}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td className=" flex gap-4 items-center">
        <button
          className=" btn"
          disabled={status === "approved" && disabled}
          onClick={() => {
            setDisabled(true);
            handleApproved(singleClass._id, singleClass.status);
          }}
        >
          <FcApproval size={30} />
        </button>
        <button
          className="btn"
          disabled={status === "rejected" && disabled}
          onClick={() => {
            setDisabled(true);
            handleReject(singleClass._id, singleClass.status);
          }}
        >
          <FaTimes color="red" size={30} />
        </button>
        <button className=" btn btn-primary">send feedback</button>
      </td>
    </tr>
  );
};

export default Row;
