import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-green-50 px-10 py-5 ">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-3xl logo-title">
            Mental <span className="text-green-600 ">Talks</span>
          </h3>
        </div>
        <div className="flex justify-between flex-col	">
          <h2 className="font-medium mr-10">Important Links</h2>
          <nav className="flex flex-col	">
            <HashLink smooth to="/home">
              Home
            </HashLink>
            <HashLink smooth to="/home#services">
              Services
            </HashLink>
            <HashLink smooth to="/home#doctors">
              Doctors
            </HashLink>
            <HashLink smooth to="/home#contact-us">
              Contact us
            </HashLink>
          </nav>
        </div>
      </div>
      <p className="text-center">© 2021 All rights reserved.</p>
    </div>
  );
};

export default Footer;
