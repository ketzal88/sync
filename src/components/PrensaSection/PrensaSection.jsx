import { Box, Stack, Typography } from "@mui/material";
import { usePrensaSectionStyles } from "./PrensaSection.styles";
import PrensaElement from "./PrensaElement";
import elementImg from "../../assets/images/imagen-galeria.jpg";
import elementImg1 from "../../assets/images/landing-image.jpg";

const articles = [
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    buttonLabel: "Ver más...",
    imgURL: elementImg1,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
];

const PrensaSection = () => {
  const classes = usePrensaSectionStyles();
  return (
    <Box className={classes.wrapperSection}>
      <Typography variant="h2" className={classes.titleSection}>
        Prensa
      </Typography>
      <Stack direction="row" sx={{ gap: "30px" }}>
        {articles.map((article, index) => (
          <PrensaElement key={index} {...article} />
        ))}
      </Stack>
    </Box>
  );
};

export default PrensaSection;
