import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { title, id, img, description } = props.service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2 className="font-semibold">Name: {title}</h2>
      <h2>{description.slice(0, 200)}</h2>
      <Link to={`/services/${id}`}>
      <button className="bg-green-400 px-4 py-2 mt-4">Details</button>
      </Link>
    </div>
  );
};

export default Service;
