import { makeStyles } from "@mui/styles";
import domotica from "../../assets/images/domotica.jpeg";

export const useInfoProjectSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
      [theme.breakpoints.up("lg")]: {
        height: "772px",
        paddingTop: "110px",
        paddingLeft: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "1034px",
        paddingTop: "265px",
      },
    },
    imageBox: {
      backgroundImage: `url(${domotica})`,
      backgroundSize: "cover",
      backgroundrepeat: "no-repeat",
      [theme.breakpoints.up("lg")]: {
        width: "662px",
        height: "410px",
        marginTop: "85px",
        backgroundPosition: "0px -59px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "860px",
        height: "662px",
        marginTop: "87px",
        backgroundPosition: "0px -59px",
      },
    },
    textBox: {
      color: "white",
      [theme.breakpoints.up("lg")]: {
        width: "602px",
        paddingInline: "122px",
        paddingTop: "209px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "549px",
        paddingLeft: "80px",
        paddingRight: "111px",
        paddingTop: "236px",
      },
    },
    titleSection: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px !important",
        fontWeight: "bold !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    subTitleSection: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "34px !important",
        fontWeight: "bold !important",
        lineHeight: ".8 !important",
        letterSpacing: "0px !important",
      },
      [theme.breakpoints.up("xl")]: {
        paddingTop: "80px",
        fontSize: "46px !important",
      },
    },
    text: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px !important",
        paddingTop: "24px !important",
        letterSpacing: "0px !important",
        display: "-webkit-box !important",
        "-webkit-box-orient": "vertical !important",
        "-webkit-line-clamp": "6 !important",
        lineClamp: "6 !important",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "1.1 !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px !important",
        paddingTop: "20px !important",
      },
    },
  };
});
