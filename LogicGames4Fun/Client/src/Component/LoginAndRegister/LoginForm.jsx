import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./LoginAndRegisterForm.module.scss";

const LoginForm = (props) => {
  return (
    <form className={styles["register-form"]} onSubmit={props.onLogin}>
      <h2 className={styles["register-title"]}>Sign in</h2>
      <div className={styles["social-container"]}>
        <a href="#/" className={styles["social"]}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#/" className={styles["social"]}>
          <i className="fab fa-google"></i>
        </a>
      </div>
      <span className={styles["register-span"]}>or use your account</span>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: 'flex',
          flexDirection: 'column'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nickname"
          variant="outlined"
          type="text"
          onChange={(e) => props.setNickname(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </Box>
      <a className={styles["social"]} href="#/">
        Forgot your password?
      </a>
      <button className={styles["login-buttons"]}> Sign in </button>
    </form>
  );
};

export default LoginForm;
