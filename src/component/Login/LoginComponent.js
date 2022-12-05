import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import axios from "axios";

const API_URL = "https://kostjaog.ru/api/v1/auth/login";
function LoginComponent() {
  const [status, setStatus] = useState(true);

  const navigate = useNavigate();
  const navigatePlay = () => {
    navigate("/playing");
  };

  const [email, setEmail] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(API_URL, {
        username: email.name,
        password: email.number,
      })
      .then(function (response) {
        if (response.status === 201) {
          setStatus(true);
          navigatePlay();
        }
      })
      .catch(function (error) {
        setStatus(false);
        console.log(error);
      });
  }

  const newemail = { ...email };
  function handle(e) {
    newemail[e.target.id] = e.target.value;
    setEmail(newemail);
  }

  return (
    <div className="login__container">
      <div className="name__game">
        <p>МАНЧКИН</p>
      </div>
      <div className="login__body">
        <div className="login__name">Данные для входа в игру</div>
        <div className="login__status">
          <p>{status ? "" : "*Введены неверные данные"}</p>
        </div>
        <div className="form__body">
          <div className="form__item">
            <form value="reset" onSubmit={(e) => submit(e) & handle(e)}>
              <input
                onChange={(e) => handle(e)}
                type="email"
                placeholder="manchkin@manchkin.com"
                className="login"
                value={email.name}
                id="name"
              ></input>
              <input
                onChange={(e) => handle(e)}
                type="password"
                placeholder="************"
                className="login"
                value={email.number}
                id="number"
              ></input>
              <label>
                <input type="checkbox" required />
                <p>Я согласен с политикой конфидециальности</p>
              </label>
              <button type="submit" id="clearButton" className="btn__form">
                ВХОД
              </button>
            </form>
          </div>
        </div>
        <div className="sigup">
          <a href="/signup">Зарегистрироваться</a>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
