import { makeStyles } from "@mui/styles";
import domotica from "../../assets/images/domotica.jpeg";

export const useFirstCarrouselSection = makeStyles((theme) => {
  return {
    wrapper: {
      height: "1080px",
      backgroundColor: theme.palette.primary.syncBlue,
    },
    imageBox: {
      [theme.breakpoints.up("xl")]: {
        width: "1180px",
        height: "1080px",
        backgroundImage: `url(${domotica})`,
        backgroundSize: "cover",
        backgroundrepeat: "no-repeat",
        backgroundPosition: "0px -59px",
      },
    },
    textBox: {
      [theme.breakpoints.up("xl")]: {
        width: "549px",
        paddingLeft: "80px",
        paddingRight: "111px",
        paddingTop: "236px",
        color: "white",
      },
    },
    titleSection: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
        fontWeight: "700 !important",
      },
    },
    subTitleSection: {
      [theme.breakpoints.up("xl")]: {
        paddingTop: "80px",
        fontSize: "46px !important",
        fontWeight: "bold !important",
      },
    },
    text: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px !important",
        marginTop: "13px",
        letterSpacing: "0px !important",
      },
    },
  };
});