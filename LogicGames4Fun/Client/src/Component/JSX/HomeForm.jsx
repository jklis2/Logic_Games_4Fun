import React from "react";
import "../CSS/HomeForm.css"

export const HomeForm = () => {
    return (
        <>
            <div class="home-page-content">
                <div class="home-page-logo">
                    <img 
                        src={`${process.env.PUBLIC_URL}/Images/LogicGames4FunLogo.png`} 
                        alt="Logic Games 4Fun Logo">
                    </img>
                </div>
                <div class="home-page-options">
                    <a href="#/" id="home-link">Home</a>
                    <a href="#/" id="dashboard-link">Dashboard</a>
                    <a href="#/" id="login-link">Login</a>
                    <a href="#/" id="aboutUs-link">About us</a>
                    <a href="#/" id="contact-link">Contact</a>
                </div>
                <div class="home-page-info">
                    <h1>Logic Games 4Fun</h1>
                    <p1>
                        We're a startup that wants to show people that browser games don't have to be violent, 
                        addictive or pointless. Logic Games 4Fun is created to encourage people to practice their mind. 
                        Our logic games will be adapted to people of all ages, through different levels of difficulty. 
                    </p1>
                    <a href="#/">
                        <button id="getStarted-button">Get started</button>
                    </a>
                </div>
                <div class="home-page-brain">
                    <img 
                        src={`${process.env.PUBLIC_URL}/Images/Brain.png`} 
                        alt="Brain icon">
                    </img>
                </div>
                <div class="home-page-funfact-1">   
                    <img 
                        src={`${process.env.PUBLIC_URL}/Images/Bulb.png`} 
                        alt="Bulb icon">
                    </img>
                    <p1 class="fun-fact-1">
                        Logical games help in developing mathematical cunning, 
                        teach predicting the effects of one's own decisions and strategic planning.
                    </p1>
                </div>
                <div class="home-page-funfact-2">
                    <img 
                        src={`${process.env.PUBLIC_URL}/Images/Bulb.png`} 
                        alt="Bulb icon">
                    </img>
                    <p1 class="fun-fact-2">
                        Logical games support analysis and synthesis, teach how to read facts, 
                        force you to think and look for the best solutions.
                    </p1>
                </div>
            </div>
        </>
    );
};