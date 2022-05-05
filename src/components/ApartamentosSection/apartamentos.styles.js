import { makeStyles } from "@mui/styles";

export const useApartamentsStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: "40px",
    },
    sectionTitle: {
      paddingLeft: "100px",
      paddingBottom: "40px",
      fontSize: "60px !important",
    },
    imgContainer: {
      width: "1200px",
      height: "700px",
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
    },
    subTitle: {
      fontSize: "60px !important",
      marginTop: "15px",
    },
    text: {
      fontSize: "28px !important",
      marginTop: "15px",
    },
    button: {
      marginTop: "55px",
      backgroundColor: theme.palette.primary.syncBlue,
      color: "#f1804f",
      borderRadius: "46px",
      fontSize: "26px !important",
      padding: "26px 95px",
    },
  };
});
