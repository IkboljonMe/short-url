import { Typography, Container, Stack, Box, TextField } from "@mui/material";
const Profile = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Container maxWidth="sm">
      <Stack
        spacing={10}
        sx={{ display: "flex", alignContent: "center", textAlign: "center", justifyContent: "center", alignItems: "center" }}
        direction="column"
      >
        <Typography align="center" variant="h2">
          Profile
        </Typography>
        {arr.map((url, index) => (
          <Box key={index}>
            <Stack direction="column" maxWidth="sm">
              <Typography textAlign="center" variant="h5" maxWidth="sm">
                Long URL
                :https://www.google.com/search?q=long+url&rlz=1C5CHFA_enPL1025PL1025&oq=long+url&aqs=chrome..69i57j0i512l9.1730j0j7&sourceid=chrome&ie=UTF-8
              </Typography>
              <TextField id="outlined-search" label="Enter the link here" type="search" defaultValue="https://www.google.com/" />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Profile;
