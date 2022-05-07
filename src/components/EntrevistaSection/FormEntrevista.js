import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { usePrensaSectionStyles } from "./EntrevistaSection.style";
const FormEntrevista = () => {
  const classes = usePrensaSectionStyles();
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        paddingRight: "118px",
        paddingLeft: "71px",
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          htmlFor="component-simple"
          className={classes.inputLabel}
          required
        >
          Nombre
        </InputLabel>
        <Input
          id="component-simple"
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          className={classes.inputLabel}
          required
          htmlFor="component-simple"
        >
          Apellido
        </InputLabel>
        <Input classes={{ underline: classes.underlineInput }} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          className={classes.inputLabel}
          required
          htmlFor="component-simple"
        >
          Email
        </InputLabel>
        <Input classes={{ underline: classes.underlineInput }} />
      </FormControl>
      <Stack direction="row" justifyContent="space-between" gap="45px">
        <FormControl sx={{ width: "175px" }}>
          <InputLabel
            shrink
            className={classes.inputLabel}
            required
            htmlFor="component-simple"
          >
            Cod. Área
          </InputLabel>
          <Input classes={{ underline: classes.underlineInput }} />
        </FormControl>
        <FormControl sx={{ width: "323px" }}>
          <InputLabel
            shrink
            className={classes.inputLabel}
            required
            htmlFor="component-simple"
          >
            Teléfono
          </InputLabel>
          <Input
            className={classes.input}
            classes={{ underline: classes.underlineInput }}
          />
        </FormControl>
      </Stack>
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          className={classes.inputLabel}
          required
          htmlFor="component-simple"
        >
          Selecciona un país
        </InputLabel>
        <Input classes={{ underline: classes.underlineInput }} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          className={classes.inputLabel}
          required
          htmlFor="component-simple"
        >
          Consulta
        </InputLabel>
        <Input classes={{ underline: classes.underlineInput }} />
      </FormControl>
      <Box style={{ marginLeft: "730px", marginBottom: "50px" }}>
        <RadioGroup>
          <FormControlLabel
            control={<Radio className={classes.radioButton} />}
            componentsProps={usePrensaSectionStyles.labelRadioButton}
            value="true"
            label="Acepto términos y condiciones"
          />
        </RadioGroup>
        <button className={classes.buttonSubmit}>
          Enviar{" "}
          <ArrowForwardIosIcon
            sx={{ color: "white", marginLeft: "88px", paddingRight: "42px" }}
          />
        </button>
      </Box>
    </Stack>
  );
};
export default FormEntrevista;
