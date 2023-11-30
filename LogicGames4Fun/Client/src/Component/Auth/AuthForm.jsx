import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import Overlay from "./Overlay";
import LoginForm from "./LoginForm";

export const AuthForm = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [registerVisibility, setRegisterVisibility] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth < 992) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
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
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      ></link>
      <div className="auth d-flex justify-content-center align-items-center flex-column min-vh-100">
        {screenWidth <= 992 ? (
          <div className="auth__container-mobile p-5">
            {!registerVisibility && (
              <LoginForm
                onLogin={onLogin}
                setNickname={setNickname}
                setPassword={setPassword}
                isValid={isValid}
                registerVisibility={registerVisibility}
                setRegisterVisibility={setRegisterVisibility}
                isMobile={isMobile}
              />
            )}

            {registerVisibility && <RegisterForm />}
          </div>
        ) : (
          <div
            className={`auth__container ${
              registerVisibility && "right-panel-active"
            }`}
          >
            <div className="form-container sign-up-container">
              <RegisterForm />
            </div>
            <div className="form-container sign-in-container">
              <LoginForm
                onLogin={onLogin}
                setNickname={setNickname}
                setPassword={setPassword}
                isValid={isValid}
                registerVisibility={registerVisibility}
                setRegisterVisibility={setRegisterVisibility}
                isMobile={isMobile}
              />
            </div>
            <Overlay setRegisterVisibility={setRegisterVisibility} />
          </div>
        )}
      </div>
    </>
  );
};
