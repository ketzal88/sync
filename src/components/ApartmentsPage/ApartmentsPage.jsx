import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ScheduleInterviewModal from "./ApartmentModal/ApartmentModal";
import { getApartments } from "../../data";
import {
  dormitoriosText,
  formatSuperficie,
  pisoText,
} from "../../utils/apartmentsUtils";
import { useApartmentsPageStyles } from "./apartmentsPage.styles";

const PISOS_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TIPOS_OPTIONS = [
  {
    label: "Monoambiente",
    value: "monoambiente",
  },
  {
    label: "Dos ambientes",
    value: "dosambientes",
  },
  {
    label: "Tres ambientes",
    value: "tresambientes",
  },
];

const DEFAULT_APARTMENTS = getApartments();

export default function ApartmentsPage() {
  const [tipo, setTipo] = useState("");
  const [piso, setPiso] = useState("");
  const [currentApartment, setCurrentApartment] = useState({});
  const [open, setOpen] = useState(false);
  const [apartments, setApartments] = useState(DEFAULT_APARTMENTS || []);
  const classes = useApartmentsPageStyles();

  const closeModal = () => {
    setOpen(false);
  };

  const handlePisoChange = (e) => {
    const { value } = e.target;
    setPiso(value);
    if (value) {
      if (tipo) {
        setApartments([
          ...DEFAULT_APARTMENTS.filter(
            (a) => a.piso === value && a.tipo === tipo
          ),
        ]);
      } else {
        setApartments([...DEFAULT_APARTMENTS.filter((a) => a.piso === value)]);
      }
    } else {
      if (tipo) {
        setApartments([...DEFAULT_APARTMENTS.filter((a) => a.tipo === tipo)]);
      } else {
        setApartments(DEFAULT_APARTMENTS);
      }
    }
  };

  const handleTipoChange = (e) => {
    const { value } = e.target;
    setTipo(value);
    if (value) {
      if (piso) {
        setApartments([
          ...DEFAULT_APARTMENTS.filter(
            (a) => a.tipo === value && a.piso === piso
          ),
        ]);
      } else {
        setApartments([...DEFAULT_APARTMENTS.filter((a) => a.tipo === value)]);
      }
    } else {
      if (piso) {
        setApartments([...DEFAULT_APARTMENTS.filter((a) => a.piso === piso)]);
      } else {
        setApartments(DEFAULT_APARTMENTS);
      }
    }
  };

  const searchResultText = () => {
    if (apartments.length === 1) return "apartamento encontrado";
    return "apartamentos encontrados";
  };

  const handleScheduleInterview = (apartment) => {
    setCurrentApartment(apartment);
    setOpen(true);
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Grid container item className={classes.wrapper}>
        <Grid id="title-and-filters-container" container>
          <Grid item xl={12} lg={12} className={classes.title}>
            <Typography variant="h1" className={classes.apartamentosTitle}>
              Apartamentos
            </Typography>
          </Grid>
          <Grid className={classes.filtersContainer} container item>
            <Grid container item sx={{ width: "25%", marginRight: "176px" }}>
              <TextField
                id="pisos-select"
                select
                value={piso}
                onChange={handlePisoChange}
                variant="filled"
                fullWidth
                label="Piso"
                InputProps={{
                  sx: {
                    height: "85px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "30px",
                    lineHeight: "1em",
                    fontWeight: "300",
                    top: piso ? "0px" : "10px",
                  },
                }}
                inputProps={{
                  style: {
                    height: "85px",
                  },
                }}
                SelectProps={{
                  SelectDisplayProps: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                      fontWeight: "300",
                      lineHeight: "1em",
                      height: "85px",
                    },
                  },
                  IconComponent: (props) => (
                    <KeyboardArrowDownIcon
                      {...props}
                      sx={{ color: "#F1804F !important" }}
                    />
                  ),
                }}
                sx={{
                  height: "85px",
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "4px solid #F1804F",
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "4px solid #F1804F",
                  },
                  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                    {
                      borderBottom: "4px solid #F1804F",
                    },
                  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):after":
                    {
                      borderBottom: "4px solid #F1804F",
                    },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "unset",
                  },
                  "& .MuiFilledInput-root:hover": {
                    backgroundColor: "unset",
                  },
                  "& .MuiFilledInput-input:focus": {
                    backgroundColor: "unset",
                  },
                }}
              >
                <MenuItem value="">Ninguno</MenuItem>
                {PISOS_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid container item sx={{ width: "25%" }}>
              <TextField
                id="tipos-select"
                select
                value={tipo}
                onChange={handleTipoChange}
                variant="filled"
                fullWidth
                label="Tipo"
                InputProps={{
                  sx: {
                    height: "85px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "30px",
                    lineHeight: "1em",
                    fontWeight: "300",
                    top: tipo ? "0px" : "10px",
                  },
                }}
                inputProps={{
                  style: {
                    height: "85px",
                  },
                }}
                SelectProps={{
                  SelectDisplayProps: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                      fontWeight: "300",
                      lineHeight: "1em",
                      height: "85px",
                    },
                  },
                  IconComponent: (props) => (
                    <KeyboardArrowDownIcon
                      {...props}
                      sx={{ color: "#F1804F !important" }}
                    />
                  ),
                }}
                sx={{
                  height: "85px",
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "4px solid #F1804F",
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "4px solid #F1804F",
                  },
                  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                    {
                      borderBottom: "4px solid #F1804F",
                    },
                  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):after":
                    {
                      borderBottom: "4px solid #F1804F",
                    },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "unset",
                  },
                  "& .MuiFilledInput-root:hover": {
                    backgroundColor: "unset",
                  },
                  "& .MuiFilledInput-input:focus": {
                    backgroundColor: "unset",
                  },
                }}
              >
                <MenuItem value="">Ninguno</MenuItem>
                {TIPOS_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item id="catalogue" flexDirection="column">
          <Box sx={{ marginBottom: "38px" }}>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: "300",
                letterSpacing: "0px",
              }}
            >
              {apartments.length} {searchResultText()}
            </Typography>
          </Box>
          <Grid item className={classes.apartmentsContainer}>
            {apartments.map((apartment) => (
              <Grid
                key={apartment.name}
                container
                item
                className="apartment-card-btn"
                sx={{
                  width: "100%",
                  padding: 6,
                  backgroundColor: "#132127",
                  borderRadius: "40px",
                  marginBottom: "43px",
                  textTransform: "none",
                }}
              >
                <Grid item sx={{ width: "33.33%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={apartment.img1}
                      alt={`apartment-${apartment.name}`}
                      height="100%"
                      width="100%"
                    />
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  pl={"56px"}
                  flexDirection="column"
                  flexWrap="unset"
                  sx={{
                    width: "41.66%",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xl={12}>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontSize: 50,
                          fontWeight: "900",
                          color: "white",
                        }}
                      >
                        {apartment.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          color: "white",
                        }}
                      >
                        {formatSuperficie(apartment.superficie)}M<sup>2</sup>
                      </Typography>
                    </Box>
                  </Grid>
                  <Divider
                    sx={{
                      border: "4px solid #F1804F",
                      width: "50%",
                      marginBottom: "31px",
                      marginTop: "20px",
                    }}
                    textAlign="left"
                  />
                  <Grid item xl={12}>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          color: "white",
                        }}
                      >
                        {apartment.piso}
                        {pisoText(apartment.piso)} piso
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          color: "white",
                        }}
                      >
                        {apartment.dormitorios === 0
                          ? TIPOS_OPTIONS[0].label
                          : apartment.dormitorios}{" "}
                        {dormitoriosText(apartment.dormitorios)}
                      </Typography>
                    </Box>
                    <Grid
                      container
                      item
                      sx={{ marginTop: "20px" }}
                      flexDirection="row"
                    >
                      <Box
                        sx={{
                          height: 49,
                          width: 49,
                          backgroundColor: "white",
                          borderRadius: "50%",
                          marginRight: "20px",
                        }}
                      />
                      <Box
                        sx={{
                          height: 49,
                          width: 49,
                          backgroundColor: "white",
                          borderRadius: "50%",
                          marginRight: "20px",
                        }}
                      />
                      <Box
                        sx={{
                          height: 49,
                          width: 49,
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  flexDirection="column"
                  sx={{ width: "25%" }}
                >
                  <Grid
                    container
                    item
                    sx={{
                      flex: 1,
                      alignItems: "flex-end",
                      marginBottom: "30px",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        height: "83px",
                        borderRadius: "46px",
                        borderColor: "#F1804F",
                        py: "28px",
                      }}
                      component={"a"}
                      target="_blank"
                      href="https://helda.helsinki.fi/bitstream/handle/10138/304677/Touronen_Ville_Pro_gradu_2019.pdf"
                      download
                    >
                      <Typography
                        sx={{
                          fontSize: 21,
                          color: "white",
                          fontWeight: "bold",
                          letterSpacing: -0.9,
                        }}
                      >
                        Descargar PDF
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid
                    container
                    item
                    sx={{
                      flex: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleScheduleInterview(apartment)}
                      sx={{
                        height: "83px",
                        borderRadius: "46px",
                        backgroundColor: "#F1804F",
                        py: "28px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 21,
                          color: "white",
                          fontWeight: "bold",
                          letterSpacing: -0.9,
                        }}
                      >
                        Agenda una entrevista
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ScheduleInterviewModal
          open={open}
          handleClose={closeModal}
          apartment={currentApartment}
        />
      </Grid>
    </Stack>
  );
}
