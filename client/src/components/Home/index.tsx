import { TextField, Button, Typography, Container, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AxiosResponse } from "../../types/url";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shortenUrl = async () => {
    if (input) {
      const { data }: AxiosResponse = await axios.post("http://localhost:3333/", {
        origUrl: input,
      });
      dispatch({ type: "SET_URL", payload: data });
      navigate("/short");
    }
  };
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" gutterBottom>
          Short Url
        </Typography>
        <Box className={classes.urlContainer}>
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
              It is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it
              easy to share
            </Typography>
          </Stack>
        </Box>
        <Box component="div" className={classes.urlContainer}>
          <Stack direction="column" spacing={3}>
            <Typography align="center" variant="h3" gutterBottom>
              Do you want to keep your data?
            </Typography>

            <Stack direction="row" p={2} sx={{ justifyContent: "center" }}>
              <Link to="/register">
                {" "}
                <Button variant="contained" size="large">
                  Create Accaunt
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Typography align="center" variant="h5" gutterBottom>
            Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app
            integrations and support
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
