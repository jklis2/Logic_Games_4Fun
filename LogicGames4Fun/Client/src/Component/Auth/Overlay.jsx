import "../UI/Button/Button.scss";
import { useTranslation } from "react-i18next";

const Overlay = ({ setRegisterVisibility }) => {
  const [t] = useTranslation(["translation", "auth"]);
  return (
    <div className="auth overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1 className="auth__overlay__welcome-title">
            {t("auth.welcomeBack")}
          </h1>
          <p className="auth__overlay__welcome-text mt-4">
            {t("auth.welcomeBackText")}
          </p>
          <button
            className="login-buttons ghost"
            onClick={() => setRegisterVisibility(false)}
          >
            {t("auth.signIn")}
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1 className="auth__overlay__welcome-title">{t("auth.hello")}</h1>
          <p className="auth__overlay__welcome-text mt-5">
            {t("auth.joinUsText")}
          </p>
          <button
            className="login-buttons ghost"
            onClick={() => setRegisterVisibility(true)}
          >
            {t("auth.signUp")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
