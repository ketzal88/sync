import './ApartamentosSection.scss';
import { Link } from "react-router-dom";

const ApartamentosSection = () => {
	return (
		<div className="apartamentos-wrapper">
			<h1 className="apartamentos-title"> Apartamentos </h1>
			<div className="apartamentos-features-container">
				<div className="apartamentos-feature placeholder-background"></div>
				<div className="apartamentos-feature placeholder-background"></div>
				<div className="apartamentos-feature placeholder-background"></div>
			</div>
		</div>
	)
}

export default ApartamentosSection;
