import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0186DA",
    },
    background: {
      default: "#ffffff",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
