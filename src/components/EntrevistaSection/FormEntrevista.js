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
    <Box component="form" className={classes.formContainer}>
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
      <Stack direction="row" justifyContent="space-between">
        <FormControl className={classes.codAreaForm}>
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
        <FormControl className={classes.phoneNumberInput}>
          <InputLabel
            shrink
            className={classes.inputLabel}
            required
            htmlFor="component-simple"
          >
            Teléfono
          </InputLabel>
          <Input classes={{ underline: classes.underlineInput }} />
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
      <Box className={classes.formControl} />
      <Box className={classes.formControl}>
        <RadioGroup>
          <FormControlLabel
            control={<Radio className={classes.radioButton} />}
            componentsProps={usePrensaSectionStyles.labelRadioButton}
            value="true"
            label="Acepto términos y condiciones"
          />
        </RadioGroup>
        <button className={classes.buttonSubmit}>
          ENVIAR <ArrowForwardIosIcon className={classes.carrotButton} />
        </button>
      </Box>
      {/* </Box> */}
    </Box>
  );
};
export default FormEntrevista;
