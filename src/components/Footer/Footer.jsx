import "./Footer.scss";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      className="footer"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Grid item className="logo"></Grid>
      <Grid container className="contacto"></Grid>
      <Grid container className="email"></Grid>
      <Grid container className="rrss-and-legal"></Grid>
    </Grid>
  );
};

export default Footer;
