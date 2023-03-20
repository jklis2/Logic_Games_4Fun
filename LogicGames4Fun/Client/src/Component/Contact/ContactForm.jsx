import React from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <>
      <div className={styles["contact-page-content"]}>
        <div id={styles["contact-logo-text"]}>
          <div id={styles["conttac-page-logo"]}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
          </div>
          <div id={styles["contact-page-text"]}>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div id={styles["contact-form"]}>
          <div id={styles["contact-send-message-form"]} action="">
            <input
              className={styles["contact-input"]}
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className={styles["contact-input"]}
              type="email"
              placeholder="Your Email"
            ></input>
            <textarea
              className={styles["contact-input"]}
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <div className={styles["contact-buttons"]}>
          <a href="/Home">
            <button id={styles["backToHomeButton"]}>Back to home</button>
          </a>
          <span>
            <button id={styles["sendMessageButton"]}>Send message</button>
          </span>
        </div>
      </div>
    </>
  );
};
