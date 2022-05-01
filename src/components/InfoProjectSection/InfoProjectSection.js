import { Box, Stack, Typography } from "@mui/material";
import { useInfoProjectSectionStyles } from "./InfoProjectSection.style";

const InfoProjectSection = () => {
  const classes = useInfoProjectSectionStyles();
  return (
    <Stack direction="row" className={classes.wrapper}>
      <Box>
        <Typography variant="h3" className={classes.titleSection}>
          Conoce el proyecto
        </Typography>
        <Box className={classes.imageBox} />
      </Box>
      <Box className={classes.textBox}>
        <Typography variant="h3" className={classes.titleSection}>
          Tecnología
        </Typography>
        <Typography variant="h4" className={classes.subTitleSection}>
          Domótica
        </Typography>
        <Typography paragraph className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          malesuada pellentesque elit eget gravida cum sociis natoque penatibus.
          Pharetra massa massa ultricies mi quis hendrerit dolor magna.
        </Typography>
      </Box>
    </Stack>
  );
};
export default InfoProjectSection;
