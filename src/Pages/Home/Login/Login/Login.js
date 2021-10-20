import React, { useState } from "react";
import { Link,useLocation ,useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation()
  const history = useHistory();
  const redirect_url = location.state?.from || '/'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignInUsingEmail, handleSignInUsingGoogle } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    history.push(redirect_url)
    handleSignInUsingEmail(email, password);
  };
  const handleLoginUsingGoogle = ()=>{
    handleSignInUsingGoogle()
    .then(() => {
      history.push(redirect_url)
    })

  }
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleLogin}>
          <h1 className="m-2 my-10 text-3xl">Please Login</h1>
          <input
            placeholder="Enter Your Email"
            type='email'
            className="block m-2 bg-green-50 px-4 py-2"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter Your Password"
            type='password'
            className="block m-2 bg-green-50 px-4 py-2"
            required
            onBlur={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Login"
            className="m-2 bg-green-400 px-3 py-2 rounded cursor-pointer"
          />
        </form>
      </div>
      <p className="text-center mb-14">
        create an account?
        <Link to="/register">
          <button className=" bg-green-400 ml-2 px-3 py-2 rounded cursor-pointer">
            Register
          </button>
        </Link>
        <i className="fab fa-google google" onClick={handleLoginUsingGoogle}></i>
      </p>
    </>
  );
};

export default Login;
