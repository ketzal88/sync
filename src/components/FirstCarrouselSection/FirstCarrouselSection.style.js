import { makeStyles } from "@mui/styles";
import domotica from "../../assets/images/domotica.jpeg";

export const useFirstCarrouselSection = makeStyles((theme) => {
  return {
    wrapper: {
      maxWidth: "1920px",
      [theme.breakpoints.up("lg")]: {
        height: "768px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "1080px",
      },
    },
    imageBox: {
      objectFit: "cover",
      objectPosition: "0% 10%",
      [theme.breakpoints.up("lg")]: {
        width: "100%",
        height: "100%",
        backgroundPosition: "0px -59px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "1180px",
        height: "1080px",
        backgroundPosition: "0px -59px",
      },
    },
    textBox: {
      [theme.breakpoints.up("lg")]: {
        width: "602px",
        paddingInline: "112px",
        paddingTop: "136px",
        color: "white",
      },
      [theme.breakpoints.up("xl")]: {
        width: "549px",
        paddingLeft: "80px",
        paddingRight: "111px",
        paddingTop: "236px",
        color: "white",
      },
    },
    titleSection: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px !important",
        fontWeight: "700 !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
        fontWeight: "700 !important",
      },
    },
    subTitleSection: {
      [theme.breakpoints.up("lg")]: {
        paddingTop: "60px",
        fontSize: "34px !important",
        fontWeight: "bold !important",
      },
      [theme.breakpoints.up("xl")]: {
        paddingTop: "80px",
        fontSize: "46px !important",
        fontWeight: "bold !important",
      },
    },
    text: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px !important",
        marginTop: "24px !important",
        letterSpacing: "0px !important",
        display: "-webkit-box !important",
        "-webkit-box-orient": "vertical !important",
        "-webkit-line-clamp": "6 !important",
        lineClamp: "6 !important",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px !important",
        marginTop: "13px !important",
        letterSpacing: "0px !important",
      },
    },
    arrowContainer: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "68px",
        width: "74px",
        height: "74px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "76px",
        width: "124px",
        height: "124px",
      },
    },
  };
});
