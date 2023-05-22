import classes from "./styles.module.scss";
import {
  TextField,
  Button,
  Typography,
  Container,
  Stack,
  Box,
} from "@mui/material";
const UrlShortener = () => {
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
              Copy the shortened link and share it in messages, texts, posts,
              websites and other locations.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <TextField value="https://mui.com/material-ui/react-button/" />
              <Button variant="contained">Copy URL</Button>
            </Stack>
            <Typography align="center" variant="h5" gutterBottom>
              Long url:
            </Typography>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default UrlShortener;
