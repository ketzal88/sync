import { createTheme } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920
    }
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      "@media (min-width: 1920px)": {
        fontSize: "60px"
      }
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      "@media (min-width: 1920px)": {
        fontSize: "46px"
      }
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: "normal",
      "@media (min-width: 1920px)": {
        fontSize: "28px"
      }
    },
    h4: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      "@media (min-width: 1920px)": {
        fontSize: "23px"
      }
    },
  }
});
