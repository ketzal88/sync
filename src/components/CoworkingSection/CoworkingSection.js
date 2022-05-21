import { Stack, Typography } from "@mui/material";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  return (
    <Stack direction="column" alignItems="center">
      <Stack
        direction="column"
        justifyContent="center"
        className={classes.wrapperSection}
      >
        <Typography className={classes.titleSection} variant="h2">
          Co-Working
        </Typography>
        <Typography paragraph className={classes.textSection}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          malesuada pellentesque.
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.recorridoVirtualWrapper}
      >
        <button className={classes.recorridoButton}>RECORRIDO VIRTUAL</button>
      </Stack>
    </Stack>
  );
};
export default CoworkingSection;
