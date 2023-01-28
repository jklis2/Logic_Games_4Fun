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
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form class="register-form" action="#">
            <h1 class="register-title">Create Account</h1>
            <div class="social-container">
              <a href="#/" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#/" class="social">
                <i class="fab fa-google"></i>
              </a>
            </div>
            <span class="register-span">
              or use your email for registration
            </span>
            <div id="register-form-container">
              <div id="left-register">
                <input class="register-input" type="text" placeholder="Name" />
                <input
                  class="register-input"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  class="register-input"
                  type="text"
                  placeholder="Nickname"
                />
                <input
                  class="register-input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div id="right-register">
                <input
                  class="register-input"
                  type="text"
                  placeholder="Gender"
                />
                <input
                  class="register-input"
                  type="date"
                  placeholder="Date of birth"
                />
                <input
                  class="register-input"
                  type="password"
                  placeholder="Password"
                />
                <input
                  class="register-input"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <button class="login-buttons">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          {/* Form for is here  */}

          <form class="register-form" action="#" onSubmit={e => {
            e.preventDefault();
            login();
          }}>
            <h1 class="register-title">Sign in</h1>
            <div class="social-container">
              <a href="#/" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#/" class="social">
                <i class="fab fa-google"></i>
              </a>
            </div>
            <span class="register-span">or use your account</span>
            {/* Login is here */}
            <input
              class="register-input"
              type="text"
              placeholder="Nickname"
              onChange={(e) => setNickname(e.target.value)}
            />
            {/* Passowrd is here */}
            <input
              class="register-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a class="social" href="#/">
              Forgot your password?
            </a>
            <button class="login-buttons">
              <Link to='/dashboard'>Sign In</Link>
            </button>
          </form>

          {/* End of login form */}
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="register-title">Welcome!</h1>
              <p class="welcome-text">
                To keep playing please login with your personal info
              </p>
              <button class="login-buttons ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="register-title">Hello!</h1>
              <p class="welcome-text">
                Enter your personal details and join to us!
              </p>
              <button class="login-buttons ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
