import './EntrevistaSection.scss';
import { Link } from "react-router-dom";
import { Grid, FormControl, InputLabel, Input, TextField } from '@mui/material';

const EntrevistaSection = () => {
	return (
		<Grid container flexDirection={"column"} className="entrevista-wrapper">
			<Grid item>
				<h1> Agendemos una <br /> entrevista </h1>
			</Grid>
			<Grid container flexDirection={"row"} sx={{marginTop: "80px"}}>
				<Grid item className="foto-christian"></Grid>
				<Grid container className="form-entrevista" flexWrap={"wrap"} justifyContent={"space-between"}>
					<FormControl>
						<TextField className="form-input" variant="standard" label="Nombre" id="nombre"></TextField>
					</FormControl>
					<FormControl>
						<TextField className="form-input" variant="standard" label="Apellido" id="apellido"></TextField>
					</FormControl>
					<FormControl>
						<TextField className="form-input" variant="standard" label="Email" id="email"></TextField>
					</FormControl>
					<Grid container sx={{width: "534px"}} flexDirection="row" justifyContent="space-between">
						<FormControl>
							<TextField variant="standard" label="Cod Área" id="codArea"></TextField>
						</FormControl>
						<FormControl>
							<TextField variant="standard" label="Teléfono" id="telefono"></TextField>
						</FormControl>
					</Grid>
					<FormControl>
						<TextField className="form-input" variant="standard" label="Selecciona un país" id="pais"></TextField>
					</FormControl>
					<FormControl>
						<TextField className="form-input" variant="standard" label="Consulta" id="consulta"></TextField>
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default EntrevistaSection;
