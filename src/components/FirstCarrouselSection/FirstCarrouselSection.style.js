import { makeStyles } from "@mui/styles";
// import domotica from ""
// "../../assets/image/domotica.jpeg";

export const useFirstCarrouselSection = makeStyles((theme) => {
  return {
    imageBox: {
      [theme.breakpoints.up("xl")]: {
        width: "calc(100% - 740px)",
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundrepeat: "no-repeat",
      },
    },
  };
});
