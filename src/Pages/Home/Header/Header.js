import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const [barIcon, setBarIcon] = useState(false);
  const { user, handleLogOut } = useAuth();
  const history = useHistory();
  const handleGoToHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="flex justify-between mx-auto px-5 py-2 bg-green-50 header">
        <div onClick={handleGoToHome} className="cursor-pointer">
          <h3 className="text-3xl logo-title">
            Mental <span className="text-green-600 ">Talks</span>
          </h3>
        </div>
        <nav className={barIcon ? "mobile-menu" : "mr-32 text-xl"}>
          <Link to="/home" className="m-2">
            Home
          </Link>
          <Link to="/services" className="m-2">
            Services
          </Link>
          <Link to="/doctors" className="m-2">
            Doctors
          </Link>
          <Link to="/contact-us" className="m-2">
            Contact us
          </Link>
          {user?.email ? (
            <>
              <span>{user?.displayName}</span>
              <button
                onClick={handleLogOut}
                className="bg-green-400 ml-2 px-3 py-2 rounded"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  style={{ borderRadius: "5px" }}
                  className=" bg-green-400 px-3 py-2 login"
                >
                  Login
                </button>
              </Link>
              <Link to="/register" className="ml-3">
                <button
                  style={{ borderRadius: "5px", border: "1px solid #34D399" }}
                  className="px-3 py-2 register"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </nav>
        <i
          className="fas fa-bars hidden bar-icon"
          onClick={() => setBarIcon(!barIcon)}
        ></i>
      </div>
    </>
  );
};

export default Header;
