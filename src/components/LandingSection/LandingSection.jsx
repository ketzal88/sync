import './LandingSection.scss';
import { Link } from "react-router-dom";
import { Grid, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import theme from '../../theme/default';

const LandingSection = () => {
	return (
		<Grid container flexDirection="column" justifyContent="center" className="landing-wrapper">
			<Grid container className="location">
				<Typography variant="h3">
					Montevideo, Uruguay
				</Typography>
			</Grid>
			<Grid>
				{/*<h1 style={{color: 'white', marginBottom: '45px'}}> Diseñados para <br /> una nueva era </h1>*/}
				<Typography sx={{color: "white", marginBottom: "45px"}} variant="h1"> 
					Diseñados para <br /> una nueva era 
				</Typography>
			</Grid>
			<Grid container className="buttons">
				<button className="landing-button ver"> 
					<Typography variant="h4" fontWeight={700}>
						VER APARTAMENTOS
					</Typography>
				</button>
				<button className="landing-button"> 
					<Typography variant="h4" fontWeight={700}>
						RECORRIDO VIRTUAL
					</Typography>
				</button>
			</Grid>
		</Grid>
	)
}

export default LandingSection;
