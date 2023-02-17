import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../accsets/img/logo1.png";
import logo2 from "../../accsets/img/logo2.png";
import { loginThunk } from "../store/funtion";
import "./style.css";

const SingIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valuse, setValuse] = React.useState({
    username: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(
        loginThunk({
          username: valuse.username,
        })
      );
      localStorage.setItem("status login", true);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="icon">
          <img src={logo1} alt="" style={{ paddingRight: "9px" }} />
          <img src={logo2} alt="" />
        </div>

        <div className="loginContent">
          <h1 className="loginTitle">Sign In</h1>
          <p className="loginUserName">Username</p>
          <input
            type="text"
            width="413px"
            onChange={(e) => setValuse({ ...valuse, username: e.target.value })}
          />
          <div className="loginButton">
            <button className="loginButtonSingIn" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
