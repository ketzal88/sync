import './AmenitiesSection.scss';
import { Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowButton from '../ArrowButton/ArrowButton';

const AmenitiesSection = () => {
	return (
		<Grid container flexDirection="column" className="amenities-wrapper"> 
			<Grid className="amenities-header">
				<Typography variant="h1"> Work & Live </Typography>
			</Grid>
			<Grid className="amenities-gallery">
				<Grid container justifyContent="center" flexDirection="column" className="left-container">
					<Typography variant="h1"> Amenities </Typography>
					<Grid container style={{marginTop:"131px", marginBottom:"213px"}}>
						<Typography variant="h2"> Gimnasio </Typography>
						<Typography variant="h4"> 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque
						</Typography>
					</Grid>
					<Grid container flexDirection="row" alignItems="center" justifyContent="space-between" className="gallery-controller">
						<ArrowButton> </ArrowButton>
						<Typography variant="h4"> 01/05 </Typography>
					</Grid>
				</Grid>
				<Grid>
					<img className="image" src="images/imagen-galeria.jpg" alt="" />
				</Grid>
			</Grid>
			<Grid className="co-working placeholder-background" container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
				<Grid item className="co-working-text">
					<Typography fontSize={141} fontWeight={900}>
						Co-Working
					</Typography>
				</Grid>
				<Typography variant="h4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
			</Grid>
			<Grid container justifyContent="center" alignItems="center" className="recorrido-virtual">
				<button className="standard-button"> 
					<Typography variant="h4" fontWeight={700}>
						RECORRIDO VIRTUAL
					</Typography>
				</button>
			</Grid>
		</Grid>
	)
}

export default AmenitiesSection;
