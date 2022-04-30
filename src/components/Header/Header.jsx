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
        <Box
          sx={{
            marginLeft: "40px",
            width: "114px",
            height: "187px",
            backgroundColor: "#0A1217",
            border: "1px solid #707070",
            borderRadius: "0px 0px 23px 23px;",
          }}
        >
          <img
            src={entrevistaRapida}
            alt="Entrevista Rápida"
            style={{
              margin: "95px 21px 20px 21px",

              backgroundColor: "white",
              borderRadius: "50%",
              padding: "17.48px",
              width: "37.4px",
              height: "37.4px",
            }}
          />
        </Box>
      </Grid>
    </Stack>
  );
};

export default Header;
