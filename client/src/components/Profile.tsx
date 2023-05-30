import { Typography, Container, Stack, Box, Button, Card } from "@mui/material";
import { red } from "@mui/material/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const arr = [1, 2, 3, 4, 5];
  const text =
    "https://www.google.com/search?q=long+url&rlz=1C5CHFA_enPL1025PL1025&oq=long+url&aqs=chrome..69i57j0i512l9.1730j0j7&sourceid=chrome&ie=UTF-8";
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
            {arr.map((url) => (
              <Box key={url}>
                <Stack direction="column" maxWidth="sm">
                  <Card sx={{ padding: "10px 20px 10px 20px", background: "f8f8f8" }}>
                    <Typography variant="h6">Click here to see all info</Typography>
                    <Box component="div" sx={{ p: 1, border: "1px dashed grey" }}>
                      <Typography textAlign="center" variant="h6" maxWidth="sm">
                        {text.slice(0, 50)}...
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
                      Generated: <Typography variant="h6">26 Mart 2020</Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Total visits: <Typography variant="h6">0</Typography>
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
