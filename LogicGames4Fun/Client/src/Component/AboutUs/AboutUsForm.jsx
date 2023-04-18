import React from "react";
import styles from "./AboutUsForm.module.scss";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";

export const AboutUsForm = () => {
  return (
    <div className={styles["aboutUs-container"]}>
      <div className={`${styles["aboutUs-box"]} bg-light w-75`}>
        <div className={styles["aboutUs-logo-text"]}>
          <div id={styles["aboutUs-page-logo"]}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
          </div>
          <div id={styles["aboutUs-page-text"]}>
            <h2>Nice to meet you!</h2>
          </div>
        </div>
        <div className={styles["aboutUs-description"]}>
          We're Mateusz and Kuba, IT students from Cracow and developers of
          Logic Games 4Fun. Our journey started when both us were trying to come
          up with an idea for an engineering thesis. Our startup that wants to
          show people that browser games don't have to be violent, addictive or
          pointless. Logic Games 4Fun is created to encourage people to practice
          their mind. Our logic games will be adapted to people of all ages,
          through different levels of difficulty. After a friend connected us,
          the rest is history.
        </div>
        <div className={styles["contact-buttons"]}>
          <Link to="/Home">
            <button className="m-3 button-light">Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
