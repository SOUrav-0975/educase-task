import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <div className="routes">
        <div>
          <Link to="#" style={{ color: "deeppink" }}>
            Login
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            Signup
          </Link>
        </div>
      </div>
      <form className="container">
        <input type="email" className="inp" placeholder="Enter Email..." />
        <input
          type="password"
          className="inp"
          placeholder="Enter Password..."
        />
        <input type="submit" value="Login" className="btn" />
      </form>
      <Link to="#" style={{ color: "deeppink", marginLeft: "55%" }}>
        Forget Password ?
      </Link>
      <p>or login with</p>
      <div className="logo">
        <div>
          {" "}
          <FcGoogle />
        </div>

        <div>
          <FaFacebook />
        </div>
        <div>
          <FaTwitter />
        </div>
      </div>
      <div>
        <p>
          Do you have an account ?{" "}
          <Link to="#" style={{ color: "deeppink" }}>
            create an account!
          </Link>
        </p>
        <p>
          By Signing Up you are agree with our
          <Link to="#" style={{ color: "deeppink" }}>
            term and condition!
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;