import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    [theme.breakpoints.up("xl")]: {
      padding: "85px 100px 0px 100px",
    },
  },
  titleSection: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "71px !important",
      fontSize: "65px !important",
    },
  },
  elementIMG: {
    [theme.breakpoints.up("xl")]: {
      height: "328px",
      width: "100%",
      borderRadius: "20px 20px 0px 0px",
    },
  },
  elementWrapper: {
    [theme.breakpoints.up("xl")]: {
      height: "716px",
      borderRadius: "20px",
    },
  },
  elementTextWrap: {
    [theme.breakpoints.up("xl")]: {
      padding: "38px 0px 0px 32px",
      height: "356px",
      display: "flex",
      flexDirection: "column",
      gap: "60px",
      backgroundColor: "#F7F7F7",
      borderRadius: "0px 0px 20px 20px",
    },
  },
  elementTitle: {
    [theme.breakpoints.up("xl")]: {
      fontStize: "30px !important",
      fontWeight: "bold !important",
    },
  },
  elementText: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px !important",
    },
  },
  elementButton: {
    [theme.breakpoints.up("xl")]: {
      color: "black",
      fontSize: "24px !important",
      fontWeight: "bold !important",
      textDecoration: "underline",
    },
  },
}));
