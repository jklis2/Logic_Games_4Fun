import "../UI/Button/Button.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { loginUser } from "../../Redux/thunks/loginUser";
import { useTranslation } from "react-i18next";

const LoginForm = ({ isMobile, setRegisterVisibility }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation(["translation", "auth"]);

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ login, password }));
      await dispatch(fetchUserData());
      navigate("/profile");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <form
        className="d-flex align-items-center justify-content-center flex-column h-100 bg-white"
        onSubmit={submitLogin}
      >
        <h2 className="form__title mb-3">{t("auth.signIn")}</h2>

        <div className="auth__social">
          <a href="#/" className="auth__social-icon m-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#/" className="auth__social-icon m-2">
            <i className="fab fa-google"></i>
          </a>
        </div>

        <span>{t("auth.signInWith")}</span>

        <div className="d-flex flex-column w-75 px-5 mt-3">
          <label className="form__label " htmlFor="login">
            {t("auth.login")}
          </label>
          <input
            type="text"
            id="login"
            className="form__input mt-2 px-3"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <label className="form__label  mt-3" htmlFor="password">
            {t("auth.password")}
          </label>
          <input
            type="password"
            id="password"
            className="form__input w-100 mt-2 px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a className="my-4 text-dark" href="#/">
          {t("auth.forgotPassword")}
        </a>

        <button className="button-light">{t("auth.signIn")}</button>

        {isMobile && (
          <span className="mt-3" onClick={() => setRegisterVisibility(true)}>
            {t("auth.orRegister")}
          </span>
        )}
      </form>
    </>
  );
};

export default LoginForm;
