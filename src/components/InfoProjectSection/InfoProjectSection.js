import { Box, Stack, Typography } from "@mui/material";
import aboutProject from "../../assets/sync-video-promo.mp4";
import { useInfoProjectSectionStyles } from "./InfoProjectSection.style";
import videoPlaceholder from "../../assets/images/placeholder-video.png";

const InfoProjectSection = () => {
  const classes = useInfoProjectSectionStyles();

  const fullScreenHandler = (e) => {
    const video = e.target;
    if (video.requestFullscreen) video.requestFullscreen();
    /* Firefox */
    if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    /* Chrome, Safari & Opera */
    if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    /* IE/Edge */
    if (video.msRequestFullscreen) video.msRequestFullscreen();
    video?.play();
    video.setAttribute("controls", "controls");
  };

  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
        marginTop: "-1px",
        display: { xs: "none", md: "flex" },
      }}
      direction="row"
      justifyContent="center"
    >
      <Stack direction="row" className={classes.wrapper}>
        <Box>
          <Typography variant="h3" className={classes.titleSection}>
            Conoce el proyecto
          </Typography>
          <video
            className={classes.imageBox}
            poster={videoPlaceholder}
            onClick={fullScreenHandler}
            onPause={(e) => e.target.removeAttribute("controls")}
          >
            <source src={aboutProject} />
          </video>
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.subTitleSection}>
            Más conectados <br />
            que nunca
          </Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            imperdiet condimentum massa, id fringilla quam lobortis eget. Cras
            sed porta tortor. Etiam pharetra arcu risus. Duis egestas enim at
            urna.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
export default InfoProjectSection;
