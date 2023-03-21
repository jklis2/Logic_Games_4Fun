import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./LoginAndRegisterForm.module.css";
import RegisterForm from "./RegisterForm";
import Overlay from "./Overlay";
import LoginForm from "./LoginForm";

export const LoginAndRegisterForm = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false)
  const [registerVisibility, setRegisterVisibility] = useState(false) 

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
      <div id={styles["login-page-content"]}>
        <div className={`${styles.container} ${registerVisibility && styles["right-panel-active"]}`} id={styles.container}>
          <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
            <RegisterForm />
          </div>
          <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
            <LoginForm onLogin = {onLogin} setNickname = {setNickname} setPassword = {setPassword} isValid = {isValid}/>
          </div>
          <Overlay setRegisterVisibility={setRegisterVisibility}/>
        </div>
      </div>
    </>
  );
};
