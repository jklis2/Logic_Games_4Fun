import "../UI/Button/Button.scss";

const LoginForm = (props) => {
  return (
    <>
      <form className="d-flex align-items-center justify-content-center flex-column h-100 bg-white">
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
          <input type="text" id="login" className="form__input mt-2 px-3" />

          <label className="form__label  mt-3" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="form__input w-100 mt-2 px-3"
          />
        </div>

        <a className="my-4 text-dark" href="#/">
          Forgot your password?
        </a>

        <button className="button-light" onClick={props.onLogin}>
          Sign in
        </button>

        {props.isMobile && (
          <span onClick={() => props.setRegisterVisibility(true)}>Mobile view!!</span>
        )}
      </form>
    </>
  );
};

export default LoginForm;
