import { Box, Stack, Typography } from "@mui/material";
import { useUbicacionSectionStyles } from "./UbicacionSection.styles";
// import mapa from "../../assets/images/mapa.svg";

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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "132px", lg: "114px", xl: "136px" },
          }}
        >
          {/* <img src={mapa} alt="alta" /> */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "662px", lg: "766px" },
            }}
          >
            <iframe
              title="Villa Morra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9010433622257!2d-56.19513828462395!3d-34.90893278121838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81d27dd3230f%3A0x196409b507faca89!2sCanelones%201068%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1sen!2sar!4v1656377522197!5m2!1sen!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default UbicacionSection;
