import { Container, Stack, Typography, Avatar, Box } from "@mui/material";
import { blue, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state: any) => state.user);
  console.log(user);

  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top: "0",
        background: "#f8f8f8",
        width: "100%",
      }}
    >
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
          <Stack direction="row" spacing={3} sx={{ justifyContent: "center", alignItems: "center", fontWeight: "500" }}>
            <Typography variant="h3">Login</Typography>
            <Avatar></Avatar>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
