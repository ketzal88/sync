import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    textWrapper: {
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "91px",
      paddingRight: "111px",
      paddingTop: "72px",
      left: "0",
      right: "0",
    },
    logo: {
      width: "132px",
      height: "136px",
    },
    navLink: {
      marginTop: "23px",
      paddingRight: "24px",
      fontSize: "23px",
    },
    imgContainer: {
      // marginLeft: "10px",
      width: "114px",
      height: "187px",
      backgroundColor: "#0A1217",
      border: "1px solid #707070",
      borderRadius: "0px 0px 23px 23px;",
      marginTop: "-72px",
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
