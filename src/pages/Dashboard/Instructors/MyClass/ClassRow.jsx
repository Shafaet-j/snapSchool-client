import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassRow = ({ singleClass, index, setIsOpen }) => {

  return (
    <tr>
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
            }}
            className=" btn"
          >
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ClassRow;
