import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useFirstCarrouselSection } from "./FirstCarrouselSection.style";

const FirstCarrouselSection = () => {
  const classes = useFirstCarrouselSection();
  return (
    <Stack direction="row" className={classes.wrapper}>
      <Box className={classes.imageBox} />
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
        <Box sx={{ marginTop: "76px", width: "124px", height: "124px" }}>
          <ArrowButton />
        </Box>
      </Box>
    </Stack>
  );
};
export default FirstCarrouselSection;
