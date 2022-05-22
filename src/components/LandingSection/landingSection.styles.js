import { makeStyles } from "@mui/styles";
import imageLanding from "../../assets/images/landing-image.jpg";

export const useLadingSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      backgroundImage: `url(${imageLanding})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("lg")]: {
        minHeight: "745px",
        paddingLeft: "98px",
        paddingTop: "296px",
      },
      [theme.breakpoints.up("lg")]: {
        minHeight: "745px",
        paddingLeft: "98px",
        paddingTop: "296px",
      },
      [theme.breakpoints.up("xl")]: {
        minHeight: "1080px",
        paddingTop: "392px",
        maxWidth: "1920px",
      },
    },
    textWrapper: {
      color: "white",
    },
    location: {
      [theme.breakpoints.down("lg")]: {
        fontSize: "24px !important",
        marginBottom: "12px !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "24px !important",
        marginBottom: "12px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
        marginBottom: "10px !important",
      },
    },
    mainTitle: {
      [theme.breakpoints.up("md")]: {
        marginBottom: "83px !important",
        fontSize: "48px !important",
      },
    },
    buttonWrapper: {
      [theme.breakpoints.down("lg")]: {
        marginTop: "64px",
        marginBottom: "244px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "64px",
        marginBottom: "244px",
      },
    },
    apartamentsButton: {
      border: 0,
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
      "&:active": {
        boxShadow: "none",
        backgroundColor: theme.palette.primary.syncBlue,
        borderColor: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.syncBlue,
        borderColor: "none",
        boxShadow: "none",
      },
      [theme.breakpoints.down("lg")]: {
        borderRadius: "46px",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
        marginRight: "20px",
      },
      [theme.breakpoints.up("lg")]: {
        borderRadius: "46px",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
        marginRight: "20px",
      },
      [theme.breakpoints.up("xl")]: {
        borderRadius: "46px",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
        marginRight: "20px",
      },
    },
    recorridoButton: {
      "&:active": {
        boxShadow: "none",
        backgroundColor: "transparent",
        borderColor: "none",
      },
      "&:hover": {
        backgroundColor: "transparent",
        borderColor: "none",
        boxShadow: "none",
      },
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white",
      borderRadius: "46px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
      },
      [theme.breakpoints.up("xl")]: {
        backgroundColor: "transparent",
        border: "1px solid white",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
      },
    },
  };
});
