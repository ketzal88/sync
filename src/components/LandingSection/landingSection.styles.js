import { makeStyles } from "@mui/styles";
import imageLanding from "../../assets/images/landing-image.jpg";

export const useLadingSectionStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${imageLanding})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  textWrapper: {
    marginTop: "392px",
    marginLeft: "98px",
    color: "white",
  },
  location: {
    fontWeight: 200,
    fontSize: "30px",
  },
  buttonWrapper: {
    marginTop: "64px",
    marginBottom: "244px",
  },
}));
