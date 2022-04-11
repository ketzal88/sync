import './AmenitiesSection.scss';
import { Link } from "react-router-dom";

const AmenitiesSection = () => {
	return (
		<div className="amenities-wrapper"> 
			<div className="amenities-header">
				<h1> Amenities </h1>
			</div>
			<div className="amenities-gallery"></div>
		</div>
	)
}

export default AmenitiesSection;
