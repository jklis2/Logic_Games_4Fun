import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LoginAndRegisterForm.css";

const RegisterForm = (props) => {
    return(
        <form className="register-form">
        <h1 className="register-title">Create Account</h1>
        <div className="social-container">
          <a href="#/" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#/" className="social">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <span className="register-span">
          or use your email for registration
        </span>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "17ch" },
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Nickname"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Date of birth"
            variant="outlined"
            type="text"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
          <TextField
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            type="password"
            inputProps={{style: {fontSize: 13}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          />
        </Box>
        <span className="privacy-policy-span">By creating an account, you agree to the <span className="privacy-policy"><a href={`/PrivacyPolicy`}>Terms of Service</a></span>.</span>
        <button className="login-buttons">Sign Up</button>
      </form>
    )
}

export default RegisterForm