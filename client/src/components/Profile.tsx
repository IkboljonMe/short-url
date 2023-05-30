import { Typography, Container, Stack, Box, Button, Card } from "@mui/material";
import { red } from "@mui/material/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Profile = () => {
  const urls = useSelector((state: RootState) => state.user.urls);
  console.log("Profile", urls);
  const convertDate = (date: number) => {
    const converted = new Date(Number(date));
    return converted.toLocaleString();
  };
  return (
    <>
      <Navbar></Navbar>
      <Box
        component="div"
        sx={{
          paddingTop: "70px",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Stack
            spacing={10}
            sx={{ display: "flex", alignContent: "center", textAlign: "center", justifyContent: "center", alignItems: "center" }}
            direction="column"
          >
            {urls &&
              urls.map((url, index) => (
                <Box key={index}>
                  <Stack direction="column" maxWidth="sm">
                    <Card sx={{ padding: "10px 20px 10px 20px", background: "f8f8f8" }}>
                      <Typography variant="h6">Click here to see all info</Typography>
                      <Box component="div" sx={{ p: 1, border: "1px dashed grey" }}>
                        <Typography textAlign="center" variant="h6" maxWidth="sm">
                          {url.origUrl.slice(0, 50)}...
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography textAlign="center" variant="h6" maxWidth="sm">
                            Copy orginal full link
                          </Typography>
                          <Typography textAlign="center" variant="h6" maxWidth="sm">
                            Copy shortened link
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
                  </Stack>
                </Box>
              ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
