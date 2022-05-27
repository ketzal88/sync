import { Box, Stack, Typography } from "@mui/material";
import { useUbicacionSectionStyles } from "./UbicacionSection.styles";

const UbicacionSection = () => {
  const classes = useUbicacionSectionStyles();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Box className={classes.ubicacionWrapper}>
        <Typography className={classes.titleSection} variant="h2">
          Ubicación
        </Typography>
      </Box>
    </Stack>
  );
};

export default UbicacionSection;
