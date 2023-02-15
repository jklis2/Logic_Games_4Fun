import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const LoginForm = (props) => {
  return (
    <form className="register-form" onSubmit={props.onLogin}>
      <h1 className="register-title">Sign in</h1>
      <div className="social-container">
        <a href="#/" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#/" className="social">
          <i className="fab fa-google"></i>
        </a>
      </div>
      <span className="register-span">or use your account</span>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nickname"
          variant="outlined"
          type="text"
          onChange={(e) => props.setNickname(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </Box>
      <a className="social" href="#/">
        Forgot your password?
      </a>
      <button className="login-buttons"> Sign in </button>
    </form>
  );
};

export default LoginForm;
