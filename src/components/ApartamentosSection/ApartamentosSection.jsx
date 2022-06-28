import { useEffect, useRef, useState } from "react";
import { useApartamentsStyles } from "./apartamentos.styles";
import { Box, Stack, Typography } from "@mui/material";
import apartamento from "../../assets/sync-paneo.mp4";

const ApartamentosSection = () => {
  const classes = useApartamentsStyles();
  const videoRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const callback = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setAutoPlay(true);
      videoRef?.current?.play();
    } else {
      setAutoPlay(false);
      videoRef?.current?.pause();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [videoRef]);

  return (
    <Stack direction="row" justifyContent="center">
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Apartamentos
        </Typography>
        <Stack
          flexDirection="column"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <video
            ref={videoRef}
            className={classes.imgContainer}
            src={apartamento}
            autoPlay={autoPlay}
          />

          <Stack sx={{ height: { xs: "320px", md: "330px" } }}>
            <Typography variant="h2" className={classes.subTitle}>
              Monoambiente
            </Typography>
            <Typography className={classes.text}>
              <span>Sup total 47 m | Propio 34 m</span>
              <br />
              <span>Terraza 2,60 m | CDM 10,40 m</span>
            </Typography>
            <button
              className={classes.button}
              style={{ opacity: 0.6 }}
              title="funcionalidad en desarrollo"
            >
              <Typography sx={{ marginBottom: 0 }} fontWeight={700}>
                VER TIPOLOGÍA
              </Typography>
            </button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ApartamentosSection;
