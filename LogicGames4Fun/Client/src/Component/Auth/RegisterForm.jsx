import "../UI/Button/Button.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/thunks/registerUser";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [t] = useTranslation(["translation", "auth"]);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [path, setPath] = useState(null);

  const handleAvatarClick = (avatar, path) => {
    setSelectedGender(avatar);
    setPath(path);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        registerUser({
          login,
          email,
          password,
          gender: selectedGender,
          path,
        })
      );
      await dispatch(fetchUserData());
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="form register d-flex align-items-center justify-content-center flex-column h-100 bg-white"
      onSubmit={handleFormSubmit}
    >
      <h2 className="form__title text-center mb-3 ">
        {t("auth.createAccount")}
      </h2>

      <div className="auth__social">
        <a href="#/" className="auth__social-icon m-1">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#/" className="auth__social-icon m-1">
          <i className="fab fa-google"></i>
        </a>
      </div>

      <span>{t("auth.registerWith")}</span>

      <div className="d-flex flex-column w-75 px-5 mt-3">
        <label className="form__label" htmlFor="login">
          {t("auth.login")}
        </label>
        <input
          type="text"
          id="login"
          className="form__input mt-2 px-3"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label className="form__label mt-3" htmlFor="email">
          {t("auth.email")}
        </label>
        <input
          type="email"
          id="email"
          className="form__input mt-2 px-3"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label className="form__label  mt-3" htmlFor="password">
          {t("auth.selectAvatar")}
        </label>

        <div className="auth__register d-flex justify-content-center flex-wrap">
          <div
            className={`${
              selectedGender === "male" ? "" : "auth__register__avatar-rejected"
            }`}
          >
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt=""
              onClick={() =>
                handleAvatarClick("male", "/UserAvatars/UserAvatar1.png")
              }
            />
          </div>
          <div
            className={`${
              selectedGender === "female"
                ? ""
                : "auth__register__avatar-rejected"
            }`}
          >
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar2.png`}
              alt=""
              onClick={() => {
                handleAvatarClick("female", "/UserAvatars/UserAvatar2.png");
              }}
            />
          </div>
        </div>
      </div>

      <span className="p-3 text-center">
        {t("auth.termsOfService")}{" "}
        <span className="text-decoration-underline">
          <Link to="/PrivacyPolicy">{t("auth.termsLinkText")}</Link>
        </span>
        .
      </span>
      <button className="mt-3 button-light">{t("auth.signUp")}</button>
    </form>
  );
};

export default RegisterForm;
