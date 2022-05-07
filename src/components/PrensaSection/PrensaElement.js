import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { usePrensaSectionStyles } from "./PrensaSection.styles";

const PrensaElement = ({ title, text, buttonLabel, imgURL }) => {
  const classes = usePrensaSectionStyles();
  const titleFormated = title.split(":");
  return (
    <Box className={classes.elementWrapper}>
      <img src={imgURL} className={classes.elementIMG} alt="Sección Prensa" />
      <Box className={classes.elementTextWrap}>
        <Typography className={classes.elementTitle} variant="h3">
          {titleFormated[0] + ":"}
          <br />
          {titleFormated[1]}
        </Typography>
        <Typography paragraph className={classes.elementText}>
          {text}
        </Typography>
        <Link to={"/"} className={classes.elementButton}>
          {buttonLabel}
        </Link>
      </Box>
    </Box>
  );
};
export default PrensaElement;
