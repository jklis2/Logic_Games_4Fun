import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../CSS/LoginAndRegisterForm.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const LoginAndRegisterForm = () => {
  // Unused local variable.
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [testData, setTestData] = useState([]);

  const login = function () {
    axios
      .post("//localhost:3001/login", {
        login: nickname,
        password: password,
      })
      .then((res) => console.log(res.data))
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
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      ></link>
      <div id="login-page-content">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form className="register-form" action="#">
              <h1 className="register-title">Create Account</h1>
              <div className="social-container">
                <a href="#/" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#/" className="social">
                  <i className="fab fa-google"></i>
                </a>
              </div>
              <span className="register-span">
                or use your email for registration
              </span>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 0.5, width: "15ch" },
                  display: "grid",
                  gap: 1,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Surname"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Nickname"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
                <TextField
                  id="outlined-basic"
                  label="Gender"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Date of birth"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                <TextField
                  id="outlined-basic"
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                />
              </Box>
              <button className="login-buttons">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            {/* Form for is here  */}

            <form
              className="register-form"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
              <h1 className="register-title">Sign in</h1>
              <div className="social-container">
                <a href="#/" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#/" className="social">
                  <i className="fab fa-google"></i>
                </a>
              </div>
              <span className="register-span">or use your account</span>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {/* Login is here */}
                <TextField
                  id="outlined-basic"
                  label="Nickname"
                  variant="outlined"
                  type="text"
                  onChange={(e) => setNickname(e.target.value)}
                />
                {/* Passowrd is here */}
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <a className="social" href="#/">
                Forgot your password?
              </a>
              <button className="login-buttons">
                <Link to="/dashboard">Sign In</Link>
              </button>
            </form>

            {/* End of login form */}
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="register-title">Welcome!</h1>
                <p className="welcome-text">
                  To keep playing please login with your personal info
                </p>
                <button className="login-buttons ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="register-title">Hello!</h1>
                <p className="welcome-text">
                  Enter your personal details and join to us!
                </p>
                <button className="login-buttons ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
