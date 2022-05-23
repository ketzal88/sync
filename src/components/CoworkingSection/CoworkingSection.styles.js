import { makeStyles } from "@mui/styles";
import cowork from "../../assets/images/Co-Work.jpeg";
import recorridoVirtual from "../../assets/images/imagen-recorrido-virtual.jpg";

export const useCoworkingSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    backgroundImage: `url(${cowork})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      height: "759px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "762px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "1080px",
    },
  },
  titleSection: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "96px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "141px !important",
    },
  },
  textSection: {
    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
      lineHeight: "1.3 !important",
      letterSpacing: "-.9px !important",
      marginTop: "40px !important",
      paddingInline: "211px !important",
    },
    [theme.breakpoints.up("xl")]: {
      paddingInline: "382px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "23px !important",
      paddingInline: "660px !important",
      lineHeight: "1.3 !important",
      letterSpacing: "-.9px !important",
    },
  },
  recorridoVirtualWrapper: {
    backgroundImage: `url(${recorridoVirtual})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "512px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "756px",
    },
  },
  recorridoButton: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: "#F1804F",
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
      fontWeight: "bold",
      padding: "29px 62px",
      borderRadius: "46px",
    },
  },
}));
