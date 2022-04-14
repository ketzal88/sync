import './AmenitiesSection.scss';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowButton from '../ArrowButton/ArrowButton';

const AmenitiesSection = () => {
	return (
		<Grid flexDirection={"column"} className="amenities-wrapper"> 
			<Grid className="amenities-header">
				<h1> Work & Live </h1>
			</Grid>
			<Grid className="amenities-gallery">
				<Grid className="left-container">
					<h1> Amenities </h1>
					<Grid item style={{marginTop:"131px", marginBottom:"213px"}}>
						<h2> Gimnasio </h2>
						<h4> 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque
						</h4>
					</Grid>
					<Grid className="gallery-controller">
						<ArrowButton> </ArrowButton>
						<h4> 01/05 </h4>
					</Grid>
				</Grid>
				<Grid>
					<img className="image" src="images/imagen-galeria.jpg" alt="" />
				</Grid>
			</Grid>
			<Grid className="co-working placeholder-background" container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
				<Grid item className="co-working-text">
					Co-Working
				</Grid>
				<h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </h4>
			</Grid>
			<Grid justifyContent={"center"} alignItems={"center"} className="recorrido-virtual">
				<button className="standard-button"> RECORRIDO VIRTUAL </button>
			</Grid>
		</Grid>
	)
}

export default AmenitiesSection;
