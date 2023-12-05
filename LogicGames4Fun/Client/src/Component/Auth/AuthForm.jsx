import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import Overlay from "./Overlay";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isValid] = useState(false);
  const [registerVisibility, setRegisterVisibility] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth < 992) setIsMobile(true);
    else setIsMobile(false);
  };

  const redirect = () => {
    navigate("/profile");
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

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
                isValid={isValid}
                registerVisibility={registerVisibility}
                isMobile={isMobile}
                setRegisterVisibility={setRegisterVisibility}
                redirect={redirect}
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
                isValid={isValid}
                registerVisibility={registerVisibility}
                isMobile={isMobile}
                setRegisterVisibility={setRegisterVisibility}
                redirect={redirect}
              />
            </div>
            <Overlay setRegisterVisibility={setRegisterVisibility} />
          </div>
        )}
      </div>
    </>
  );
};
