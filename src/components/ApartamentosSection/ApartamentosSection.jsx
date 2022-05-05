import { useApartamentsStyles } from "./apartamentos.styles";
import { Box, Grid, Typography } from "@mui/material";

const ApartamentosSection = () => {
  const classes = useApartamentsStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.sectionTitle}>
        Apartamentos
      </Typography>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        className="monoambiente-info"
      >
        <Box className={classes.imgContainer}>
          Video que inicia cuando está en el viewport
        </Box>
        <Typography variant="h2" className={classes.subTitle}>
          Monoambiente
        </Typography>
        <Typography paragraph className={classes.text}>
          Sup total 47 m | Propio 34 m <br /> Terraza 2,60 m | CDM 10,40 m
        </Typography>
        <button className={classes.button}>
          <Typography paragraph sx={{ marginBottom: 0 }} fontWeight={700}>
            VER TIPOLOGÍA
          </Typography>
        </button>
      </Grid>
    </Box>
  );
};

export default ApartamentosSection;
