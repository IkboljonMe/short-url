import { TextField, Button, Typography, Container, Stack, Box, responsiveFontSizes } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AxiosResponseUrl } from "../types/url";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { FiLink } from "react-icons/fi";
import themes from "../theme";

const Home = () => {
  const theme = responsiveFontSizes(themes);
  const [input, setInput] = useState("");
  const userId = useSelector((state: RootState) => state.user.userId);
  const auth = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shortenUrl = async () => {
    if (input) {
      const { data }: AxiosResponseUrl = await axios.post(`${import.meta.env.VITE_BASE}/`, {
        origUrl: input,
        userId,
      });
      dispatch({ type: "SET_URL", payload: data });
      navigate("/short");
    }
  };
  return (
    <Stack
      direction="column"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Box
        component="div"
        sx={{
          paddingTop: "60px",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Stack
            direction="row"
            spacing={10}
            sx={{ display: "flex", alignContent: "center", textAlign: "center", justifyContent: "center", alignItems: "center" }}
          ></Stack>
          <Box
            p={3}
            sx={{
              backgroundColor: "#f8f8f8",
              border: "5px solid #f9f8f8",
              borderRadius: "10px",
              paddingTop: "20px",
              paddingBottom: "20px",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            <Stack direction="column" spacing={3}>
              <Typography align="center" sx={{ fontSize: theme.typography.h3 }} variant="h3" gutterBottom>
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
                <Button
                  onClick={shortenUrl}
                  sx={{ fontSize: theme.breakpoints.down("sm") ? "8px" : "20px" }}
                  startIcon={<FiLink />}
                  variant="contained"
                >
                  Shorten URL
                </Button>
              </Stack>
              <Typography align="center" variant="h5" gutterBottom sx={{ fontSize: theme.typography.h5 }}>
                It is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making
                it easy to share
              </Typography>
            </Stack>
          </Box>
          {!auth && (
            <Box
              component="div"
              sx={{
                backgroundColor: "#f8f8f8",
                border: "5px solid #f9f8f8",
                borderRadius: "10px",
                paddingTop: "20px",
                paddingBottom: "20px",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <Stack direction="column" spacing={3}>
                <Typography align="center" variant="h3" gutterBottom sx={{ fontSize: theme.typography.h3 }}>
                  Do you want to keep your data?
                </Typography>

                <Stack direction="row" p={2} sx={{ justifyContent: "center" }}>
                  <Link to="/register">
                    <Button variant="contained">Create Accaunt</Button>
                  </Link>
                </Stack>
              </Stack>
              <Typography align="center" variant="h5" p={2} gutterBottom sx={{ fontSize: theme.typography.h5 }}>
                Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app
                integrations and support
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Footer></Footer>
    </Stack>
  );
};

export default Home;
