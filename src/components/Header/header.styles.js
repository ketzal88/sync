import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    textWrapper: {
      position: "absolute",
      paddingLeft: "454px",
    },
    navLink: {
      paddingRight: "24px",
      fontSize: "23px",
      paddingTop: "95px",
    },
  };
});
