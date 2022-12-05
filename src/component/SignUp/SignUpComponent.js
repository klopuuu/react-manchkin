import React, { useState } from "react";
import "./SignUpComponent.css";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://kostjaog.ru/api/v1/auth/signup";
function SignUpComponent() {
  const [status, setStatus] = useState(true);
  const [error, setError] = useState(true);
  const [email, setEmail] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(API_URL, {
        email: email.name,
        nickName: email.text,
        password: email.number,
      })
      .then(function (response) {
        if (response.status === 201) {
          setStatus(false);
          setError(true);
        }
      })
      .catch(function (error) {
        setStatus(true);
        setError(false);
        console.log(error);
      });
  }

  const newemail = { ...email };
  function handle(e) {
    newemail[e.target.id] = e.target.value;
    setEmail(newemail);
  }
  console.log(status);
  return (
    <div className="signup__container">
      <div className="name__game">
        <p>МАНЧКИН</p>
      </div>
      <div className="signup__body">
        <div className="signup__name">Регистрация</div>
        <div className="login__status">
          <p>{error ? "" : "*Такой пользователь зарегестрирован"}</p>
        </div>
        <div className="form__body">
          <div className="form__item">
            {status ? (
              <form value="reset" onSubmit={(e) => submit(e) & handle(e)}>
                <input
                  onChange={(e) => handle(e)}
                  type="email"
                  placeholder="manchkin@manchkin.com"
                  className="signup"
                  value={email.name}
                  id="name"
                ></input>
                <input
                  onChange={(e) => handle(e)}
                  type="text"
                  placeholder="manchkin_01"
                  className="signup"
                  value={email.text}
                  id="text"
                ></input>
                <input
                  onChange={(e) => handle(e)}
                  type="password"
                  placeholder="************"
                  className="signup"
                  value={email.number}
                  id="number"
                ></input>
                <label className="signup__label">
                  <input type="checkbox" required />
                  <p>Я согласен с политикой конфидециальности</p>
                </label>
                <button id="clearButton" className="btn__form">
                  ВХОД
                </button>
              </form>
            ) : (
              <div className="signup__success">ВЫ УСПЕШНО ЗАРЕГИСТРИРОВАНЫ
              <a href="/" >Вход |{">"} </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
