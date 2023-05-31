import { TextField, Button, Typography, Container, Stack, Box, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";
import { RootState } from "../../redux/store";
import { MdOutlineCopyAll } from "react-icons/md";
import themes from "../theme";

const UrlShortener = () => {
  const theme = responsiveFontSizes(themes);
  const data = useSelector((state: RootState) => state.url.data);
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [isVisitsPageOpen, setIsVisitsPageOpen] = useState(false);
  if (!data) return <div>No data</div>;
  return (
    <Stack
      direction="column"
      sx={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Box
        component="div"
        sx={{
          paddingTop: "20px",
          height: "120%",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="div"
            p={5}
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
              <Typography
                align="center"
                variant="h3"
                gutterBottom
                sx={{
                  fontSize: theme.typography.h3,
                }}
              >
                Your shortened URL
              </Typography>
              <Typography
                align="center"
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: theme.typography.h6,
                }}
              >
                Copy the shortened link and share it in messages, texts, posts, websites and other locations.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                <TextField value={data.shortUrl} />
                <Button
                  variant="contained"
                  startIcon={<MdOutlineCopyAll />}
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(data.shortUrl);
                    setIsCopied(true);
                  }}
                >
                  {isCopied ? "Copied!" : "Copy URL"}
                </Button>
              </Stack>

              <Container
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    variant={isVisitsPageOpen ? "contained" : "outlined"}
                    size="small"
                    sx={{
                      width: "50%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      setIsVisitsPageOpen(!isVisitsPageOpen);
                    }}
                  >
                    Total number of clicks
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "50%",
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/")}
                  >
                    Shorten another URL
                  </Button>
                </Stack>
              </Container>
              {isVisitsPageOpen && (
                <Typography
                  align="center"
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: theme.typography.h6,
                  }}
                >
                  Total number of visits: {data.clicks}
                </Typography>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
};

export default UrlShortener;
