import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { blue } from "@mui/material/colors";
import { AxiosResponseUser } from "../types/user";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { data }: AxiosResponseUser = await axios.post(`${import.meta.env.VITE_BASE}/login`, { email, password });
      if (data) {
        localStorage.setItem("USER", JSON.stringify(data));
        dispatch(setUser(data));
      } else {
        setError("Check your inputs");
      }
      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error: unknown) {
      console.log(error);
      setError("Invalid Credentilas");
      setTimeout(() => {
        setError("");
      }, 4500);
    }
  };
  return (
    <Stack direction="column" alignItems="center">
      <Typography p={3} variant="h2">
        Login
      </Typography>
      <Typography p={3} variant="h6">
        Don't you have an account?{" "}
        <Link to="/register">
          <Typography color={blue[500]}>Register here</Typography>
        </Link>
      </Typography>
      {error && (
        <Typography p={3} variant="h6">
          Invalid Credentials
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
          <Button onClick={loginHandler} variant="contained">
            Log in
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
