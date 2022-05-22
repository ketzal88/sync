import { makeStyles } from "@mui/styles";

export const useApartamentsStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "50px",
      height: "852px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "72px",
      height: "1188px",
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: "40px",
      height: "1444px",
    },
  },
  sectionTitle: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "92px",
      paddingBottom: "42px",
      fontSize: "34px !important",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "100px",
      paddingBottom: "40px",
      fontSize: "48px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px !important",
    },
  },
  imgContainer: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: "white",
    [theme.breakpoints.down("lg")]: {
      width: "696px",
      height: "391.5px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "956px",
      height: "538px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "1200px",
      height: "700px",
    },
  },
  subTitle: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "34px !important",
      marginTop: "28px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px !important",
      marginTop: "39px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px !important",
      marginTop: "11px !important",
    },
  },
  text: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px !important",
      marginTop: "19px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px !important",
      marginTop: "17px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "28px !important",
      marginTop: "15px !important",
    },
  },

  button: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: "#f1804f",
    [theme.breakpoints.up("md")]: {
      marginTop: "55px",
      borderRadius: "46px",
      fontSize: "17px !important",
      padding: "32px 116px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "55px",
      fontSize: "22px !important",
      padding: "26px 95px",
    },
  },
}));
