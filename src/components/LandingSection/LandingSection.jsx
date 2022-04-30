import "./LandingSection.scss";
// import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useLadingSectionStyles } from "./landingSection.styles";

const LandingSection = () => {
  const classes = useLadingSectionStyles();
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      classes={{ root: classes.wrapper }}
    >
      <Grid item classes={{ root: classes.textWrapper }}>
        <Typography classes={{ root: classes.location }} variant="h3">
          Montevideo, Uruguay
        </Typography>
        <Typography sx={{ color: "white", marginBottom: "45px" }} variant="h1">
          Diseñados para <br /> una nueva era
        </Typography>

        <Grid item classes={{ root: classes.buttonWrapper }}>
          <button className="landing-button ver">
            <Typography variant="h4" fontWeight={700}>
              VER APARTAMENTOS
            </Typography>
          </button>
          <button className="landing-button">
            <Typography variant="h4" fontWeight={700}>
              RECORRIDO VIRTUAL
            </Typography>
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingSection;
