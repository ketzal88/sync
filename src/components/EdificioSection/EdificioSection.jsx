import './EdificioSection.scss';
import { Link } from "react-router-dom";
import ArrowButton from '../ArrowButton/ArrowButton';
import { Grid, Typography } from '@mui/material';

const EdificioSection = () => {
	return (
		<Grid className="edificio-wrapper">
			<Grid className="edificio-section padding placeholder-background">
				<Grid className="content-column">
					<Grid className="edificio-title">
						<Typography variant="h1">
							El edificio
						</Typography>
					</Grid>
					<Grid className="edificio-info">
						<Typography variant="h1">104</Typography>
						<Typography variant="h3">Apartamentos</Typography>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<Typography variant="h1">2</Typography>
						<Typography variant="h3">Torres conectadas</Typography>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<Typography variant="h1">60</Typography>
						<Typography variant="h3">Cocheras en subsuelo</Typography>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<Typography variant="h1">22</Typography>
						<Typography variant="h3">Cocheras en planta baja</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid className="edificio-section">
				<Grid className="edificio-image placeholder-background">foto</Grid>
				<Grid container flexDirection={"column"} justifyContent={"center"} className="edificio-features">
					<Typography variant="h1"> Tecnología </Typography>
					<Grid style={{margin: "76px 0"}}>
						<Typography variant="h2"> Domótica </Typography>
						<Typography variant="h4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
						</Typography>
					</Grid>
					<ArrowButton></ArrowButton>
				</Grid>
			</Grid>
			<Grid className="edificio-section padding white flex-column">
				<Typography variant="h1">Conocé al equipo <br /> detrás del proyecto</Typography>
				<Grid className="arq-info">
					<Grid className="arq-video placeholder-background">video</Grid>
					<Grid className="arq-text">
						<Typography variant="h2">Algo innovador</Typography>
						<Typography variant="h4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default EdificioSection;
