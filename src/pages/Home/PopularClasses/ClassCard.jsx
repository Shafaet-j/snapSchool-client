import React from "react";

const ClassCard = ({popularClass}) => {
    const {name,image,students} = popularClass
  return (
    <div className="card   bg-base-100 shadow-xl p-0 pb-7">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="flex items-center justify-between p-4">
        <h2 className="card-title">{name}</h2>
        <p className=" font-semibold text-lg">Total Students:{students}</p>
      </div>
    </div>
  );
};

export default ClassCard;
