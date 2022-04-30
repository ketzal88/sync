import { makeStyles } from "@mui/styles";
import imageLanding from "../../assets/images/landing-image.jpg";

export const useLadingSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      backgroundImage: `url(${imageLanding})`,
      backgroundSize: "cover",
      backgroundRepeat: "none",
    },
    textWrapper: {
      marginTop: "392px",
      marginLeft: "98px",
      color: "white",
    },
    location: {
      fontWeight: 200,
      fontSize: "30px",
    },
    buttonWrapper: {
      marginTop: "64px",
      marginBottom: "244px",
    },
    apartamentsButton: {
      backgroundColor: theme.palette.primary.syncBlue,
      border: 0,
      borderRadius: "46px",
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
      padding: "23px 64px",
      marginRight: "20px",
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
      backgroundColor: "transparent",
      border: "1px solid white",
      borderRadius: "46px",
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
      padding: "23px 64px",
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
