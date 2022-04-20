import './LandingSection.scss';
import { Link } from "react-router-dom";
import { Grid, Button } from '@mui/material';

const LandingSection = () => {
	return (
		<Grid container flexDirection="column" justifyContent="center" className="landing-wrapper">
			<Grid container className="location">
				Montevideo, Uruguay
			</Grid>
			<Grid>
				<h1 style={{color: 'white', marginBottom: '45px'}}> Diseñados para <br /> una nueva era </h1>
			</Grid>
			<Grid container className="buttons">
				<button className="landing-button ver"> VER APARTAMENTOS </button>
				<button className="landing-button"> DESCARGAR BROCHURE </button>
			</Grid>
		</Grid>
	)
}

export default LandingSection;
