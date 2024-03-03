import React from "react";
import "./MainStyles.css";
import logo from "../assests/live-chat_logo.png";
import { Button, TextField } from "@mui/material";

function Login() {
  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-deatils">
        <p className="login-text">Login to Your Account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
         
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}

export default Login;
