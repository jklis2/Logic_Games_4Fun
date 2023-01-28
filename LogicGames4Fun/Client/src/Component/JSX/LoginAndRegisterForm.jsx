import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import "../CSS/LoginAndRegisterForm.css";
import { Link } from "react-router-dom";

export const LoginAndRegisterForm = () => {
  // Unused local variable.
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [testData, setTestData] = useState([])

  const login = function() {
    axios.post('//localhost:3001/login', {
      login: nickname,
      password: password
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  } 

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
            <div id="register-form-container">
              <div id="left-register">
                <input className="register-input" type="text" placeholder="Name" />
                <input
                  className="register-input"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  className="register-input"
                  type="text"
                  placeholder="Nickname"
                />
                <input
                  className="register-input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div id="right-register">
                <input
                  className="register-input"
                  type="text"
                  placeholder="Gender"
                />
                <input
                  className="register-input"
                  type="date"
                  placeholder="Date of birth"
                />
                <input
                  className="register-input"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="register-input"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <button className="login-buttons">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          {/* Form for is here  */}

          <form className="register-form" action="#" onSubmit={e => {
            e.preventDefault();
            login();
          }}>
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
            {/* Login is here */}
            <input
              className="register-input"
              type="text"
              placeholder="Nickname"
              onChange={(e) => setNickname(e.target.value)}
            />
            {/* Passowrd is here */}
            <input
              className="register-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="social" href="#/">
              Forgot your password?
            </a>
            <button className="login-buttons">
              <Link to='/dashboard'>Sign In</Link>
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
    </>
  );
};
