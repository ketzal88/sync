import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { navLinks } from "./headerLinksList";
import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";
import logoSync from "../../assets/images/logo_sync.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Links = ({ classes }) =>
  navLinks.map(({ label, link }) => (
    <Link key={label} to={link} className={classes.navLink}>
      {label}
    </Link>
  ));

const Header = ({ headerRef }) => {
  const [state, setState] = useState(false);
  const [isOverLandingSection, setIsOverLandingSection] = useState(true);
  const classes = useHeaderStyles(!isOverLandingSection);

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setState(open);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY + 70 > headerRef.current.clientHeight)
        setIsOverLandingSection(false);
      else setIsOverLandingSection(true);
    });
  });

  return (
    <Box className={classes.headerWrapper} sx={{ zIndex: 2 }}>
      <Box className={classes.textWrapper}>
        <Box className={classes.drawerBox}>
          <IconButton
            aria-label="open drawer"
            onClick={() => setState(true)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{
                color: "white",
              }}
            />
          </IconButton>
          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: (theme) => theme.palette.primary.syncBlue,
              },
            }}
          >
            {<Links classes={classes} />}
          </Drawer>
        </Box>
        <img src={logoSync} alt="Logo Sync" className={classes.logo} />
        <Box className={classes.linksContainer}>
          {<Links classes={classes} />}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            to="/apartaments"
            className={`${classes.navLink} ${classes.LinkVitrium}`}
          >
            VITRIUM CAPITAL
          </Link>
          <Box
            className={classes.imgContainer}
            sx={{ display: isOverLandingSection ? "flex" : "none" }}
          >
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
