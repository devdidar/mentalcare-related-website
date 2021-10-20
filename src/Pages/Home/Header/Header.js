import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const [barIcon, setBarIcon] = useState(false);
  const { user, handleLogOut } = useAuth();
  console.log(user);
  return (
    <>
      <div className="flex justify-between mx-auto px-5 py-2 bg-green-50 header">
        <div>
          <h3 className="text-3xl logo-title">
            Mental <span className="text-green-600 ">Talks</span>
          </h3>
        </div>
        <nav className={barIcon ? "mobile-menu" : "mr-32 text-xl"}>
          <HashLink smooth to="/home" className="m-2">
            Home
          </HashLink>
          <HashLink smooth to="/home#services" className="m-2">
            Services
          </HashLink>
          <HashLink smooth to="/home#doctors" className="m-2">
            Doctors
          </HashLink>
          <HashLink smooth to="/home#contact-us" className="m-2">
            Contact us
          </HashLink>
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
              <HashLink to="/login">
                <button
                  style={{ borderRadius: "5px" }}
                  className=" bg-green-400 px-3 py-2"
                >
                  Login
                </button>
              </HashLink>
              <HashLink to="/register" className="ml-3">
                <button
                  style={{ borderRadius: "5px", border: "1px solid #34D399" }}
                  className="px-3 py-2"
                >
                  Register
                </button>
              </HashLink>
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
