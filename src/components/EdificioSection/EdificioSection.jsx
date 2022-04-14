import './EdificioSection.scss';
import { Link } from "react-router-dom";
import ArrowButton from '../ArrowButton/ArrowButton';
import { Grid } from '@mui/material';

const EdificioSection = () => {
	return (
		<Grid className="edificio-wrapper">
			<Grid className="edificio-section padding placeholder-background">
				<Grid className="content-column">
					<h1 className="edificio-title"> El edificio </h1>
					<Grid className="edificio-info">
						<h1>104</h1>
						<h3>Apartamentos</h3>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<h1>2</h1>
						<h3>Torres conectadas</h3>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<h1>60</h1>
						<h3>Cocheras en subsuelo</h3>
					</Grid>
					<Grid container flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} className="edificio-info">
						<h1>22</h1>
						<h3>Cocheras en planta baja</h3>
					</Grid>
				</Grid>
			</Grid>
			<Grid className="edificio-section">
				<Grid className="edificio-image placeholder-background">foto</Grid>
				<Grid container flexDirection={"column"} justifyContent={"center"} className="edificio-features">
					<h1> Tecnología </h1>
					<Grid style={{margin: "76px 0"}}>
						<h2> Domótica </h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
						</h4>
					</Grid>
					<ArrowButton></ArrowButton>
				</Grid>
			</Grid>
			<Grid className="edificio-section padding white flex-column">
				<h1>Conocé al equipo <br /> detrás del proyecto</h1>
				<Grid className="arq-info">
					<Grid className="arq-video placeholder-background">video</Grid>
					<Grid className="arq-text">
						<h2>Algo innovador</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
						</h4>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default EdificioSection;
