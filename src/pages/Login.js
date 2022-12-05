import React from "react";
import LoginComponent from "../component/Login/LoginComponent";
import "../component/Login/LoginComponent.css";
import munchkin from "../assets/image/munchkin.jpg";

function Login() {
  return (
    <main>
      <center>
        <img src={munchkin} className="body__image"/>
      </center>
      <LoginComponent />
    </main>
  );
}

export default Login;
