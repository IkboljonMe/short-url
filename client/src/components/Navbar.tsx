import { Container, Stack, Typography, Box, Theme } from "@mui/material";
import { blue, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import themes from "../theme";
const Navbar = () => {
  const theme = responsiveFontSizes(themes);
  const auth = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const iconSize = isSmallScreen ? 24 : 35;
  const handleProfile: () => void = async () => {
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
      <Container maxWidth="md">
        <Stack
          p={2}
          direction="row"
          sx={{
            paddingRight: {
              sm: "50px",
              md: "30px",
              lg: "20px",
            },
            justifyContent: "space-between",
            fontWeight: "700",
          }}
        >
          <Stack
            direction="row"
            sx={{
              display: isSmallScreen ? "none" : "flex",
            }}
          >
            <Typography
              align="right"
              variant="h3"
              sx={{
                display: "flex",
                fontSize: theme.typography.h3.fontSize,
              }}
            >
              Ikboljon
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: amber[700],
                fontWeight: "700",
                fontSize: theme.typography.h3.fontSize,
              }}
            >
              Me
            </Typography>
          </Stack>
          <Typography
            align="center"
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: blue[500],
              fontSize: theme.typography.h2.fontSize,
              zIndex: 9999,
              paddingRight: "20px",
            }}
          >
            Short URL
          </Typography>

          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {auth ? (
              <FaUserTie color="#2196f3" size={iconSize} onClick={handleProfile} />
            ) : (
              <IoLogInOutline size={iconSize} onClick={() => navigate("/login")} />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
