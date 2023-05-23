import { TextField, Button, Typography, Container, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../../redux/types/url";
import classes from "./styles.module.scss";

const UrlShortener = () => {
  const data = useSelector((state: State) => state.data);
  if (!data) return <div>No data</div>;
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" gutterBottom>
          Short Url
        </Typography>

        <Box component="div" className={classes.urlContainer}>
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
    </div>
  );
};

export default UrlShortener;
