import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { navLinks } from "./headerLinksList";
import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";
import logoSync from "../../assets/images/logo_sync.svg";

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1920px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Box className={classes.textWrapper}>
        <img src={logoSync} alt="Logo Sync" className={classes.logo} />
        <Box style={{ marginTop: "23px" }}>
          {navLinks.map((item) => (
            <Link key={item.label} to={item.link} className={classes.navLink}>
              {item.label}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/apartaments"
            className={`${classes.navLink} ${classes.LinkVitrium}`}
          >
            VITRIUM CAPITAL
          </Link>
          <Box className={classes.imgContainer}>
            <img
              src={entrevistaRapida}
              alt="Entrevista Rápida"
              className={classes.imgStyles}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
