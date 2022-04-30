import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLadingSectionStyles } from "./landingSection.styles";

const LandingSection = () => {
  const navigate = useNavigate();
  const classes = useLadingSectionStyles();
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      className={classes.wrapper}
    >
      <Grid item className={classes.textWrapper}>
        <Typography className={classes.location} variant="h3">
          Montevideo, Uruguay
        </Typography>
        <Typography sx={{ color: "white", marginBottom: "45px" }} variant="h1">
          Diseñados para <br /> una nueva era
        </Typography>

        <Grid item className={classes.buttonWrapper}>
          <Button
            className={classes.apartamentsButton}
            onClick={() => navigate("/apartaments")}
          >
            VER APARTAMENTOS
          </Button>
          <Button className={classes.recorridoButton}>RECORRIDO VIRTUAL</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingSection;
