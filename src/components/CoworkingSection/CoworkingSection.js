import { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cowork from "../../assets/images/coworking.jpg";
import coliving from "../../assets/images/coliving.jpg";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";
import { Link } from "react-router-dom";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  const sectionRef = useRef(null);
  const [transition, setTransition] = useState(false);
  // const callback = function (entries) {
  //   const [entry] = entries;
  //   if (entry.isIntersecting) {
  //     console.log("intersecting", entry.target.offsetTop, window.scrollY);
  //   } else {
  //     console.log("not intersecting");
  //     setTransition(!transition);
  //   }
  // };
  useEffect(() => {
    // const observer = new IntersectionObserver(callback, {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.8,
    // });
    if (sectionRef.current) {
      document.addEventListener("scroll", () => {
        if (sectionRef.current?.offsetTop - 100 < window.scrollY)
          setTransition(true);
        else setTransition(false);
      });
      // observer.observe(sectionRef.current);
    }
  }, [sectionRef]);

  return (
    <Stack direction="column" alignItems="center">
      <Stack
        direction="column"
        justifyContent={{ md: "center" }}
        className={classes.wrapperSection}
        sx={{ position: "relative" }}
        ref={sectionRef}
      >
        <img
          className={classes.imgSection}
          src={cowork}
          alt="Co-Working Incluido"
          style={{ opacity: transition ? 0 : 1 }}
        />
        <img
          className={classes.imgSection}
          id="secondImage"
          style={{ opacity: transition ? 1 : 0 }}
          src={coliving}
          alt="Co-Living Incluido"
        />
        <Box className={classes.textWrapper}>
          <Typography
            className={classes.titleSection}
            variant="h2"
            sx={{ opacity: transition ? 0 : 1 }}
          >
            Co-Working
          </Typography>
          <Typography
            className={classes.titleSection}
            variant="h2"
            sx={{ opacity: transition ? 1 : 0 }}
          >
            Co-Living
          </Typography>
          <Typography
            className={classes.textSection}
            title="Cómodo y amplio espacio ubicado en la azotea. Oficinas privadas y mesas compartidas que ofrecen un ambiente de trabajo informal."
          >
            Cómodo y amplio espacio ubicado en la azotea. Oficinas privadas y
            mesas compartidas que ofrecen un ambiente de trabajo informal.
          </Typography>
        </Box>
      </Stack>
      <Stack
        id="recorridoSection"
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.recorridoVirtualWrapper}
      >
        <Link
          to="/recorrido-virtual"
          target="_blank"
          className={classes.recorridoButton}
          sx={{ textAlign: "center" }}
        >
          Recorrido Virtual
        </Link>
      </Stack>
    </Stack>
  );
};
export default CoworkingSection;
