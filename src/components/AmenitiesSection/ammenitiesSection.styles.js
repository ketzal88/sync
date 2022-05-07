import { makeStyles } from "@mui/styles";
import galeria from "../../assets/images/imagen-galeria.jpg";

export const useAmennitiesSectionStyles = makeStyles((theme) => {
  return {
    wrapperSection: {
      [theme.breakpoints.up("xl")]: {
        marginTop: "94px",
      },
    },
    titleSection: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    subTitleSection: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "46px !important",
        fontWeight: "bold !important",
        marginTop: "143px !important",
      },
    },
    amenitiesGallery: {
      [theme.breakpoints.up("xl")]: {
        display: "flex",
        backgroundColor: theme.palette.primary.syncBlue,
        color: "white",
      },
    },
    textWrapper: {
      [theme.breakpoints.up("xl")]: {
        padding: "254px 91px 90px 100px",
        width: "489px",
      },
    },
    textSection: {
      [theme.breakpoints.up("xl")]: {
        marginTop: "20px !important",
        fontSize: "23px !important",
        fontWeight: "normal !important",
        marginBottom: "150px !important",
        lineHeight: "1.35 !important",
      },
    },
    carrouselNumber: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
      },
    },
    iconContainer: {
      width: "108px",
      height: "108px",
    },
    imgSection: {
      [theme.breakpoints.up("xl")]: {
        width: "100%",
        maxWidth: "1280px !important",
        height: "1080px",
        backgroundImage: `url(${galeria})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    },
  };
});
