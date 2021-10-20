import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleCreateUserInUsingEmail, handleSignInUsingGoogle } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    handleCreateUserInUsingEmail(name, email, password);
  };
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleRegister}>
          <h1 className="m-2 my-10 text-3xl">Please Register</h1>
          <input
            placeholder="Enter Your Name"
            type="text"
            className="block m-2 bg-green-50 px-4 py-2"
            required
            onBlur={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter Your Email"
            type="email"
            className="block m-2 bg-green-50 px-4 py-2"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            className="block m-2 bg-green-50 px-4 py-2"
            required
            onBlur={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Register"
            className="m-2 bg-green-400 px-3 py-2 rounded cursor-pointer"
          />
        </form>
      </div>
      <p className="text-center mb-4">
        Already have an account?
        <Link to="/login">
          <button className=" bg-green-400 ml-2 px-3 py-2 rounded cursor-pointer">
            Login
          </button>
        </Link>
        <i
          className="fab fa-google google"
          onClick={handleSignInUsingGoogle}
        ></i>
      </p>
    </>
  );
};

export default Register;
