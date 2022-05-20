import { makeStyles } from "@mui/styles";
import galeria from "../../assets/images/imagen-galeria.jpg";

export const useAmennitiesSectionStyles = makeStyles((theme) => {
  return {
    wrapperSection: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "83px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "94px",
      },
    },
    titleSection: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    subTitleSection: {
      fontWeight: "bold !important",
      [theme.breakpoints.up("lg")]: {
        fontSize: "34px !important",
        marginTop: "83px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "46px !important",
        marginTop: "143px !important",
      },
    },
    amenitiesGallery: {
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    textWrapper: {
      [theme.breakpoints.up("lg")]: {
        padding: "83px 122px 83px 100px",
        width: "370px",
      },
      [theme.breakpoints.up("xl")]: {
        padding: "254px 91px 90px 100px",
        width: "489px",
      },
    },
    textSection: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "24px !important",
        fontSize: "20px !important",
        fontWeight: "normal !important",
        marginBottom: "92px !important",
        // lineHeight: "1.35 !important",
      },
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
        fontSize: "24px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
      },
    },
    selectedSlide: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "24px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
      },
      fontWeight: "bold !important",
    },
    iconContainer: {
      [theme.breakpoints.up("lg")]: {
        width: "72px",
        height: "72px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "108px",
        height: "108px",
      },
    },
    imgSection: {
      maxWidth: "100%",
      backgroundImage: `url(${galeria})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("lg")]: {
        width: "774px",
        height: "772px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "1280px",
        height: "1080px",
      },
    },
  };
});
