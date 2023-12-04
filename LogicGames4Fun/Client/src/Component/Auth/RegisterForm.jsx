import "../UI/Button/Button.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Redux/auth-slice";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authActions.register({
        login,
        email,
        password,
        gender: "male",
      })
    );
  };

  return (
    <form
      className="form register d-flex align-items-center justify-content-center flex-column h-100 bg-white"
      onSubmit={handleFormSubmit}
    >
      <h2 className="form__title text-center mb-3 ">Create Account</h2>

      <div className="auth__social">
        <a href="#/" className="auth__social-icon m-1">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#/" className="auth__social-icon m-1">
          <i className="fab fa-google"></i>
        </a>
      </div>

      <span>or use your email for registration</span>

      <div className="d-flex flex-column w-75 px-5 mt-3">
        <label className="form__label" htmlFor="login">
          Login
        </label>
        <input
          type="text"
          id="login"
          className="form__input mt-2 px-3"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label className="form__label mt-3" htmlFor="email">
          Email
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
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form__input w-100 mt-2 px-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="form__label  mt-3" htmlFor="password">
          Select an avatar
        </label>

        <div className="auth__register d-flex justify-content-center flex-wrap">
          <div
            className={`${
              selectedAvatar === "avatar1"
                ? ""
                : "auth__register__avatar-rejected"
            }`}
          >
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt=""
              onClick={() => handleAvatarClick("avatar1")}
            />
          </div>
          <div
            className={`${
              selectedAvatar === "avatar2"
                ? ""
                : "auth__register__avatar-rejected"
            }`}
          >
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar2.png`}
              alt=""
              onClick={() => handleAvatarClick("avatar2")}
            />
          </div>
        </div>
      </div>

      <span className="p-3 text-center">
        By creating an account, you agree to the{" "}
        <span className="text-decoration-underline">
          <a href={`/PrivacyPolicy`}>Terms of Service</a>
        </span>
        .
      </span>
      <button className="mt-3 button-light">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
