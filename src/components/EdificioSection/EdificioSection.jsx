import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEdificioStyles } from "./edificioSection.styles";
import { edificioDetailList } from "./edificioDetailList";

const EdificioSection = () => {
  const classes = useEdificioStyles();
  return (
    <Grid className={classes.container}>
      <Stack direction="row" justifyContent="flex-end">
        <Box className={classes.secondWrapper}>
          <Typography variant="h2" className={classes.titleSection}>
            El Edificio
          </Typography>
          <Box sx={{ marginTop: "70px" }}>
            {edificioDetailList.map(({ label, quantity }) => (
              <>
                <Typography className={classes.listQuantity}>
                  {quantity}
                </Typography>
                <Typography className={classes.listLabel}>{label}</Typography>
              </>
            ))}
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
};

export default EdificioSection;
