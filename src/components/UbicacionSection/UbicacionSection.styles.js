import { makeStyles } from "@mui/styles";

export const useUbicacionSectionStyles = makeStyles((theme) => ({
  ubicacionWrapper: {
    marginTop: "72px",
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "1040px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "1080px",
    },
  },
  titleSection: {
    paddingLeft: "100px !important",
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px !important",
    },
  },
}));
