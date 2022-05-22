import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useAmennitiesSectionStyles } from "./ammenitiesSection.styles";
import galeria from "../../assets/images/imagen-galeria.jpg";

const AmenitiesSection = () => {
  const classes = useAmennitiesSectionStyles();
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        className={classes.titleWrapper}
      >
        <Typography variant="h2" className={classes.titleSection}>
          Work & Live
        </Typography>
      </Stack>
      <Box className={classes.wrapperSection}>
        <Stack direction="row" justifyContent="center">
          <Grid className={classes.amenitiesGallery}>
            <Box className={classes.textWrapper}>
              <Typography variant="h2" className={classes.titleSection1}>
                Amenities
              </Typography>
              <Typography variant="h3" className={classes.subTitleSection}>
                Gimnasio
              </Typography>
              <Typography paragraph className={classes.textSection}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, architecto corporis culpa obcaecati sit beatae aut
                corrupti qui eligendi tempore, hic magni vel molestiae expedita
                alias fuga ratione porro eius. Impedit quod soluta, commodi
                facere asperiores non quis possimus ullam.
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
                  <Typography
                    component="span"
                    className={`${classes.carrouselNumber} ${classes.selectedSlide}`}
                  >
                    01/
                  </Typography>
                  05
                </Typography>
              </Stack>
            </Box>
            <img className={classes.imgSection} src={galeria} alt="galeria" />
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AmenitiesSection;
