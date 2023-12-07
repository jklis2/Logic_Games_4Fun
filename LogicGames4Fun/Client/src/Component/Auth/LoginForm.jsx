import "../UI/Button/Button.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchUserData, loginUser } from "../../Redux/auth-slice";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isMobile, setRegisterVisibility }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <h2 className="form__title mb-3">Sign in</h2>

        <div className="auth__social">
          <a href="#/" className="auth__social-icon m-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#/" className="auth__social-icon m-2">
            <i className="fab fa-google"></i>
          </a>
        </div>

        <span>or use your account</span>

        <div className="d-flex flex-column w-75 px-5 mt-3">
          <label className="form__label " htmlFor="login">
            Login
          </label>
          <input
            type="text"
            id="login"
            className="form__input mt-2 px-3"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
        </div>

        <a className="my-4 text-dark" href="#/">
          Forgot your password?
        </a>

        <button className="button-light">Sign in</button>

        {isMobile && (
          <span className="mt-3" onClick={() => setRegisterVisibility(true)}>
            Or Register
          </span>
        )}
      </form>
    </>
  );
};

export default LoginForm;
