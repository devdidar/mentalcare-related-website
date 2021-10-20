import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div id="doctors">
      <div>
        <h2 className="text-center text-3xl mt-20">Our Doctors</h2>
      </div>
      <div className="grid grid-cols-3 mx-10 text-center gap-10 doctors">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
