import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useFirstCarrouselSection } from "./FirstCarrouselSection.style";
import domotica from "../../assets/images/domotica.jpeg";

const FirstCarrouselSection = () => {
  const classes = useFirstCarrouselSection();
  return (
    <Stack
      sx={{ backgroundColor: (theme) => theme.palette.primary.syncBlue }}
      direction="row"
      justifyContent="center"
    >
      <Stack direction="row" className={classes.wrapper}>
        <img className={classes.imageBox} src={domotica} alt="domótica" />
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
            malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor
            magna.
          </Typography>
          <Box className={classes.arrowContainer}>
            <ArrowButton />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
export default FirstCarrouselSection;
