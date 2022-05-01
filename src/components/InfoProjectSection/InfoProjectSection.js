import "./EdificioSection.scss";
import { Grid, Typography } from "@mui/material";

const InfoProjectSection = () => {
  return (
    <Grid className="edificio-section padding white flex-column">
      <Typography variant="h1">
        Conocé al equipo <br /> detrás del proyecto
      </Typography>
      <Grid className="arq-info">
        <Grid className="arq-video placeholder-background">video</Grid>
        <Grid className="arq-text">
          <Typography variant="h2">Algo innovador</Typography>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor
            magna.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InfoProjectSection;
