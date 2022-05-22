import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    textWrapper: {
      position: "absolute",
      display: "flex",
      left: "0",
      right: "0",
      [theme.breakpoints.down("lg")]: {
        justifyContent: "space-between",
        paddingLeft: "80px",
        paddingRight: "112px",
        paddingTop: "72px",
      },
      [theme.breakpoints.up("lg")]: {
        justifyContent: "space-between",
        paddingLeft: "80px",
        paddingRight: "112px",
        paddingTop: "72px",
      },
      [theme.breakpoints.up("xl")]: {
        paddingLeft: "91px",
        paddingRight: "111px",
        paddingTop: "72px",
      },
    },
    logo: {
      [theme.breakpoints.down("lg")]: {
        width: "132px",
        height: "136px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "132px",
        height: "136px",
      },
    },
    navLink: {
      [theme.breakpoints.down("lg")]: {
        marginTop: "12px",
        paddingRight: "24px",
        fontSize: "14px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "12px",
        paddingRight: "24px",
        fontSize: "17px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "23px",
        paddingRight: "24px",
        fontSize: "23px",
      },
    },
    LinkVitrium: {
      fontWeight: "bold",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    imgContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      [theme.breakpoints.down("lg")]: {
        width: "102px",
        height: "167px",
        backgroundColor: "#0A1217",
        border: "1px solid #707070",
        borderRadius: "0px 0px 23px 23px;",
        marginTop: "-72px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "114px",
        height: "187px",
        backgroundColor: "#0A1217",
        border: "1px solid #707070",
        borderRadius: "0px 0px 23px 23px;",
        marginTop: "-72px",
      },
    },
    imgStyles: {
      [theme.breakpoints.down("lg")]: {
        marginBottom: "18px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "17.48px",
        width: "33px",
        height: "33px",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "17.48px",
        width: "37.4px",
        height: "37.4px",
      },
    },
  };
});
