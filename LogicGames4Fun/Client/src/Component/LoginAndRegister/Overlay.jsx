const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1 className="register-title">Welcome!</h1>
          <p className="welcome-text">
            To keep playing please login with your personal info
          </p>
          <button className="login-buttons ghost" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1 className="register-title">Hello!</h1>
          <p className="welcome-text">
            Enter your personal details and join to us!
          </p>
          <button className="login-buttons ghost" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
