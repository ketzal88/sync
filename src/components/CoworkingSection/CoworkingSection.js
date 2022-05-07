import "./AmenitiesSection.scss";
import { Grid, Typography } from "@mui/material";

const CoworkingSection = () => {
  return (
    <Grid>
      <Grid
        className="co-working placeholder-background"
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item className="co-working-text">
          <Typography fontSize={141} fontWeight={900}>
            Co-Working
          </Typography>
        </Grid>
        <Typography variant="h4">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="recorrido-virtual"
      >
        <button className="standard-button">
          <Typography variant="h4" fontWeight={700}>
            RECORRIDO VIRTUAL
          </Typography>
        </button>
      </Grid>
    </Grid>
  );
};
export default CoworkingSection;
