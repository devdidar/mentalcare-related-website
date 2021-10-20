import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const history = useHistory();
  const handleGoToHome = () => {
    history.push("/");
  };
  return (
    <div className="bg-green-50 px-10 py-5 ">
      <div className="flex justify-between items-center ">
        <div onClick={handleGoToHome} className="cursor-pointer">
          <h3 className="text-3xl logo-title">
            Mental <span className="text-green-600 ">Talks</span>
          </h3>
        </div>
        <div className="flex justify-between flex-col	">
          <h2 className="font-medium mr-10">Important Links</h2>
          <nav className="flex flex-col	">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/contact-us">Contact us</Link>
          </nav>
        </div>
      </div>
      <p className="text-center">© 2021 All rights reserved.</p>
    </div>
  );
};

export default Footer;
