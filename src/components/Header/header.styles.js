import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    textWrapper: {
      position: "absolute",
    },
    logo: {
      marginLeft: "91px",
      marginRight: "100px",
    },
    navLink: {
      paddingRight: "24px",
      fontSize: "23px",
      paddingTop: "95px",
    },
    imgContainer: {
      // marginLeft: "10px",
      width: "114px",
      height: "187px",
      backgroundColor: "#0A1217",
      border: "1px solid #707070",
      borderRadius: "0px 0px 23px 23px;",
    },
    imgStyles: {
      margin: "95px 21px 20px 21px",
      backgroundColor: "white",
      borderRadius: "50%",
      padding: "17.48px",
      width: "37.4px",
      height: "37.4px",
    },
  };
});
