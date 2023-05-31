import { Container, Stack, Typography, Avatar, Box } from "@mui/material";
import { blue, amber } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearUser, setUserUrls } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import theme from "../theme";
const Navbar = () => {
  const auth = useSelector((state: RootState) => state.user.token);
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(auth);
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleProfile: () => void = async () => {
    const { data } = await axios.post(`${import.meta.env.VITE_BASE}/profile`, { userId });
    dispatch(setUserUrls(data));
    navigate("/profile");
  };

  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top: "0",
        background: "#f8f8f8",
        width: "100%",
        zIndex: 9999999,
      }}
    >
      <Container>
        <Stack direction="row" sx={{ justifyContent: "space-between", fontWeight: "700" }}>
          <Stack direction="row">
            <Typography align="right" variant="h3" sx={{ display: "flex" }}>
              Ikboljon
            </Typography>
            <Typography variant="h3" sx={{ color: amber[700], fontWeight: "700" }}>
              Me
            </Typography>
          </Stack>
          <Typography
            align="center"
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: blue[500],
              fontSize: theme.breakpoints.down("sm") ? "16px" : "inherit",
              zIndex: 9999,
            }}
          >
            Short URL
          </Typography>
          <Stack direction="row" spacing={3} sx={{ justifyContent: "center", alignItems: "center", fontWeight: "500" }}>
            <Typography onClick={auth ? handleLogout : handleLogin} variant="h3">
              {auth ? "Log out" : "Login"}
            </Typography>
            {auth && <Avatar onClick={handleProfile} />}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
