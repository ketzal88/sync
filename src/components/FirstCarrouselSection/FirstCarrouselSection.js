import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useFirstCarrouselSection } from "./FirstCarrouselSection.style";

const FirstCarrouselSection = () => {
  const classes = useFirstCarrouselSection();
  return (
    <Stack direction="row">
      <Box className={classes.imageBox}>foto</Box>
      <Box>
        <Typography variant="h1"> Tecnología </Typography>
        <Box style={{ margin: "76px 0" }}>
          <Typography variant="h2"> Domótica </Typography>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor
            magna.
          </Typography>
        </Box>
        <ArrowButton />
      </Box>
    </Stack>
  );
};
export default FirstCarrouselSection;
