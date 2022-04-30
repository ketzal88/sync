import { Link } from "react-router-dom";
import { Box, Grid, Stack } from "@mui/material";
import { navLinks } from "./headerLinksList";
import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <Stack sx={{ position: "relative" }}>
      <Grid container spacing={0} className={classes.textWrapper}>
        {navLinks.map((item, index) => (
          <Grid key={index} item className={classes.navLink}>
            <Link to={item.link}>{item.label}</Link>
          </Grid>
        ))}
        <Grid
          item
          className={classes.navLink}
          sx={{ paddingLeft: "149px", fontWeight: "bold" }}
        >
          <Link to="/apartaments">VITRIUM CAPITAL</Link>
        </Grid>
        <Box className={classes.imgContainer}>
          <img
            src={entrevistaRapida}
            alt="Entrevista Rápida"
            className={classes.imgStyles}
          />
        </Box>
      </Grid>
    </Stack>
  );
};

export default Header;
