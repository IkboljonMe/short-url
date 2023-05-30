import { Container, Stack, Typography, Avatar, Box } from "@mui/material";
import { blue, amber } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearUser } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

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
            <Typography onClick={auth ? handleLogout : handleLogin} variant="h3">
              {auth ? "Log out" : "Login"}
            </Typography>
            {auth && <Avatar />}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
