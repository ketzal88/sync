import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      sm: 425,
      md: 775,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#FFF",
      syncBlue: "#132127",
      syncGrey: "#F7F7F7",
      syncOrange: "#F1804F",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
    },
    h1: {
      fontWeight: "bold",
      fontStyle: "normal",
      "@media (min-width: 1920px)": {
        fontSize: "60px",
      },
    },
    h2: {
      fontWeight: "bold",
      "@media (min-width: 1920px)": {
        fontSize: "46px",
      },
    },
    h3: {
      fontWeight: "normal",
      "@media (min-width: 1920px)": {
        fontSize: "28px",
      },
    },
    h4: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      "@media (min-width: 1920px)": {
        fontSize: "23px",
      },
    },
  },
});

export default theme;
