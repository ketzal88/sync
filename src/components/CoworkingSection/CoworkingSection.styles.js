import { makeStyles } from "@mui/styles";
import cowork from "../../assets/images/Co-Work.jpeg";
import recorridoVirtual from "../../assets/images/imagen-recorrido-virtual.jpg";

export const useCoworkingSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    [theme.breakpoints.up("xl")]: {
      height: "1080px",
      backgroundImage: `url(${cowork})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
    },
  },
  titleSection: {
    [theme.breakpoints.up("xl")]: {
      textAlign: "center",
      fontSize: "141px !important",
    },
  },
  textSection: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "23px !important",
      paddingInline: "660px !important",
      lineHeight: "1.3 !important",
      letterSpacing: "-.9px !important",
    },
  },
  recorridoVirtualWrapper: {
    [theme.breakpoints.up("xl")]: {
      height: "756px",
      backgroundImage: `url(${recorridoVirtual})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  recorridoButton: {
    [theme.breakpoints.up("xl")]: {
      backgroundColor: theme.palette.primary.syncBlue,
      color: "#F1804F",
      fontSize: "22px",
      fontWeight: "bold",
      padding: "29px 62px",
      borderRadius: "46px",
    },
  },
}));
