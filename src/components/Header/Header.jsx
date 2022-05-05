import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { navLinks } from "./headerLinksList";
import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";
import logoSync from "../../assets/images/logo_sync.svg";

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <Box sx={{ position: "relative" }}>
      <Grid container className={classes.textWrapper}>
        <img src={logoSync} alt="Logo Sync" className={classes.logo} />
        {navLinks.map((item, index) => (
          <Grid key={index} item className={classes.navLink}>
            <Link to={item.link}>{item.label}</Link>
          </Grid>
        ))}
        <Grid
          item
          className={classes.navLink}
          sx={{ paddingLeft: "100px", fontWeight: "bold" }}
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
    </Box>
  );
};

export default Header;
