import React, { useEffect } from "react";
import "../CSS/LoginAndRegisterForm.css"

export const LoginAndRegisterForm = () => {
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    })
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'></link>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#/" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#/" class="social"><i class="fab fa-google"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <div id="register-form-container">
                            <div id="left-register">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Surname" />
                                <input type="text" placeholder="Nickname" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div id="right-register">
                                <input type="text" placeholder="Gender" />
                                <input type="date" placeholder="Date of birth" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm password" />
                            </div>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#/" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#/" class="social"><i class="fab fa-google"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="text" placeholder="Nickname" />
                        <input type="password" placeholder="Password" />
                        <a href="#/">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome!</h1>
                            <p>To keep playing please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello!</h1>
                            <p>Enter your personal details and join to us!</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};