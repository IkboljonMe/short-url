import { TextField, Button, Typography, Container, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../redux/types/url";

const UrlShortener = () => {
  const data = useSelector((state: State) => state.data);
  if (!data) return <div>No data</div>;
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" gutterBottom>
          Short Url
        </Typography>

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
              <Button variant="contained">Copy URL</Button>
            </Stack>
            <Typography align="center" variant="h5" gutterBottom>
              Long url: ${data.origUrl}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default UrlShortener;