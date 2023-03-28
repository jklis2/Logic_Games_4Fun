import styles from "./LoginAndRegisterForm.module.scss";

const Overlay = ({setRegisterVisibility}) => {
  return (
    <div className={styles["overlay-container"]}>
      <div className={styles.overlay}>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
          <h1 className={styles["register-title"]}>Welcome!</h1>
          <p className={styles["welcome-text"]}>
            To keep playing please login with your personal info
          </p>
          <button className={`${styles["login-buttons"]} ${styles["ghost"]}`} id={styles["signIn"] } onClick = {() => setRegisterVisibility(false)}>
            Sign In
          </button>
        </div>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}>
          <h1 className={styles["register-title"]}>Hello!</h1>
          <p className={styles["welcome-text"]}>
            Enter your personal details and join to us!
          </p>
          <button className={`${styles["login-buttons"]} ${styles["ghost"]}`} id={styles["signUp"]} onClick={() => setRegisterVisibility(true) }>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
