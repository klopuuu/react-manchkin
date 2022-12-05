import React from "react";
import SignUpComponent from "../component/SignUp/SignUpComponent";
import munchkin from "../assets/image/munchkin.jpg";

function LoginUP() {
  return (
    <main>
      <img src={munchkin} className="body__image"/> 
      <SignUpComponent />
    </main>
  );
}

export default LoginUP;
