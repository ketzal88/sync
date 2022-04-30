import { makeStyles } from "@mui/styles";
import imageLanding from "../../assets/images/landing-image.jpg";

export const useLadingSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      [theme.breakpoints.up("xl")]: {
        backgroundImage: `url(${imageLanding})`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
        minHeight: "1080px",
        paddingLeft: "98px",
        paddingTop: "392px",
      },
    },
    textWrapper: {
      [theme.breakpoints.up("xl")]: {
        color: "white",
      },
    },
    location: {
      [theme.breakpoints.up("xl")]: {
        fontWeight: 200,
        fontSize: "30px",
        marginBottom: "10px !important",
      },
    },
    buttonWrapper: {
      [theme.breakpoints.up("xl")]: {
        marginTop: "64px",
        marginBottom: "244px",
      },
    },
    apartamentsButton: {
      [theme.breakpoints.up("xl")]: {
        backgroundColor: theme.palette.primary.syncBlue,
        border: 0,
        borderRadius: "46px",
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
        marginRight: "20px",
      },
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
    },
    recorridoButton: {
      [theme.breakpoints.up("xl")]: {
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "46px",
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
      },
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
    },
  };
});
