import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920
    }
  },
  palette: {
    primary: {
      syncBlue: "#132127",
      syncGrey: "#F7F7F7",
      syncOrange: "#F1804F"
    }
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontStyle: "normal",
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

export default theme;
