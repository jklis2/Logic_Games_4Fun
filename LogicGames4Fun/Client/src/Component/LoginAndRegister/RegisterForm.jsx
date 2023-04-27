import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./LoginAndRegisterForm.module.scss";
import '../UI/Button/Button.scss';

const RegisterForm = (props) => {
    return(
        <form className={styles["register-form"]}>
        <h2>Create Account</h2>
        <div className={styles["social-container"]}>
          <a href="#/" className={styles["social"]}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#/" className={styles["social"]}>
            <i className="fab fa-google"></i>
          </a>
        </div>
        <span className={styles["register-span"]}>
          or use your email for registration
        </span>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: {xs:  "12ch", sm: "15ch", md: "15ch", lg: '18ch',  xl: "25ch"}},
            display: "grid",
            gap: 1,
            gridTemplateColumns: {xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)"}
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Surname"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Nickname"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Gender"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Date of birth"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            label="Confirm password"
            variant="outlined"
            type="password"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
        </Box>
        <span className={styles["privacy-policy-span"]}>By creating an account, you agree to the <span className={styles["privacy-policy"]}><a href={`/PrivacyPolicy`}>Terms of Service</a></span>.</span>
        <button className="button-light">Sign Up</button>
      </form>
    )
}

export default RegisterForm