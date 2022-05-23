import { Box, Stack, Typography } from "@mui/material";
import { useFooterStyles } from "./Footer.styles";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  const classes = useFooterStyles();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ backgroundColor: (theme) => theme.palette.primary.syncBlue }}
    >
      <Stack
        component="footer"
        direction="row"
        justifyContent="space-between"
        className={classes.footerContainer}
      >
        <Box className="logo"></Box>
        <Stack direction="row" gap="153px" justifyContent="space-between">
          <Box className="contacto">
            <Typography variant="h5" className={classes.subTitle}>
              Contacto
            </Typography>
            <Typography paragraph className={classes.text}>
              Paraguay: (+595) 21 728 8640
              <br />
              Uruguay: (+598) 2917 1663
              <br />
              Argentina: (+54) 11 2152 0660
              <br />
              USA: (+1) 305 567 3373
            </Typography>
          </Box>
          <Box className="email">
            <Typography variant="h5" className={classes.subTitle}>
              Email
            </Typography>
            <Typography paragraph className={classes.text}>
              ventas@vitriumcapital.com
              <br />
              brokers@vitriumcapital.com
            </Typography>
          </Box>
          <Box className={classes.socialMedias}>
            <Stack direction="row" gap="25px">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={linkedin} alt="Linkedin" />
              <img src={youtube} alt="Youtube" />
            </Stack>
            <Typography
              paragraph
              className={classes.text}
              sx={{ marginTop: "24px !important" }}
            >
              Aviso Legal | Politica de Privacida
              <br />
              Vitrium Capital © Todos los derechos <br /> reservados
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
