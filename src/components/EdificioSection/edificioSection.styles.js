import { makeStyles } from "@mui/styles";
import edificio from "../../assets/images/edificio.png";

export const useEdificioStyles = makeStyles((theme) => {
  return {
    container: {
      [theme.breakpoints.up("xl")]: {
        backgroundImage: `url(${edificio})`,
        backgroundSize: "cover",
        backgroundPosition: "-750px 0px",
        backgroundRepeat: "no-repeat",
        height: "1149px",
      },
    },
    secondWrapper: {
      [theme.breakpoints.up("xl")]: {
        marginTop: "80px",
        marginRight: "191px",
      },
    },
    titleSection: {
      [theme.breakpoints.up("xl")]: {
        color: "black",
        fontSize: "60px !important",
      },
    },
    listLabel: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "28px !important",
        marginBottom: "49px !important",
        color: "#384146",
      },
    },
    listQuantity: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
        fontWeight: "bold !important",
        lineHeight: "1.2 !important",
      },
    },
  };
});
