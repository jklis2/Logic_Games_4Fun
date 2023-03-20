import React from "react";
import styles from "./HomeForm.module.css";

export const HomeForm = () => {
  return (
    <>
      <div className={styles["home-page-content"]}>
        <div className={styles["home-page-logo"]}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/LogicGames4FunLogo.png`}
            alt="Logic Games 4Fun Logo"
          ></img>
        </div>
        <div className={styles["home-page-options"]}>
          <a href="/Home" id={styles["home-link"]}>
            Home
          </a>
          <a href="/Dashboard" id={styles["dashboard-link"]}>
            Dashboard
          </a>
          <a href="/Login" id={styles["login-link"]}>
            Login
          </a>
          <a href="/AboutUs" id={styles["aboutUs-link"]}>
            About us
          </a>
          <a href="/Contact" id={styles["contact-link"]}>
            Contact
          </a>
        </div>
        <div className={styles["home-page-info"]}>
          <h2>Logic Games 4Fun</h2>
          <p>
            We're a startup that wants to show people that browser games don't
            have to be violent, addictive or pointless. Logic Games 4Fun is
            created to encourage people to practice their mind. Our logic games
            will be adapted to people of all ages, through different levels of
            difficulty.
          </p>
          <br></br>
          <a href="/Login">
            <button id={styles["getStarted-button"]}>Get started</button>
          </a>
        </div>
        <div className={styles["home-page-brain"]}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Brain.png`}
            alt="Brain icon"
          ></img>
        </div>
        <div className={styles["home-page-funfact-1"]}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
            alt="Bulb icon"
          ></img>
          <p className={styles["fun-fact-1"]}>
            Logical games help in developing mathematical cunning, teach
            predicting the effects of one's own decisions and strategic
            planning.
          </p>
        </div>
        <div className={styles["home-page-funfact-2"]}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
            alt="Bulb icon"
          ></img>
          <p className={styles["fun-fact-2"]}>
            Logical games support analysis and synthesis, teach how to read
            facts, force you to think and look for the best solutions.
          </p>
        </div>
      </div>
    </>
  );
};
