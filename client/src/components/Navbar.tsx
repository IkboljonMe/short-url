import { Container, Stack, Typography, Avatar } from "@mui/material";
import { blue, amber } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Container>
      <Stack direction="row" sx={{ justifyContent: "space-between", fontWeight: "700" }}>
        <Typography align="right" variant="h3" sx={{ display: "flex" }}>
          Ikboljon
          <Typography variant="h3" sx={{ color: amber[700], fontWeight: "700" }}>
            Me
          </Typography>
        </Typography>
        <Typography align="center" variant="h2" sx={{ fontWeight: "bold", color: blue[500] }}>
          Short URL
        </Typography>
        <Avatar></Avatar>
      </Stack>
    </Container>
  );
};

export default Navbar;