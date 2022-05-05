import { makeStyles } from "@mui/styles";
import domotica from "../../assets/images/domotica.jpeg";

export const useInfoProjectSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      height: "1034px",
      paddingTop: "265px",
      paddingLeft: "100px",
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
    },
    imageBox: {
      [theme.breakpoints.up("xl")]: {
        width: "860px",
        height: "662px",
        marginTop: "87px",
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
    subTitleSection: {
      [theme.breakpoints.up("xl")]: {
        paddingTop: "80px",
        fontSize: "46px !important",
        fontWeight: "bold !important",
        lineHeight: ".8 !important",
        letterSpacing: "0px !important",
      },
    },
    text: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px !important",
        paddingTop: "20px",
        letterSpacing: "0px !important",
      },
    },
  };
});
