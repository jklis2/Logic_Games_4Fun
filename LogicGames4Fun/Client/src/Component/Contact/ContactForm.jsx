import React from "react";
import styles from "./ContactForm.module.scss";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  return (
    <>
      <div className={styles['contact-form-container']}>
        <div className={`${styles["contact-page-content"]} bg-light w-75`}>
          <div className={styles["contact-logo-text"]}>
            <div className="d-flex flex-center justify-content-center">
              <img
                src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
                alt="Logic Games 4Fun Logo"
              ></img>
            </div>
            <div>
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
            <Link to="/Home">
              <button className="button-light">Back to home</button>
            </Link>
            <span>
              <button className="button-light">Send message</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
