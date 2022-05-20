import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useAmennitiesSectionStyles } from "./ammenitiesSection.styles";

const AmenitiesSection = () => {
  const classes = useAmennitiesSectionStyles();
  return (
    <Grid container flexDirection="column" className={classes.wrapperSection}>
      <Typography
        variant="h2"
        className={classes.titleSection}
        sx={{
          marginLeft: "100px !important",
          marginBottom: "116px !important",
        }}
      >
        Work & Live
      </Typography>
      <Grid className={classes.amenitiesGallery}>
        <Box className={classes.textWrapper}>
          <Typography variant="h2" className={classes.titleSection}>
            Amenities
          </Typography>
          <Typography variant="h3" className={classes.subTitleSection}>
            Gimnasio
          </Typography>
          <Typography paragraph className={classes.textSection}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Stack
            sx={{ paddingTop: "auto" }}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box className={classes.iconContainer}>
              <ArrowButton />
            </Box>
            <Typography className={classes.carrouselNumber}>
              <Typography component="span" className={classes.selectedSlide}>
                01/
              </Typography>
              05
            </Typography>
          </Stack>
        </Box>
        <Box className={classes.imgSection} />
      </Grid>
    </Grid>
  );
};

export default AmenitiesSection;
