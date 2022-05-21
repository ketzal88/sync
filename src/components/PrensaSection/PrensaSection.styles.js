import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      padding: "49px 112px 147px 100px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "85px 100px 0px 100px",
    },
  },
  titleSection: {
    [theme.breakpoints.up("lg")]: {
      marginBottom: "68px !important",
      fontSize: "48px !important",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "71px !important",
      fontSize: "65px !important",
    },
  },
  elementIMG: {
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "223px",
      borderRadius: "20px 20px 0px 0px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "328px",
    },
  },
  elementWrapper: {
    overflow: "hidden",
  },
  elementTextWrap: {
    backgroundColor: "#F7F7F7",
    borderRadius: "0px 0px 20px 20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      padding: "25px 23px 0px 24px",
      height: "356px",
      gap: "9px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "38px 0px 0px 32px",
      height: "356px",
      gap: "60px",
    },
  },
  elementTitle: {
    fontWeight: "bold !important",
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px !important",
    },
  },
  elementDate: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
  elementText: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px !important",
      display: "-webkit-box !important",
      "-webkit-box-orient": "vertical !important",
      "-webkit-line-clamp": "5 !important",
      lineClamp: "5 !important",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px !important",
      display: "-webkit-box !important",
      "-webkit-box-orient": "vertical !important",
      "-webkit-line-clamp": "2 !important",
      lineClamp: "2 !important",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  elementButton: {
    color: "black",
    fontWeight: "bold !important",
    textDecoration: "underline",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px !important",
    },
    [theme.breakpoints.up("xl")]: {
      color: "black",
      fontSize: "24px !important",
    },
  },
}));
