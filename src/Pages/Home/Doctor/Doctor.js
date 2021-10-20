import React from "react";

const Doctor = ({ doctor }) => {
  const { name, img } = doctor;
  return (
    <div>
      <img src={img} alt="" />
      <h2 className="my-3">
        Name: <span className="font-medium">{name}</span>
      </h2>
      <i className="fab fa-facebook text-3xl cursor-pointer"></i>
      <i className="fab fa-instagram-square text-3xl ml-3 cursor-pointer"></i>
    </div>
  );
};

export default Doctor;
