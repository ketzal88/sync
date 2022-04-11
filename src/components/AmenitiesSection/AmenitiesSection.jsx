import './AmenitiesSection.scss';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowButton from '../ArrowButton/ArrowButton';

const AmenitiesSection = () => {
	return (
		<Grid className="amenities-wrapper"> 
			<Grid className="amenities-header">
				<h1> Amenities </h1>
			</Grid>
			<Grid className="amenities-gallery">
				<Grid className="left-container">
					<h2> Gimnasio </h2>
					<h4> 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque
					</h4>
					<Grid className="gallery-controller">
						<ArrowButton> </ArrowButton>
						<h4> 01/05 </h4>
					</Grid>
				</Grid>
				<Grid className="image">
					<img src="images/imagen-galeria.jpg" alt="" />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default AmenitiesSection;
