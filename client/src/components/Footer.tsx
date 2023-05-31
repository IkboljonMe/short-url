import { Container, Stack, Typography, Box } from "@mui/material";
import { amber } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="div"
      sx={{
        background: "#f8f8f8",
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Container sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Stack direction="row" sx={{ justifyContent: "center", fontWeight: "700" }}>
          <Typography align="center" variant="h6" sx={{ display: "flex" }}>
            ©2023. All Right Reserved.
          </Typography>
          <Link to="http://ikboljon.com">
            <Stack direction="row">
              <Typography variant="h6" sx={{ display: "flex" }}>
                &nbsp;Ikboljon
              </Typography>{" "}
              <Typography variant="h6" sx={{ color: amber[700], fontWeight: "700" }}>
                Me
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
