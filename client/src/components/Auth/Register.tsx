import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const registerHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      setPassword("");
      setConfirmedPassword("");
      setTimeout(() => {
        setError("");
      }, 8000);
      return setError("Passwords do not match");
    }
    try {
      const { data } = await axios.post("http://localhost:3333/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("authToken", data.token);
      console.log(data);

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error: unknown) {
      console.log(error);
      setError("Invalid credentials");

      setTimeout(() => {
        setError("");
      }, 6000);
    }
  };
  return (
    <Stack direction="column" alignItems="center">
      <Typography p={3} variant="h2">
        Registration
      </Typography>
      <Typography p={3} variant="h6">
        Do you have an accout already? <Link to="/login">Login here</Link>
      </Typography>
      {error && (
        <Typography p={3} variant="h6">
          Invalid credentials!
        </Typography>
      )}
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="column" sx={{ justifyContent: "center" }}>
          <TextField
            id="outlined-required"
            label="Enter Username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Enter Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Enter Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            value={confirmedPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmedPassword(e.target.value)}
          />
          <Button onClick={registerHandler} variant="contained">
            Register
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Register;
