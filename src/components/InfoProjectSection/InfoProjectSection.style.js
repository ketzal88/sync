import { makeStyles } from "@mui/styles";

export const useInfoProjectSectionStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    maxWidth: "1920px",
    color: "white",
    [theme.breakpoints.up("lg")]: {
      height: "772px",
      paddingTop: "110px",
      maxWidth: "1820px",
      paddingLeft: "100px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "1034px",
      paddingTop: "265px",
    },
  },
  imageBox: {
    objectFit: "cover",
    objectPosition: "0 50%",
    [theme.breakpoints.up("lg")]: {
      width: "662px",
      height: "410px",
      marginTop: "85px",
      backgroundPosition: "0px -59px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "1080px",
      height: "669px",
      marginTop: "87px",
      backgroundPosition: "0px -59px",
    },
  },
  textBox: {
    color: "white",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      paddingInline: "122px",
      paddingTop: "209px",
    },
    [theme.breakpoints.up("xl")]: {
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
}));
