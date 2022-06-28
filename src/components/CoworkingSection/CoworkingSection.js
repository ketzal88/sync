import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cowork from "../../assets/images/coworking.jpg";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";
import { Link } from "react-router-dom";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  return (
    <Stack direction="column" alignItems="center">
      <Stack
        direction="column"
        justifyContent={{ md: "center" }}
        className={classes.wrapperSection}
      >
        <img
          className={classes.imgSection}
          src={cowork}
          alt="Coworking Incluido"
        />
        <Box className={classes.textWrapper}>
          <Typography className={classes.titleSection} variant="h2">
            Co-Working
          </Typography>
          <Typography className={classes.textSection}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            imperdiet condimentum massa, id fringilla quam lobortis eget. Cras
            sed porta tortor.
          </Typography>
        </Box>
      </Stack>
      <Stack
        id="recorridoSection"
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.recorridoVirtualWrapper}
      >
        <Link
          to="/recorrido-virtual"
          target="_blank"
          className={classes.recorridoButton}
          sx={{ textAlign: "center" }}
        >
          Recorrido Virtual
        </Link>
      </Stack>
    </Stack>
  );
};
export default CoworkingSection;
