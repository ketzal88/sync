import { Box, Stack, Typography } from "@mui/material";
import domotica from "../../assets/images/domotica.jpeg";
import { useInfoProjectSectionStyles } from "./InfoProjectSection.style";

const InfoProjectSection = () => {
  const classes = useInfoProjectSectionStyles();
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
        marginTop: "-1px",
      }}
      direction="row"
      justifyContent="center"
    >
      <Stack direction="row" className={classes.wrapper}>
        <Box>
          <Typography variant="h3" className={classes.titleSection}>
            Conoce el proyecto
          </Typography>
          {/* <Box className={classes.imageBox} /> */}
          <img className={classes.imageBox} src={domotica} alt="domótica" />
        </Box>
        <Box className={classes.textBox}>
          <Typography variant="h4" className={classes.subTitleSection}>
            Más conectados <br /> que nunca
          </Typography>
          <Typography paragraph className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor
            magna.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
export default InfoProjectSection;
