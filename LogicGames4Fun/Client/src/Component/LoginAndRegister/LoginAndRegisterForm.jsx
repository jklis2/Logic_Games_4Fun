import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./LoginAndRegisterForm.css";
import RegisterForm from "./RegisterForm";
import Overlay from "./Overlay";
import LoginForm from "./LoginForm";

export const LoginAndRegisterForm = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false)

  const login = function () {
    axios
      .post("//localhost:3001/login", {
        login: nickname,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setIsValid(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  const onLogin = (e) => {
    e.preventDefault();
    login();
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      ></link>
      <div id="login-page-content">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <RegisterForm />
          </div>
          <div className="form-container sign-in-container">
            <LoginForm onLogin = {onLogin} setNickname = {setNickname} setPassword = {setPassword} isValid = {isValid}/>
          </div>
          <Overlay />
        </div>
      </div>
    </>
  );
};
