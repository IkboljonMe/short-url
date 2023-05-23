import { TextField, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack direction="column" alignItems="center">
      <Typography p={3} variant="h2">
        Login
      </Typography>
      <Typography p={3} variant="h6">
        Don't you have an account? <Link to="/register">Register here</Link>
      </Typography>
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
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
