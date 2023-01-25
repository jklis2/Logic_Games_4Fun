import React from "react";
import "../CSS/ContactForm.css"

export const ContactForm = () => {
    return (
        <>
            <div class="contact-page-content">
                <div id="contact-logo-text">
                    <div id="conttac-page-logo">
                        <img 
                            src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
                            alt="Logic Games 4Fun Logo">
                        </img>
                    </div>
                    <div id="contact-page-text">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div id="contact-form">
                    <div id="contact-send-message-form" action="">
                        <input class="contact-input" type="text" placeholder="Your Name"></input>
                        <input class="contact-input" type="email" placeholder="Your Email"></input>
                        <textarea class="contact-input" rows="3" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <div class="contact-buttons">
                    <a href="/Home">
                        <button id="backToHomeButton">Back to home</button>
                    </a>
                    <span>
                        <button id="sendMessageButton">Send message</button>
                    </span>  
                </div>
            </div>
        </>
    );
};