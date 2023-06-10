import React from "react";
import { Slide } from "react-awesome-reveal";

const ClassCard = ({ popularClass }) => {
 
  const { name, image, price } = popularClass;
  return (
    <Slide direction="up" triggerOnce>
      <div className="card   bg-base-100 shadow-xl p-0 pb-7">
        <figure>
          <img className=" h-80" src={image} alt="Shoes" />
        </figure>
        <div className="flex items-center justify-between p-4">
          <h2 className="card-title">{name}</h2>
          <p className=" font-bold text-2xl">
            <span className=" text-primary">${price}</span>
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ClassCard;
