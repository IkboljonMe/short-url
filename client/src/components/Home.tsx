import { TextField, Button, Typography, Container, Stack, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AxiosResponse } from "../types/url";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const [input, setInput] = useState("");
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      console.log("Logged out");
    }, 1600);
  }, [bool]);
  // const handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   navigate("/");
  // };

  const shortenUrl = async () => {
    if (input) {
      const { data }: AxiosResponse = await axios.post(`${import.meta.env.VITE_BASE}/`, {
        origUrl: input,
      });
      dispatch({ type: "SET_URL", payload: data });
      navigate("/short");
    }
  };
  return (
    <>
      <Navbar />
      <Box
        component="div"
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container maxWidth="sm">
          <Stack
            direction="row"
            spacing={10}
            sx={{ display: "flex", alignContent: "center", textAlign: "center", justifyContent: "center", alignItems: "center" }}
          ></Stack>
          <Box
            p={5}
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid #f8f8f8",
              borderRadius: "5px",
              paddingTop: "20px",
              paddingBottom: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Stack direction="column" spacing={3}>
              <Typography align="center" variant="h3" gutterBottom>
                Paste Url to be shortened
              </Typography>

              <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                <TextField
                  value={input}
                  id="outlined-search"
                  label="Enter the link here"
                  type="search"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(e.target.value);
                  }}
                />
                <Button onClick={shortenUrl} variant="contained">
                  Shorten URL
                </Button>
              </Stack>
              <Typography align="center" variant="h5" gutterBottom>
                It is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making
                it easy to share
              </Typography>
            </Stack>
          </Box>
          {!auth && (
            <Box
              component="div"
              sx={{
                backgroundColor: "#ffffff",
                border: "1px solid #f8f8f8",
                borderRadius: "5px",
                paddingTop: "20px",
                paddingBottom: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Stack direction="column" spacing={3}>
                <Typography align="center" variant="h3" gutterBottom>
                  Do you want to keep your data?
                </Typography>

                <Stack direction="row" p={2} sx={{ justifyContent: "center" }}>
                  <Link to="/register">
                    <Button variant="contained">Create Accaunt</Button>
                  </Link>
                </Stack>
              </Stack>
              <Typography align="center" variant="h5" gutterBottom>
                Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app
                integrations and support
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Home;
