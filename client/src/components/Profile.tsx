import { Typography, Container, Stack, Box, Button, Card, Snackbar, Alert } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RootState } from "../../redux/store";
import React, { useState } from "react";
import { RiFileCopy2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, updateUserUrls } from "../../redux/reducers/user";
import { urlData } from "../types/url";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userData } from "../types/user";
interface UrlCardProps {
  url: urlData;
  index: number;
  setCopyMessage: (message: string) => void;
  handleOpenSnackbar: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const UrlCard: React.FC<UrlCardProps> = ({ url, index, setCopyMessage, handleOpenSnackbar }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const convertDate = (date: number) => {
    const converted = new Date(Number(date));
    return converted.toLocaleString();
  };
  return (
    <Box key={index}>
      <Stack direction="column" maxWidth="sm">
        <Typography
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          variant="h6"
        >
          <Container>
            {isCollapsed ? " Click here to see all info" : "Click here to collapse"}
            {isCollapsed ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </Container>
        </Typography>{" "}
        {isCollapsed && (
          <Box component="div" sx={{ p: 1, border: "1px dashed grey" }}>
            <Typography textAlign="center" variant="h6" maxWidth="sm">
              {url.origUrl.slice(0, 50)}...
            </Typography>
          </Box>
        )}
        {!isCollapsed && (
          <Card sx={{ padding: "10px 20px 10px 20px", background: "f8f8f8" }}>
            <Box component="div" sx={{ p: 1, border: "1px dashed grey" }}>
              <Stack direction="column">
                <Typography textAlign="center" variant="h6" maxWidth="sm">
                  {url.origUrl.slice(0, 50)}...
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  maxWidth="sm"
                  sx={{
                    color: blue[500],
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(url.origUrl);
                    setCopyMessage("Original url copied!");
                    handleOpenSnackbar();
                  }}
                >
                  <RiFileCopy2Line /> Copy orginal full link
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  maxWidth="sm"
                  sx={{
                    color: blue[500],
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(url.shortUrl);
                    setCopyMessage("Shortened url copied!");
                    handleOpenSnackbar();
                  }}
                >
                  <RiFileCopy2Line /> Copy shortened link
                </Typography>
              </Stack>
            </Box>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Generated: <Typography variant="h6">{convertDate(url.date)}</Typography>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Total visits: <Typography variant="h6">{url.clicks}</Typography>
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                width: "50%",
                textTransform: "none",
                color: red[500],
                borderColor: red[500],
                "&:hover": {
                  color: "white",
                  borderColor: red[500],
                  background: red[500],
                },
              }}
            >
              Delete
            </Button>
          </Card>
        )}
      </Stack>
    </Box>
  );
};
const Profile = () => {
  const [open, setOpen] = useState(false);
  const [isOpenUrlsBox, setIsOpenUrlsBox] = useState(false);
  const navigate = useNavigate();
  const [copyMessage, setCopyMessage] = useState("Link copied to clipboar");
  const user: userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleOpenSnackbar = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  const getUrls = async () => {
    const { data } = await axios.post(`${import.meta.env.VITE_BASE}/profile`, {
      userId: user.userId,
    });
    dispatch(updateUserUrls(data));
    setIsOpenUrlsBox(!isOpenUrlsBox);
  };
  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    event.preventDefault();
    setOpen(false);
    if (reason === "clickaway") {
      return;
    }
  };
  const urls = useSelector((state: RootState) => state.user.urls);

  return (
    <Stack
      direction="column"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar></Navbar>
      <Box
        component="div"
        sx={{
          paddingTop: "120px",
          width: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={4} direction="column">
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Username: </Typography>
              <Typography>{user.username}</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Email:</Typography>
              <Typography>{user.email}</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Shortened Urls: </Typography>
              <Typography>{user.urls?.length}</Typography>
            </Stack>
            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{
                color: red[500],
                textTransform: "none",
                borderColor: red[500],
                "&:hover": {
                  color: "white",
                  borderColor: red[500],
                  background: red[500],
                },
              }}
            >
              Log out
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: blue[500],
                textTransform: "none",
                borderColor: blue[500],
                "&:hover": {
                  color: "white",
                  borderColor: blue[500],
                  background: blue[500],
                },
              }}
              onClick={getUrls}
            >
              {isOpenUrlsBox ? "Click here to collapse Urls list" : "Click here to see all URLS info"}
            </Button>
          </Stack>
        </Container>
      </Box>

      {isOpenUrlsBox && (
        <Box
          component="div"
          sx={{
            paddingTop: "70px",
            width: "100%",
            height: "120%",
            backgroundColor: "#fff",
            paddingBottom: "120px",
          }}
        >
          <Container maxWidth="sm">
            <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Note archived">
              <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
                {copyMessage}
              </Alert>
            </Snackbar>
            <Stack
              spacing={6}
              sx={{
                display: "flex",
                alignContent: "center",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
            >
              {urls &&
                urls.map((url, index) => (
                  <UrlCard url={url} index={index} setCopyMessage={setCopyMessage} handleOpenSnackbar={handleOpenSnackbar} />
                ))}
            </Stack>
          </Container>
        </Box>
      )}
      <Footer />
    </Stack>
  );
};

export default Profile;
