import React from "react";
import "../CSS/AboutUsForm.css"

export const AboutUsForm = () => {
    return (
        <>
            <div class="aboutUs-page-content">
                <div id="aboutUs-logo-text">
                    <div id="aboutUs-page-logo">
                        <img src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`} 
                        alt="Logic Games 4Fun Logo">
                        </img>
                    </div>
                    <div id="aboutUs-page-text">
                        <h2>Nice to meet you!</h2>
                    </div>
                </div>
                <div class="aboutUs-description">
                We're Mateusz and Kuba, IT students from Cracow and developers of Logic Games 4Fun. 
                Our journey started when both us were trying to come up with an idea for an engineering thesis.
                Our startup that wants to show people that browser games don't have to be violent, 
                addictive or pointless. Logic Games 4Fun is created to encourage people to practice their mind. 
                Our logic games will be adapted to people of all ages, through different levels of difficulty.
                After a friend connected us, the rest is history. 
                </div>
                <div class="contact-buttons">
                    <a href="/Home">
                        <button id="backTohomeButton">Back to home</button>
                    </a>
                </div>
            </div>
        </>
    );
};