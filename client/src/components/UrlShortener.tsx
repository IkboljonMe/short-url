import { TextField, Button, Typography, Container, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";
import { RootState } from "../../redux/store";

const UrlShortener = () => {
  const data = useSelector((state: RootState) => state.url.data);
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [isVisitsPageOpen, setIsVisitsPageOpen] = useState(false);
  if (!data) return <div>No data</div>;
  return (
    <>
      <Navbar />
      <Box
        component="div"
        sx={{
          paddingTop: "20px",
          height: "100vh",
          width: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container maxWidth="sm">
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
                Your shortened URL
              </Typography>
              <Typography align="center" variant="h6" gutterBottom>
                Copy the shortened link and share it in messages, texts, posts, websites and other locations.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                <TextField value={data.shortUrl} />
                <Button
                  variant="contained"
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
                <Typography align="center" variant="h6" gutterBottom>
                  Total number of visits: {data.clicks}
                </Typography>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default UrlShortener;
