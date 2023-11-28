import styles from "./LoginAndRegisterForm.module.scss";
import "../UI/Button/Button.scss";

const Overlay = ({ setRegisterVisibility }) => {
  return (
    <div className={`auth ${styles["overlay-container"]}`}>
      <div className={styles.overlay}>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
          <h1 className="auth__overlay__welcome-title">Welcome!</h1>
          <p className="auth__overlay__welcome-text mt-4">
            To keep playing please login with your personal info
          </p>
          <button
            className="login-buttons ghost"
            id={styles["signIn"]}
            onClick={() => setRegisterVisibility(false)}
          >
            Sign In
          </button>
        </div>
        <div
          className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
        >
          <h1 className="auth__overlay__welcome-title">Hello!</h1>
          <p className="auth__overlay__welcome-text mt-5">
            Enter your personal details and join to us!
          </p>
          <button
            className="login-buttons ghost"
            id={styles["signUp"]}
            onClick={() => setRegisterVisibility(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
