import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLadingSectionStyles } from "./landingSection.styles";

const LandingSection = () => {
  const navigate = useNavigate();
  const classes = useLadingSectionStyles();
  return (
    <Grid container spacing={0} className={classes.wrapper}>
      <Grid item className={classes.textWrapper}>
        <Typography className={classes.location} variant="h3">
          Montevideo, Uruguay
        </Typography>
        <Typography className={classes.mainTitle} variant="h1">
          Diseñados para <br /> una nueva era
        </Typography>
        <Grid item className={classes.buttonWrapper}>
          <button
            className={classes.apartamentsButton}
            onClick={() => navigate("/apartaments")}
          >
            VER APARTAMENTOS
          </button>
          <button className={classes.recorridoButton}>RECORRIDO VIRTUAL</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingSection;
