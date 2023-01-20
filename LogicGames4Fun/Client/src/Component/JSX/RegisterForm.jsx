import React from "react";

export const RegisterForm = () => {
    return (
        <>
            <div id="registerForm">
                <div class="signUp_text">
                    <h1>Sign UP</h1>
                </div>
                <input
                    type="name"
                    placeholder="Name"
                />
                <input
                    type="surname"
                    placeholder="Surname"
                />
                <input
                    type="nickname"
                    placeholder="Nickname"
                />
                <input
                    type="dateOfBirth"
                    placeholder="Date of birth"
                />
                <input
                    type="sex"
                    placeholder="Sex"
                />
                <input
                    type="emailAdress"
                    placeholder="E-mail adress"
                />
                <input
                    type="phoneNumber"
                    placeholder="Phone number"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="reEnterPassword"
                    placeholder="Re-enter password"
                />
                <button class="backToLogin_button">Back to login</button>
                <button class="signUp_button">Sign UP</button>
                <p>If you want, you can register from</p>
                <p>Google account</p>
                <p>Facebook account</p>
            </div>
        </>
    );
};