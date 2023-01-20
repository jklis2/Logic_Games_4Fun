import React from "react";

export const LoginForm = () => {
    return (
      <>
        <div id="loginForm">
            <div class="signInForm_container">
                <div class="signIn_text">
                  <h1>Sign IN</h1>
                </div>
                <input
                  type="username"
                  placeholder="Username"
                />
                <input
                  type="password"
                  placeholder="Password"
                />
                <p>Forgot your password?</p>
                <button class="signIn_button">Login</button>
            </div>
            <div class="signUpForm_container">
                <div class="signUp_text">
                  <h1>Sign UP</h1>
                </div>
                <p>Sign up here if you don't have account.</p>
                <button class="signUp_button">Sign Up</button>
            </div>
        </div>
      </>
  );
};