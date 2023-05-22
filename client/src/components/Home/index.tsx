import {
  TextField,
  Button,
  Typography,
  Container,
  Stack,
  Box,
} from "@mui/material";
import { useState } from "react";
import classes from "./styles.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  console.log(input);
  const shortenUrl = async () => {
    if (input) {
      const { data } = await axios.post("http://localhost:3333/", {
        origUrl: input,
      });
      console.log(data);
      navigate("/short");
    }
  };
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" gutterBottom>
          Short Url
        </Typography>
        <Box component="div" className={classes.urlContainer}>
          <Stack direction="column" spacing={3}>
            <Typography align="center" variant="h3" gutterBottom>
              Paste Url to be shortened
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <TextField
                value={input}
                id="outlined-search"
                label="Enter the link here"
                type="search"
                onChange={(e: any) => {
                  setInput(e.target.value);
                }}
              />
              <Button onClick={shortenUrl} variant="contained">
                Shorten URL
              </Button>
            </Stack>
            <Typography align="center" variant="h5" gutterBottom>
              It is a free tool to shorten URLs and generate short links URL
              shortener allows to create a shortened link making it easy to
              share
            </Typography>
          </Stack>
        </Box>
        <Box component="div" className={classes.urlContainer}>
          <Stack direction="column" spacing={3}>
            <Typography align="center" variant="h3" gutterBottom>
              Do you want to keep your data?
            </Typography>

            <Stack direction="row" p={2} sx={{ justifyContent: "center" }}>
              <Button variant="contained" size="large">
                Create Accaunt
              </Button>
            </Stack>
          </Stack>
          <Typography align="center" variant="h5" gutterBottom>
            Custom short links, powerful dashboard, detailed analytics, API, UTM
            builder, QR codes, browser extension, 50+ app integrations and
            support
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
