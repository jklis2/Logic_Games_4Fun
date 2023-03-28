import styles from "./LoginAndRegisterForm.module.scss";
import '../UI/Button/Button.scss'

const Overlay = ({setRegisterVisibility}) => {
  return (
    <div className={styles["overlay-container"]}>
      <div className={styles.overlay}>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
          <h1>Welcome!</h1>
          <p className={styles["welcome-text"]}>
            To keep playing please login with your personal info
          </p>
          <button className="login-buttons ghost" id={styles["signIn"] } onClick = {() => setRegisterVisibility(false)}>
            Sign In
          </button>
        </div>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}>
          <h1>Hello!</h1>
          <p className={styles["welcome-text"]}>
            Enter your personal details and join to us!
          </p>
          <button className="login-buttons ghost" id={styles["signUp"]} onClick={() => setRegisterVisibility(true) }>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
