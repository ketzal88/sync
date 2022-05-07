import { makeStyles } from "@mui/styles";
import galeria from "../../assets/images/imagen-galeria.jpg";

export const useAmennitiesSectionStyles = makeStyles((theme) => {
  return {
    wrapperSection: {
      marginTop: "94px",
    },
    titleSection: {
      marginBottom: "116px !important",
      fontSize: "60px !important",
    },
    subTitleSection: {
      fontSize: "46px !important",
      fontWeight: "bold !important",
      marginTop: "143px !important",
    },
    amenitiesGallery: {
      display: "flex",
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
    },
    textWrapper: {
      padding: "254px 91px 90px 100px",
      width: "489px",
    },
    textSection: {
      marginTop: "20px !important",
      fontSize: "23px !important",
      fontWeight: "normal !important",
      marginBottom: "150px !important",
      lineHeight: "1.4 !important",
    },
    carrouselNumber: {
      fontSize: "30px !important",
    },
    imgSection: {
      width: "1240px !important",
      height: "1080px !important",
      backgroundImage: `url(${galeria})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
});
